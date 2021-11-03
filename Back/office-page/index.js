

let product1 = {
  "name": "app test 1",  //REQUIRED
  "description": "somthing longer", //REQUIRED
  "brand": "nokia", //REQUIRED
  "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
  "price": 100, //REQUIRED
  "userId": "admin", //SERVER GENERATED
  "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
  "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
  "__v": 0 //SERVER GENERATED
}


const postData = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product", {
        method: "POST",
        body: JSON.stringify(product1,),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((r) => r.json())
    .then(console.log)
    .catch(err => console.log(err))
}
window.onload = () => {
    postData()
}

