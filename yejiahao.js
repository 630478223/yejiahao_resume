const div_time=document.querySelector('.pg_1_1 div')
div_time.innerHTML=new Date().toLocaleString()
setInterval((e)=>{
  div_time.innerHTML=new Date().toLocaleString()
},1000)

const back_top=document.querySelector('svg')
back_top.addEventListener('click',()=>{
  document.documentElement.scrollTop=0
})