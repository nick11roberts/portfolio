// Only executed our code once the DOM is ready.
window.onload = function() {

   // For parallax effect
   $('.parallax-window').parallax({imageSrc: '/images/profile.jpg'});

   // For canvas polygon bg
   fillCanvas(document.getElementById('background'),
      '#555555', 13, 13, 4);

   // For typwriter effect
   var typewriter = require('typewriter');
   var twSpan = document.getElementById('typewriter');
   var tw = typewriter(twSpan).withAccuracy(95)
                              .withMinimumSpeed(5)
                              .withMaximumSpeed(17)
                              .build();
   var terminalPropmt = '<p class="term">[</p> <p class="term-user">you</p> \
      <p class="term-host">nickrobertsportfolio</p> \
      <p class="term-dir">~</p> \
      <p class="term">] <i class="fa fa-bolt" aria-hidden="true"></i></p> '
   tw.put(terminalPropmt)
      .waitRange(250, 500)
      .type('man nicholas-roberts | cat')
      .put('<br/>')
      .waitRange(1000, 1500)
      .put('NICHOLAS-ROBERTS(1)<br/><br/>')
      .put('NAME<br/>')
      .put('&emsp;&emsp; nicholas-roberts - Nicholas "Nick" Roberts<br/><br/>')
      .put('SYNOPSIS<br/>')
      .put('&emsp;&emsp; nicholas-roberts [options] [project ..]<br/><br/>')
      .put('DESCRIPTION<br/>')
      .put('&emsp;&emsp; Developer, UC San Diego undergraduate, \
         and machine learner, <br/>\
         &emsp;&emsp; as well as a cofounder and developer of Skqrl, \
         an experience sharing platform.<br/>\
         &emsp;&emsp; Check out my portfolio below.<br/><br/>')
      .put(terminalPropmt)
      .waitRange(250, 500)
      .type('cat ~/github.com/nick11roberts/portfolio/whatsnext.txt')
      .put('<br/>')
      .waitRange(1000, 1500)
      .put('<a href="#skills">\
         Scroll down to learn more <i class="fa fa-arrow-circle-o-down" \
         aria-hidden="true"></i><br/><br/></a>')
      .put(terminalPropmt)

   // For smooth scrolling, jQuery
   $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//,'')
            == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
               $('html, body').animate({
                  scrollTop: target.offset().top
               }, 1000);
               return false;
            }
         }
      });
   });

}
