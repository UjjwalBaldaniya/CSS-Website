let main = document.getElementById('main')
let openPopup = document.getElementById("open_popup")

const api = "https://fakestoreapi.com/products"
const fetchApi = async () => {
    const res = await fetch(api)
    const data = await res.json()
    console.log(data)
    show(data)

}
fetchApi()

const show = (data) => {
    data.map((element, index) => {
        main.innerHTML += `<div class="cart" key=${index}>
            <img src=${element.image} alt=${element.title} />
            <h4>${element.category}</h4>
            <h5>$ ${element.price}</h5>
            <button class="btn">Buy</button>
        </div>`
    })
}

// const showImg = () => {
//     console.log('clicked')
//     openPopup.style.display = openPopup.style.display === "block" ? "none" : "block"
// }

const showImg = () => {
    openPopup.classList.toggle("show")
}
window.onclick = (e) => {
    if (!e.target.matches(".img1")) {
        openPopup.classList.remove("show")
    }
}
openPopup.addEventListener('click', (e) => {
    e.stopPropagation()
})


