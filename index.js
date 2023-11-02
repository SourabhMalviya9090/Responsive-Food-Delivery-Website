// Js for the form

// Geting form feild values
let name=document.getElementById('name')
let email=document.getElementById('email')
let contact=document.getElementById('contactNum')

// Getting form by its id
let form=document.getElementById("form")

// Adding event listener on submit event
form.addEventListener("submit",()=>{
        alert(`Hurray!..${name.value} Your order has been placed! We will process your order soon and details will be send to your contact number!`);
})
