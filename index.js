// var load = document.getElementById("loading");
// function loader() {
//     load.style.display = "none";
    

    
// }




AOS.init({
    offset:50,
    duration:1000

});  

    var bar = document.getElementById('bars');
    var time = document.getElementById('times');
    var ul = document.querySelector('ul');

    bar.onclick = function(){
        bar.style.display="none";
        time.style.display="block";
        ul.classList.add('add');
    }

    time.onclick = function(){
        time.style.display="none";
        bar.style.display="block";
        ul.classList.remove('add');
    }

    var year = new Date().getFullYear();

document.querySelector('#footer-date').innerHTML = year;
window.addEventListener("load", function () {
  preloader.style.visibility = "hidden";
});

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:10000,
        disableOnInteraction:false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  