let secElement = document.querySelector('.secClass')
let btnElement = document.querySelector('.btnClass')
let modalParentElement = document.querySelector('.modal-parent')
let xElement = document.querySelector('.X')
let bodyElement = document.body

btnElement.addEventListener('click' , function modalF(){
    secElement.style.filter = 'blur(10px)'
    modalParentElement.style.display = 'block'
})

xElement.addEventListener('click' , function removeF(){
    modalParentElement.style.display = 'none'
    secElement.style.filter = 'blur(0px)'
    // modalParentElement.remove()
})

bodyElement.addEventListener('keydown' , function removeEsc(event){
    if(event.keyCode === 27){
        modalParentElement.style.display = 'none'
        secElement.style.filter = 'blur(0px)'
    }
})