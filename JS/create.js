const API_URL = "https://66371215288fedf6937f559e.mockapi.io/users"
let myForm = document.getElementById("createForm")
//your form should have the attribute id="createForm" inorder to work on this approach
myForm.addEventListener('submit',async(e)=>{
    e.preventDefault()
   try {
    let data = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value,
        address:{
            state:document.getElementById("state").value,
            city:document.getElementById("city").value,
            zipcode:document.getElementById("zipcode").value
        },
        status:true
    }
    let res = await fetch(API_URL,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(data)
    })

    if(res.status===201)
        window.location.href='/'
    else
        alert(`${res.status} - ${res.statusText}`)
   } catch (error) {
    console.error(error)
   }
})