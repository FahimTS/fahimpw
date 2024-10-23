/**
 * Title: Basic JavaScript File
 * Description: This is the main js file to interact with DOM element of this portfolio
 * Author: Md. Fahim Hossen
 * Date: 19/January/2024
 */

/*=================== slick slider ==================*/
$(document).ready(function(){
    $('.slide_con').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
    });
});
/*=================== owl carousel slider ==================*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 5
  });
});


/*===================Auto Typed Image==================*/
var typed = new Typed(".auto-type", {
    strings: ["Md. Fahim Hossen"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

/*=================== jarallax js ==================*/
$('.jarallax').jarallax({
    speed: 0.2,
});

/*=================== counter up js ==================*/
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// ==================== progess ==================
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelector(".skill_percentage");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

/*=================== menu bar sticky and back to top ==================*/

$(document).ready(() => {
  $('.back_to_top').click(() => {
      $('html, body').animate({scrollTop: 0}, 500);
  })

  $(window).on('scroll', () => {
      let scrollTop = $(this).scrollTop(); 

      if(scrollTop > 200){
          $('.navbar').addClass('main_menu_bg');
      }else{
          $('.navbar').removeClass('main_menu_bg');
      }

      if(scrollTop > 200){
          $('.back_to_top').fadeIn()
      }else{
          $('.back_to_top').fadeOut()
      }
  })

  $(window).on('load', () => {
      $('.preloader_overlay').fadeOut(1000);
  })
})
// ======================== popup zoom in ==========================

// let imgShow = document.querySelectorAll(".gallery_item img");
// let popupImg = document.querySelector(".popup_img");
// let closeBtn = document.querySelector(".popup_img span i");

// function showImg(){
//   imgShow.forEach(image => {
//     image.onclick = () => {
//       popupImg.style.display = 'block';
//       document.querySelector(".popup_img img").src = image.getAttribute('src');
//       console.log('clicked.....');
//     }
//   })
// }
// closeBtn.addEventListener('click',() => {
//   popupImg.style.display = 'none';
// })
// showImg();
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});
// ======================== contact form validation ==========================

const form = document.querySelector('form');
const fName = document.getElementById('name');
const emailAddress = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {

  const bodyMessage = `Full Name: ${fName.value} <br> Email Address: ${emailAddress.value} <br> Message: ${message.value}`

  Email.send({
    SecureToken: "7c4efcbc-9ac0-4e2c-b697-57243c3858ca",
    To : 'mdfahimhossen629@gmail.com',
    From : "mdfahimhossen629@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == 'OK'){
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
);
}

function checkInputs() {
  let items = document.querySelectorAll('.item');
  for(const item of items){
    if(item.value == ""){
      item.classList.add('error')
      item.parentElement.classList.add('error')
    };

    if(items[1].value !== ""){
      checkMail();
    };

    items[1].addEventListener('keyup', () => {
      checkMail();
    });

    item.addEventListener('keyup', () => {
      if(item.value !== ''){
        item.classList.remove('error')
        item.parentElement.classList.remove('error')
      }else{
        item.classList.add('error')
        item.parentElement.classList.add('error')
      }
    })
  }
}

function checkMail(){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ;
  const errorTextEmail = document.querySelector('.error_txt.email');

  if(emailAddress.value !== ""){
    errorTextEmail.innerHTML = 'Enter a valid email address';
  }else{
    errorTextEmail.innerHTML = "Valid email is required.";
  }

  if(!emailAddress.value.match(re)){
    emailAddress.classList.add('error')
    emailAddress.parentElement.classList.add('error')
  }else{
    emailAddress.classList.remove('error')
    emailAddress.parentElement.classList.remove('error')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs()

  if(!fName.classList.contains("error") && !emailAddress.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
    sendEmail();
    
    form.reset();
    return false;
  }
})

// ======================== dark theme ==========================
const darkTheme = document.querySelector('.dark_theme');
darkTheme.addEventListener('click', () => {
  darkTheme.querySelector("i").classList.toggle("fa-sun")
  darkTheme.querySelector("i").classList.toggle("fa-moon")
  document.body.classList.toggle('dark')
})

window.addEventListener('load', () => {
  if(document.body.classList.contains("dark")){
    darkTheme.querySelector('i').classList.add("fa-sun");
  }else{
    darkTheme.querySelector('i').classList.add("fa-moon");
  }
})

// ========================AOS Animation ==========================
AOS.init();