const API_URL = "https://66371215288fedf6937f559e.mockapi.io/users"
function constructTable(data)
{
    let tbody = document.getElementById("table-body")
    tbody.innerHTML = ""
    data.forEach((e)=>{
        let tr = document.createElement("tr")
        tr.innerHTML=`
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.mobile}</td>
        <td>
        <label class="switch">
        <input type="checkbox" ${e.status?"checked":""} onchange="toggleUser(${e.id},${e.status})">
        <span class="slider round"></span>
      </label>
        </td>
        <td>
            <button class="btn btn-primary" onClick="navigate(${e.id})">Edit</button>
            <button class="btn btn-danger" onClick="deleteData(${e.id})">Delete</button>
        </td>
        `
        tbody.appendChild(tr)
    })
}
function navigate(id)   
{
    window.location.href=`./../HTML/view.html?id=${id}`
}
async function deleteData(id)
{
    try {
        let res = await fetch(`${API_URL}/${id}`,{
            method:"DELETE"
        })
        if(res.status===200)
            fetchData()
        else
            alert(`${res.status} - ${res.statusText}`)
    } catch (error) {
        console.error(error)
    }
}
async function toggleUser(id,status)
{
    try {
        let res = await fetch(`${API_URL}/${id}`,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"PUT",
            body:JSON.stringify({
                status:status?false:true
            })
        })
        if(res.status===200)
            fetchData()
        else
            alert(`${res.status} - ${res.statusText}`)
    } catch (error) {
        console.error(error)
    }
}
async function fetchData(){
    try {
        let res = await fetch(API_URL)
        let data = await res.json()
        if(res.status===200)
            constructTable(data)
        else
            alert(`${res.status} - ${res.statusText}`)
    } catch (error) {
        console.error(error)
    }
}
fetchData()