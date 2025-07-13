let h1Elem = document.querySelector('h1')

h1Elem.addEventListener('mouseover',event=>{
    h1Elem.style.color = 'red'
})

h1Elem.addEventListener('mouseout',event=>{
    h1Elem.style.color = 'pink'
})