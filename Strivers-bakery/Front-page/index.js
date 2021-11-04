const productContainer = document.querySelector('.product-container')
const productCard = document.querySelector('.card')
let displayProduct = ''

const renderDisplayProduct = (products) => {
    products.forEach (product => {
        displayProduct += 
        `
        <div class="card col-xs-6 col-md-3 mx-1 my-1">
            <div class="card-body mx-n4 mt-n4" id="${product._id}">
                <img src="${product.imageUrl}" class="img-fluid my-3" alt="...">
                <div class="d-flex justify-content-between align-item-center w-100"> 
                    <p class="card-title"><strong>${product.name}</strong></p>
                    <p class="card-text">Kr ${product.price}</p>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Product Discription</label>
                    <textarea class="description form-control" id="exampleFormControlTextarea1" rows="3">${product.description}</textarea>
                </div>
                <ul class="list-group list-group-flush">
                    <div class="card-body d-flex justify-content-between p-0">
                        <a href="#" id="edit-product" class="card-link">Edit</a>
                        <a href="#" id="delete-product" class="card-link delete">Delete</a>
                    </div>
                </ul>
            </div>
        </div>
        `
        })
        productContainer.innerHTML = displayProduct
}

const fetchData = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product", {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg"
            }
        })
        
        if (response.ok) {
            const products = await response.json()
            console.log(products)
            renderDisplayProduct(products)
        } else {
            throw Error("Products are not fetched!")
        }
    } catch (err) {
        throw err
      }
}

///Delete and Edit btn
productContainer.addEventListener('click', function (e) {
    e.preventDefault()
    // console.log(e.target.id)
    let deleteBtn = e.target.id === 'delete-product'
    let editBtn = e.target.id == 'edit-product'  ///Assigning id to the btns when pressed
   
    console.log(e.target.parentElement.parentElement.parentElement.id)

    let id = e.target.parentElement.parentElement.parentElement.id
    if(deleteBtn) {
        console.log("Remove product")
    }

    if(deleteBtn) {
        fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg"
            }
        })
        .then(response => response.json())
        .then(() => location.reload()) ///Note to self: Look this up!! ---> suppose to reload the browser when deleting is completed
    }
    if(editBtn) {
      const parent = e.target.parentElement.parentElement.parentElement
      let contentTitle = parent.querySelector('.card-title').textContent
      let descriptionContent = parent.querySelector('.description').textContent
      console.log(contentTitle, descriptionContent)

      


    }
})
window.onload  = async () => {
    fetchData()
} 



