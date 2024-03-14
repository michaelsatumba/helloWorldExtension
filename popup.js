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
 1/16/2024 working on creating new systems for us open. also helping with training like css and design stuff with jonathan. that's it for now.
 1/17/24 worked on nbpa updates, worked on tman summit, fdj login, and adjusted due dates for some tickets.
 1/18/24 main focus will be fdj today. ahh it got so busy so quickly. it's a good challenge though. small wins. work.
 1/19/24 super busy, but work. using css and html. width. interesting that the width attribute works but not the css width. focused on fdj edits and some versioning thing.
 1/22/24 looks like it is going to be a busy day. need to ward off new requirements in ticket and create new ones. stick with the process! working on nbpa and tman summit today.
 1/23/24 looks like it is going to be a busy day too hahaha. allianz and nbpa. endeaveor. woo criticals. training jonathan. he's picking it up pretty fast.
 1/26/24 did standup yesterday in front of the company. that was fun! lol. today is chill. beekeeper is nice.
 1/29/24 we got a new coworker! hell yeah. more help for the team! finally lol. We can focus on quality of tickets now. Quality over quantity!
 1/30/24 looks super busy today, many criticals. ahhhhhhhhh! too many. focus one ticket at a time.
 1/31/24 busy with usopf, allianz, lg. working on a lot of criticals, training new people. normal day at office. i have leftovers from lunch.
 2/2/24 forgot to commit yesterday, too many criticals assigned to me. complexity of each ticket is also unbalanced, but worked on allianz itinerary for david. went to service, got lunch. another day in critcal land.
 2/5/24 whf, raining hard yesterday. busy with allianz. lots of translations. copy pasta. lol. not really technical but more menial.
 2/6/24 half day today. allianz stuff. then scoping other tickets for this week.
 2/7/24 from first glance today does not seem it will be that busy. have to work on mercedes for zach. dhl for kendal. and more allianz edits.
 2/8/24 getting ready for the day, writing comments on jira, looks like more allianz, hopefully i can start on dhl, i miss that project lol.
 2/9/24 full steam ahead on allianz. more work. take a breath. slow down. coding. it's fun sometimes. tortoise.
 2/12/24 back to work, late start at work, started at 10am. drove to the office early, regretfully haha. but more allianz today.
 2/13/24 busy with new project now. woo lol. working on waste management circle of excellence. work work work. help javaria with her tickets, allianz asset tool email - needs real asset. then background image on emails.
 2/14/24 stressed out with allianz. very busy. the tickets do not stop. anyway just going to do my best.
 2/16/24 still working on allianz itiniaries and css. logic is all done. i think, but other tickets are coming up. work work work.
 2/18/24 not working because it is sunday.
 2/20/24 finishing up allianz then have to go back to the 2fa project and configure the resend code button, then the tman email.
 2/21/24 one year! woo! wow what a feeling. that's crazy. one year - what! woo! working allianz still.
 2/29/24 back from pto, worked on allianz critical and then now working on waste management.
 3/1/24 super busy with allianz. translations argh. and resend function
 3/3/24 back to allianz grind. tranlsations, custom functions, fun! worked on some waste management, allianz, then some new stuff for kate.
3/5/24 today i have to work on allians, new fanatics masters build, constellation build from mubashar, busy work!
3/6/24 working on constellation ticket 15903 then dhl, then will learn report function for app confirm
3/7/24 still working on allianz then i have some dhl form stuff 10690 then some waste management stuff
3/8/24 working on wm design and form and then dhl form then assets, then allianz resend
3/11/24 working on some image path stuff. then some harder tickets later, waste management circle of excellence and resend later.
3/12/34 working on ticket and asset tool contact form conditional.
3/13/24 working on constellation system, then wm ticket. have to work on presentation.
3/14/24 pi day, haven't looked at queue yet but expect work from constellation and other things.
*/
