let s1 = document.getElementById("sq1")
s1.addEventListener("mouseenter",function(){
     let r=Math.floor(Math.random()*100)
     s1.innerHTML=`<h1>${r}</h1>` // to change number inside
     s1.style.backgroundColor="red" // to change color inside
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>1</h1>`
    s1.style.backgroundColor="white"
})  
s1.addEventListener("dblclick",function(){
    let r1=Math.floor(Math.random()*256)
     let r2=Math.floor(Math.random()*256)
     let r3=Math.floor(Math.random()*256)
     s1.style.backgroundColor=`rgb(${r1},${r2},${r3})`
})  

let s2 = document.getElementById("sq2")
let clr="red"
s2.addEventListener("mouseenter",function(){
    if(clr=="green")                   // to put rgb inside the box
    {
        s2.style.backgroundColor="green"
        clr="red"
    }
    else if(clr=="red"){
        s2.style.backgroundColor="red"
        clr="blue"
    }
    else{
        s2.style.backgroundColor="blue"
        clr="green"
    }
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white"
})  

let s3 = document.getElementById("sq3")
s3.addEventListener("mouseenter",function(){
     let r1=Math.floor(Math.random()*256)
     let r2=Math.floor(Math.random()*256)
     let r3=Math.floor(Math.random()*256)
     s3.style.backgroundColor=`rgb(${r1},${r2},${r3})` // to put random color inside
})
s3.addEventListener("mouseleave",function(){
      s3.style.backgroundColor="white"
})  

let s4 = document.getElementById("sq4")
s4.addEventListener("click",function(){
     let r1=Math.floor(Math.random()*256)
     let r2=Math.floor(Math.random()*256)
     let r3=Math.floor(Math.random()*256)
     s1.style.backgroundColor=`rgb(255,${r2},${r3})`
     s2 .style.backgroundColor=`rgb(${r1},255,255)`
     s3.style.backgroundColor=`rgb(255,${r2},255)` // to put random color inside
})
s4.addEventListener("mouseleave",function(){
      s1.style.backgroundColor="white"
      s2.style.backgroundColor="white"
      s3.style.backgroundColor="white"
})  

let main=document.getElementById("main")
let crsr=document.getElementById("cursor")
main.addEventListener("mousemove",function(details){
    crsr.style.left= details.x + "px"
    crsr.style.top=details.y +"px"
})