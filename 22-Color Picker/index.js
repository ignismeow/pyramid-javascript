let colors = []
const allColors = document.getElementById('all-colors')
const btn = document.getElementById('btn')

async function handleRequest(hex, mode) {
    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=8`)
    const data = await res.json()
    colors = data.colors
    
    allColors.innerHTML = ""
    
    colors.forEach((color) => {
        allColors.innerHTML += `
        <div class="imageContainer">
            <img src="${color.image.bare}" alt="color Image"/>
            <span>${color.hex.value}</span>
        </div>
        `
    });
}

function loadColor() {
    const inputSelection = document.getElementById('ColorsOption').value
    const colorIput = document.getElementById('colorInput').value
    const colorValue = colorIput.replace("#", "") 
    handleRequest(colorValue, inputSelection)
}

btn.addEventListener('click', (e) => {
    e.preventDefault()  
    loadColor()  
})

loadColor()
