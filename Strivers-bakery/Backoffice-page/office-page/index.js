
window.onload = () => {
    const form = document.querySelector('form')
    form.onsubmit = function(e) {
        let productInput = {
            "name": document.querySelector('.name').value,
            "description": document.querySelector('.description').value,
            "brand": document.querySelector('.brand').value,
            "imageUrl": document.querySelector('.url').value,
            "price": document.querySelector('.price').value,
            "userId": "admin", //SERVER GENERATED
            "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
            "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
            "__v": 0 //SERVER GENERATED
          }
   
    e.preventDefault()
    postData(productInput)
    
    }
}



const postData = function (productInput) {
    fetch("https://striveschool-api.herokuapp.com/api/product", {
        method: "POST",
        body: JSON.stringify(productInput),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((r) => r.json())
    .then(console.log)
    .catch(err => console.log(err))
}


