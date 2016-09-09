// Only executed our code once the DOM is ready.
window.onload = function() {
   fillCanvas(document.getElementById('background'), '#555555', 13, 13, 4);

   var typewriter = require('typewriter');

   var twSpan = document.getElementById('typewriter');

   var tw = typewriter(twSpan).withAccuracy(95)
                              .withMinimumSpeed(5)
                              .withMaximumSpeed(17)
                              .build();
   tw.put('$ ')
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
      .put('&emsp;&emsp; I am a developer, UC San Diego undergraduate, \
         and machine learner, <br/>\
         &emsp;&emsp; as well as a cofounder and developer of Skqrl, \
         an experience sharing platform.<br/>\
         &emsp;&emsp; Check out my portfolio below.<br/><br/>')
      .put('$ ')

}
