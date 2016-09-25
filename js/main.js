var listCount = 1;
$(document).ready(function (){
  setInterval(function(){
    $(".chevronList icon").css("color", "#3498DB")
    $(".chevronList icon:nth-child(" + listCount + ")" ).css("color", "#D5D8DC")
    listCount++;
    if(listCount > 3) {
      listCount = 1;
    }
    console
  }, 1000);
});

$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {
      $('.main_h').removeClass('navTransparent');
    } else {
      $('.main_h').addClass('navTransparent');
      if($('.main_h').hasClass('open-nav')){
        $('.main_h').removeClass('navTransparent');
      } else {
        $('.main_h').addClass('navTransparent');
      }
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
  if ($('.main_h').hasClass('open-nav')) {
      $('.main_h').removeClass('open-nav');
      if ($(window).scrollTop() < 50) {
        $('.main_h').addClass('navTransparent');
      }
  } else {
      $('.main_h').addClass('open-nav');
      $('.main_h').removeClass('navTransparent');
  }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

// Random Facts
var randomFacts = [
  "I am a 6'10\"!",
  "I am a sand volleyball player!",
  "I watch anime!",
  "I can solve a Rubix Cube!",
  "I can juggle!",
  "WoW is my most played video game!"
];
var number = randomNumber(randomFacts.length);
var newNumber = randomNumber(randomFacts.length);

$('.random').html(randomFacts[number]);

$('.randomBtn').click(function(){
  while (number === newNumber) {
    newNumber = randomNumber(randomFacts.length);
  }
  number = newNumber;
  $('.random').html(randomFacts[number]);
});

function randomNumber(num){
  return Math.floor((Math.random() * num));
};

// When the browser is ready...
  // $(function() {
  //   // validate
  //   $("#contact").validate({
  //       // Set the validation rules
  //       rules: {
  //           name: "required",
  //           email: {
  //               required: true,
  //               email: true
  //           },
  //           message: "required",
  //       },
  //       // Specify the validation error messages
  //       messages: {
  //           name: "Please enter your name",
  //           email: "Please enter a valid email address",
  //           message: "Please enter a message",
  //       },
  //       // submit handler
  //       submitHandler: function(form) {
  //         //form.submit();
  //          $(".message").show();
  //          $(".message").fadeOut(4500);
  //       }
  //   });
  // });
