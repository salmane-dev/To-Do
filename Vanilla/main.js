
let myinput = document.getElementById("todo")
let mybtn = document.getElementById("btn")
let myform = document.getElementById("forma")
let mylist = document.getElementById("todos")
let errora = document.getElementById("errora")
let nano = document.querySelector("#todos > p")
let liscount = document.getElementById("todos").getElementsByTagName("li").length
let current

myform.addEventListener('submit', e => { 
    e.preventDefault()
    // couunt li's so i know if i should show nothing here message or not
    liscount = document.getElementById("todos").getElementsByTagName("li").length + 1

    
    if(mybtn.innerText == "Save"){
        console.log("Goo => " + current)
        current.innerText =  myinput.value
        myinput.value = ''
        mybtn.innerText = "Add"
        current.parentElement.style.background = "#334242"
    }


    else if(myinput.value.trim() != ''){
        nano.innerText = ''     
        mylist.insertAdjacentHTML('afterbegin', '<li><span>'+ myinput.value + 
        '</span> <span> <i class="fas fa-times" onClick="deletetodo(this)"></i> <i class="fas fa-edit" onClick="Edit(this)"></i></span>   </li>')
        errora.innerText = ''
        myinput.value = ''
    }else{
        errora.innerText = ' Type Something'
    }
})

 function deletetodo(e){
    liscount = document.getElementById("todos").getElementsByTagName("li").length
    if(liscount <= 1 ) 
        nano.innerText = 'Nothing in here'     
    e.parentElement.parentElement.remove()
} 

function Edit(e){ 
    myinput.value = e.parentElement.parentElement.firstChild.innerText
    myinput.focus()
    mybtn.innerText = 'Save'
    current = e.parentElement.parentElement.firstChild
    e.parentElement.parentElement.style.background = "#5e7878"
    console.log("in Edit function " + e.parentElement.parentElement.firstChild )
}
