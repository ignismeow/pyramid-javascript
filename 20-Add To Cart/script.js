let productsArry = [
    { name: "Black Chair", headline: "Prisoner black chair", price: "1, 500", image: "https://images.unsplash.com/photo-1554941829-fcef7b298d5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pistol", headline: "Black pistol ultraease", price: "3,000", image: "https://images.unsplash.com/photo-1681679743960-c54706d8df97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBpc3RvbHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Bullets", headline: "Copper plated Bullets", price: "1,000", image: "https://images.unsplash.com/photo-1529627217121-7f98e892cc4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1bGxldHN8ZW58MHx8MHx8fDA%3D" }
]

let popular = [
    { name: "Black Chair", headline: "Prisoner black chair", price: "1, 500", image: "https://images.unsplash.com/photo-1554941829-fcef7b298d5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pistol", headline: "Black pistol ultraease", price: "3,000", image: "https://images.unsplash.com/photo-1681679743960-c54706d8df97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBpc3RvbHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Bullets", headline: "Copper plated Bullets", price: "1,000", image: "https://images.unsplash.com/photo-1529627217121-7f98e892cc4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1bGxldHN8ZW58MHx8MHx8fDA%3D" }
]

let cart = []

function addProducts() {
    let clutter = ""
    productsArry.forEach((product, index) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${product.image}" alt="products images">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">$ ${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
    })

    document.querySelector(".products").innerHTML = clutter
}

function addPopularProducts() {
    let clutter = ""
    popular.forEach((product) => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">Bisco Do Lobo</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">$ ${product.price}</h4>
                    </div>
                </div>`
    })

    document.querySelector(".populars").innerHTML = clutter
}

function addToCart() {
    document.querySelector('.products').addEventListener('click', (e) => {
        if (e.target.classList.contains('add')) {
            cart.push(productsArry[e.target.dataset.index])
        }

    })
}

function showProductsinCart(){
    document.querySelector('.carticon').addEventListener("click", () => {
        document.querySelector('.cartexpnd').style.display="block";

        let clutter = ""
        cart.forEach((prod, index) => {
            clutter += `
                <div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                        <img class="w-full h-full object-cover" src="${prod.image}"/>                    
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                    </div>
                </div>
            `
        })

        document.querySelector(".cartexpnd").innerHTML = clutter
    })
}

showProductsinCart()
addToCart()
addPopularProducts()
addProducts()
