document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('readText').addEventListener('click', function() {
    chrome.tabs.executeScript({
      code: 'document.getSelection().toString()'
    }, function(selection) {
      var text = selection[0];
      chrome.tts.speak(text);
    });
  });
});

/*
 12/6/23
 12/7/23 deploying a tag - copy and paste images - control creating email to report - "ssi.frontend" format - security lecture cs50 understanding technology
 12/19/23 interviewed someone who didn't have projects and had an empty github repository
 12/20/23 a lot of css today using chat gpt, not much javascript stuff. html, flexbox, flex-basis. xsl conditional. found useful xml validation tool for debugging. debugging is awesome
 12/21/23 a lot of design tickets and css, chatgpt, no js yet. just flexbox, flex-basis. yeah. 2fa almost done. 
 12/26/23 looks like work is less busy. But there is still work. nbpa, allianz edits. just another day at work lol. work work work work work work work work work work work work work work. work work work work work work work work work work work work work work work.
 12/27/23 chill day. hanging. want to look at backlog tickets and start on the ticket for connor. gotta find how to change it lol.
 12/29/23 chillest day. i love debugging. going to sf. just keep swimming. do less.
 1/2/2024 another year of coding! woo!
 1/3/22024 blocked on this javascript ticket. need more debugging needed.
 1/4/2024 ratios! math is so interesting lol.
 1/5/2024 so many criticals today! super busy at work. badge edits. content changes. css is annoying lol.
 1/7/2024 sunday funday. critical complete. used flexbox and html. fun.
 1/8/2024 monday funday. staging2 is offline. staging2-web  is working though. so can continue work.
 1/9/2024 tuesday funday. looks like it is going to be busy. criticals. probably more javascript today as my main focus will be debugging the cox multi-process form.
 1/10/2024 super busy today with nbpa stuff. jonathan is shadowing me. just using css. html. xsl on index.xsl is confusing.
 1/11/2024 worked on nbpa design, cox, javscript, xsl debugging. more work.
*/
