
const fetchData = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/search?=", {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg"
            }
        })
        
        if (response.ok) {
            const dataResponse = await response.json()
            console.log(dataResponse)
            
        } else {
            throw Error("Products are not fetched!")
        }
    } catch (err) {
        throw err
      }
}
window.onload  = async () => {
    fetchData()
} 



