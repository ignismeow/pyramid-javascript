const express = require('express')
const jwt = require('jsonwebtoken')
const { UserModel, TodoModel } = require("./db")
const mongoose = require('mongoose')
const { auth, loggerMiddleware, JWT_SECRET} = require("./auth")
const bcrypt = require('bcrypt');
const { z } = require('zod')
const fs = require('fs')

mongoose.connect('mongodb+srv://saad:Beenco.%40123@cluster0.gmaqi.mongodb.net/todo-app-database')
const app = express()
app.use(express.json())

const time = new Date()
const timeDate = time.toISOString()

app.post('/signup', loggerMiddleware, async function (req, res) {
    const requiredBody = z.object({
        email: z.string().min(10).max(50).email(),
        name: z.string().min(3).max(50),
        password: z.string().min(8).refine((password) => /[A-Z]/.test(password), {
            message: "Atleaset one uppercase required.",
          }).refine((password) => /[a-z]/.test(password), {
            message: "Atleaset one lowercase required."
          }).refine((password) => /[!@#$%^&*]/.test(password), {
            message: "Atlease one special character required.",
          })
    })
    
    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if(!parsedDataWithSuccess.success){
        return res.json({
            message: "Incorrect Format",
            error: parsedDataWithSuccess.error
        })
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name

    try {
        const hashedPassword = await bcrypt.hash(password, 5)        
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name,
            signedUptime: timeDate
        })
    } catch (error) {
        console.error("Error creating user:", error); // Log error for debugging
        const fserrorMessage = `${timeDate} ${error.toString()}`
        try {
            fs.appendFileSync('./ErrorCollectionfile.txt', fserrorMessage);            
            console.log("File written successfully.");
        } catch (error) {
            console.error("Error writing to file:", error);
        }

        return res.status(403).json({
            message: "User already exists.",
        });

    }

    res.json({
        message: "You are signedUp."
    })

    console.log(`New user "${name}" with email: "${email}" has singed Up at "${timeDate}".`)

})

app.post('/signin', loggerMiddleware, async function (req, res) {
    const requiredBody = z.object({
        email: z.string().min(10).max(50).email(),
        password: z.string().min(8).refine((password) => /[A-Z]/.test(password), {
            message: "Atleaset one uppercase required.",
          }).refine((password) => /[a-z]/.test(password), {
            message: "Atleaset one lowercase required."
          }).refine((password) => /[!@#$%^&*]/.test(password), {
            message: "Atlease one special character required.",
          })
    })
    
    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if(!parsedDataWithSuccess.success){
        return res.json({
            message: "Incorrect Format",
            error: parsedDataWithSuccess.error
        })
    }

    const { email, password } = req.body

    try {
        const user = await UserModel.findOne({
            email: email
        })
    
        if(!user){
            res.status(403).json({
                message: "User does not exists!:("
            })
        }
    
        const passwordMatch = bcrypt.compare(password, user.password)
    
        if (passwordMatch) {
            const token = jwt.sign({
                id: user._id.toString()
            }, JWT_SECRET)
            res.json({
                token: token
            })
        } else {
            res.status(403).json({
                message: "Incorret password!"
            })
        }
        
    } catch (error) {
        console.log("Error signing in: ", error)
        return res.status(403).json({
            message: "Incorrect credentials!"
        })
    }


})

app.post('/todo', loggerMiddleware, auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title,
        done,
        userId
    })
    
    res.json({
        message: "Todo created"
    })
})

app.get('/todos', loggerMiddleware, auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId,
    })
    console.log(todos)
    
    res.json({
        todos
    })
})

app.delete('/deletetodo', loggerMiddleware, auth, async function (req, res){
    const userId = req.userId
    const todoId = req.body.todoId

    if(typeof(todoId) != "string" || !todoId){
        return res.status(403).json({
            message: "Invalid Id provided"
        })
    }

    try {
        const todos = await TodoModel.find({
            userId: userId,
        })
        
        if(!todos) {
            return res.json({
                message: "No todo was found"
            })
        }
        /* const findTodo = todos.find(todo => todo._id.toString() === todoId) */
        await TodoModel.findByIdAndDelete(todoId)        
    } catch (error) {
        console.log("Error occurred", error)
        return res.json({
            message: "Todos not found"
        })
    }
    
    res.json({
        message: "Todo deleted"
    })
})

app.post('/markdone', loggerMiddleware, auth, async function(req, res){
    const userId = req.userId
    const todoId = req.body.todoId

    if(typeof(todoId) != "string" || !todoId){
        return res.status(403).json({
            message: "Invalid Id provided"
        })
    }

    try {
        const todos = await TodoModel.find({
            userId: userId,
        })
        
        if(!todos) {
            return res.json({
                message: "No todo was found"
            })
        }

        const findTodo = todos.find(todo => todo._id.toString() === todoId)
       
        await TodoModel.findByIdAndUpdate(todoId, {
           done: findTodo.done ? false : true
        })            
        
        console.log(findTodo)        
    } catch (error) {
        console.log("Error occurred", error)
        return res.json({
            message: "Todos not found"
        })
    }
    
    res.json({
        message: "Todo updated"
    })
})

app.listen(3000, () => {
    console.log('Sever is running on port 3000')
})
