let contentArray = [
    {name: "Petals of Roses", image:"https://images.unsplash.com/photo-1516450549693-4ff7251cc967?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0YWxzfGVufDB8fDB8fHww"},
    {name: "Pink Rose", image:"https://images.unsplash.com/photo-1502736842968-bcaab72d0700?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0YWxzfGVufDB8fDB8fHww"},
    {name: "light Pink Rose", image:"https://images.unsplash.com/photo-1518665773578-4f13f4ca356c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldGFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Dark purple rose", image:"https://images.unsplash.com/photo-1530489041714-72f7a9e37eb6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBldGFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Green white flower", image:"https://images.unsplash.com/photo-1504512720642-c74be6102665?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBldGFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Red flower", image:"https://images.unsplash.com/photo-1504510706348-4587dbe86782?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBldGFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Mehroon flower", image:"https://images.unsplash.com/photo-1504693948171-509d1564af9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBldGFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Petals of Roses", image:"https://images.unsplash.com/photo-1510574957479-15f0d77ce564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBldGFsc3xlbnwwfHwwfHx8MA%3D%3D"},
]

function showTheCards() {
    let clutter = "";
    contentArray.forEach((item) => {
        clutter += `
            <div class="box">
                <img class="cursor-pointer" src="${item.image}" alt="image">
                <div class="caption">Lorem ipsum</div>
            </div>
        `
    })

    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality(){
    let input = document.getElementById('searchinput')

    input.addEventListener('focus', () => {
        document.querySelector(".overlay").style.display ='block'
    })

    input.addEventListener('blur', () => {
        document.querySelector(".overlay").style.display ='none'
        document.querySelector(".searchdata").style.display = "none"
    })

    input.addEventListener('input', () => {
        const filteredArray = contentArray.filter(obj => obj.name.toLowerCase().startsWith(input.value))
        let clutter = ""
        filteredArray.forEach((obj) => {
            clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>
            `
        })
        document.querySelector(".searchdata").style.display = "block"
        document.querySelector(".searchdata").innerHTML = clutter
    })


}



handleSearchFunctionality()
showTheCards()