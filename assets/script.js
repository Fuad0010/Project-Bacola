$('.slickslider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  const myNavBar = document.querySelector(".my-nav-bar");
  let selectLocation=document.getElementById("selectLocation");
  let areaModal=document.getElementById("areaModal");
  let allContent=document.getElementById("allContent");
  let modalExit=document.getElementById("modalExit");

  const div = document.createElement("div");
  div.classList.add("overlay");

  selectLocation.onclick=function (){
  areaModal.style.display="block";
  
  console.log(myNavBar)
//  myNavBar.querySelector('.row').insertAdjacentHTML('beforeend',`<div class="overlay"></div>`
//  )

myNavBar.querySelector('.row').appendChild(div);
  // allContent.style.filter="brightness(70%)";
} 

  modalExit.onclick=function (){
  areaModal.style.display="none";
  const overlay= document.querySelector(".overlay");

  myNavBar.querySelector('.row').removeChild(overlay);

  // myNavBar.removeChild(div);
  
  // allContent.style.filter="brightness(100%)";    
} 

overlay.onclick=function (){
  areaModal.style.display="none";
  const overlay= document.querySelector(".overlay");

  myNavBar.querySelector('.row').removeChild(overlay);

  // myNavBar.removeChild(div);
  
  // allContent.style.filter="brightness(100%)";    
} 

