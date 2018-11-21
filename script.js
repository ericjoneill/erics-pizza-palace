$(document).ready(function(){

//STICKY NAV
  let navOffset = $('.about-section').offset().top;
  $('nav').wrap('<div class= "nav-placeholder"></div>');
  $('.nav-placeholder').height($('nav').outerHeight());

  $(window).scroll(function(){
    let scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset - 65) {
      $('nav').addClass('fixed');
    }else {
      $('nav').removeClass('fixed');
    }
  });




  //SMOOTH SCROLLING SNIPPET*******************



  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



  //UNDERLINE NAV LINK ON SCROLL

  let scrollLink = $('.scroll');

  $(window).scroll(function(){
    let scrollBarLocation =$(this).scrollTop();

    scrollLink.each(function(){
      let sectionOffset = $(this.hash).offset().top;

      if (sectionOffset - 65 <= scrollBarLocation) {
        $(this).parent().addClass('no-hover');
        $(this).parent().siblings().removeClass('no-hover');
        $(this).parent().addClass('underline');
        $(this).parent().siblings().removeClass('underline');
      }
    });
  });


  //MOBILE NAVIGATION

  $('.fa-bars').click(function(){
    $('.nav-div ul').slideToggle();

    let icon = $('#mobile');

    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    }else{
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });


  //BUTTON SUBMIT ALERT

  //BUTTON SUBMIT ALERT

  $('.submit-btn').click(function(){
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;

    if (firstName === '' || firstName.match(/\d/)) {
      alert('You must input a valid first name');
    }else if (lastName === '' || lastName.match(/\d/)) {
      alert('You must input a valid last name');
    }else if (email === '' || !email.match(/[@]/)) {
      alert('You must input a valid email');
    }else{
      alert('Thank you, we will be contacting you soon!');

      $('.first-name').wrap('<form>').closest('form').get(0).reset();
      $('.first-name').unwrap();
      $('.last-name').wrap('<form>').closest('form').get(0).reset();
      $('.last-name').unwrap();
      $('.e-mail').wrap('<form>').closest('form').get(0).reset();
      $('.e-mail').unwrap();
      $('.text-area').wrap('<form>').closest('form').get(0).reset();
      $('.text-area').unwrap();
    }
  });

});
