
const notes= document.querySelector('.notes')
const inputbox=document.querySelector('.input')
function createnote(){
  console.log('ok')
  let p= document.createElement('p')
  console.log(p)
  p.classList.add('input')
    let img= document.createElement('img')
  img.src='images/delete.png'
  p.contentEditable='true'
p.appendChild(img)
notes.appendChild(p)
   localstorage()
}

function localstorage(){
  localStorage.setItem('data',notes.innerHTML)
}
notes.addEventListener('click',(e)=>{
  if(e.target.tagName=='IMG'){
    e.target.parentElement.remove()
     localstorage()
  }
  else if(e.target.tagName=='P'){
    const inputbox=document.querySelectorAll('.input')
    inputbox.forEach(p => {
      p.onkeyup=function(){
        localstorage()
      }
    })
  }
})
function inserting(){
 notes.innerHTML=localStorage.getItem('data')
}
inserting()