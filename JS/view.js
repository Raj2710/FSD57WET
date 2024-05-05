const API_URL = "https://66371215288fedf6937f559e.mockapi.io/users"
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")
//your form should have the attribute name="createForm" inorder to work on this approach
let myForm = document.forms["createForm"]

myForm.addEventListener('submit',async(e)=>{
    e.preventDefault()
    try {
        let data = {
            name:myForm.name.value,
            email:myForm.email.value,
            mobile:myForm.mobile.value,
            address:{
                state:myForm.state.value,
                city:myForm.city.value,
                zipcode:myForm.zipcode.value
            }
        }
        let res = await fetch(`${API_URL}/${id}`,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"PUT",
            body:JSON.stringify(data)
        })
    
        if(res.status===200)
            window.location.href='/'
        else
            alert(`${res.status} - ${res.statusText}`)
       } catch (error) {
        console.error(error)
       }
})

async function getData()
{
    try {
        let res = await fetch(`${API_URL}/${id}`)

        if(res.status===200)
        {
            let data = await res.json()
            document.getElementById("name").value = data.name
            document.getElementById("email").value = data.email
            document.getElementById("mobile").value = data.mobile
            document.getElementById("city").value = data.address.city
            document.getElementById("state").value = data.address.state
            document.getElementById("zipcode").value = data.address.zipcode
        }
        else
            alert(`${res.status} - ${res.statusText}`)
    } catch (error) {
        console.error(error)
    }
}

getData()