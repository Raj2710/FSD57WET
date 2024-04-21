let studentsWindow;
let classWindow;

function openStudents(){
    studentsWindow = window.open('students.html')
}

function openClass(){
    classWindow = window.open('class.html')
}

function closeAllWindow(){
    studentsWindow.close()
    classWindow.close()
}

function closeWindow(){
    window.close()
}

//Stop Watch
let hh = 0;
let mm = 0;
let ss = 0;
let ms = 0;

let myInterval;
let countdown = document.getElementById("countdown")

const zeroPad = (num) => String(num).padStart(2, '0')

function startTimer(){
    myInterval = setInterval(()=>{
        ms++

        //handle ms to ss
        if(ms===100)
        {
            ss++
            ms=0
        }
        
        //handle ss to mm
        if(ss===60)
        {
            mm++
            ss=0
        }

        //handle mm to hh

        if(mm===60)
        {
            hh++
            mm=0
        }


        let html = `${zeroPad(hh)}<sub>HH</sub>:${zeroPad(mm)}<sub>MM</sub>:${zeroPad(ss)}<sub>SS</sub>:${zeroPad(ms)}<sub>MS</sub>`
        countdown.innerHTML = html

    },10)
}

function stopTimer(){
    clearInterval(myInterval)
}

function resetTimer(){
    stopTimer()
    hh=0;
    mm=0;
    ss=0;
    ms=0
    let html = `${zeroPad(hh)}<sub>HH</sub>:${zeroPad(mm)}<sub>MM</sub>:${zeroPad(ss)}<sub>SS</sub>:${zeroPad(ms)}<sub>MS</sub>`
    countdown.innerHTML = html
}

// function setData(){
//     localStorage.setItem("name","nagarajan")
//     sessionStorage.setItem("name","nagarajan")
// }

// function getData(){
//     localStorage.getItem("name")

//     localStorage.removeItem("name")

//     localStorage.clear()
//     sessionStorage.clear()
// }

// window.console.error("You have error")
// window.console.warn("This is warning")

// window.alert("Alert")
// window.prompt("Enter age")
// window.confirm("Confirm Age")

function openClose(){
    let win = window.open("class.html")

    setTimeout(()=>{
        win.close()
    },2000)
}