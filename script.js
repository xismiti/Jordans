function chicago(){
    
    let b = document.querySelector("div.jordans-section-container")
    let a = document.querySelector("div.jordan-chicago")
    b.style.display=('none')
    a.style.display= ('block')
    

}

function offwhite(){
    
    let b = document.querySelector("div.jordans-section-container")
    let a = document.querySelector("div.jordan-offwhite")
    b.style.display=('none')
    a.style.display= ('block')
    

}
function travis(){
    
    let b = document.querySelector("div.jordans-section-container")
    let a = document.querySelector("div.jordan-travis")
    b.style.display=('none')
    a.style.display= ('block')
    

}
function back(){

    let b = document.querySelector("div.jordans-section-container")
    let a = document.querySelector("div.jordan-chicago")
    let c = document.querySelector("div.jordan-offwhite")
    let k = document.querySelector("div.jordan-travis")
    b.style.display=('block')
    a.style.display= ('none')
    c.style.display= ('none')
    k.style.display=('none')

}

document.addEventListener('mousemove', parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(layer =>{
    var speed = layer.getAttribute('data-speed');
    var x     = (window.innerWidth - e.pageX * speed)/300;
    var y     = (window.innerWidth - e.pageY * speed)/300;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`

  });
}