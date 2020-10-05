
let myinput = document.getElementById("todo")
let mybtn = document.getElementById("btn")
let myform = document.getElementById("forma")
let mylist = document.getElementById("todos")
let errora = document.getElementById("errora")
let nano = document.querySelector("#todos > p")
let liscount = document.getElementById("todos").getElementsByTagName("li").length



myform.addEventListener('submit', e => { 
    e.preventDefault()
    // couunt li's so i know if i should show nothing here message or not
    liscount = document.getElementById("todos").getElementsByTagName("li").length + 1

    if(myinput.value.trim() != ''){
        nano.innerText = ''     
        mylist.insertAdjacentHTML('afterbegin', '<li><span>'+ myinput.value + 
        '</span><button onClick="Edit(this)"> Edit </button>  <button onClick="deletetodo(this)"> Delete </button></li>')
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
    e.parentElement.remove()
} 

function Edit(e){ 
    console.log(e.parentElement.firstChild.innerText)
    myinput.value = e.parentElement.firstChild.innerText
    myinput.focus()
    mybtn.innerText = 'Edit'
} 