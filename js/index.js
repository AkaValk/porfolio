const scroll = new LocomotiveScroll({
    el : document.querySelector("[data-scroll-container]"),
    smooth : true,
    tablet : {smooth : true},
    smartphone : {smooth : true}
})
const pskils = document.querySelector(".p-skills")
// Body Color
scroll.on("scroll", ()=> {
  if(document.querySelector("#colorheader.is-inview")) {
    document.body.style.background = "#f4a384"
    document.body.style.color = "#fefeff"
  }
  
  else{
    document.body.style.background = "#fefeff"
    document.body.style.color =" #000"
  }
  
   
})
/*
scroll.on("scroll", ()=> {
  if(document.querySelector("#colorfooter.is-inview")){
    document.body.style.background = "#f4a384"
    document.body.style.color = "#fefeff"
  }
  else{
    document.body.style.background = "#fefeff"
    document.body.style.color =" #000"
  }
})*/