# Lessons I have learned
I made this page as a my second Frontmentor challenge. This time I have decided to use Bootstrap, which was really beneficial since I could use its grid system. Although it can be sometimes messy to deal with all the classes and predefined Bootsrap design.

I have ran across multiple challenges. 

1) Firstly I wasnt proficient with positioning. Now I know that if we want to position some element inside div, the div position must be set to relative and element position to absolute.

2) Text takes up full line so in order to have other elements on the same line we must change the display value to inline/inline-block. This applays to tags: p,h,div,ol,ul,li,form
 since their default value is display: block

3) Pain in ass was also linear gradient border. I had to find the solution on stackoverflow here is the solution:
   
   
div-border-and-content-background {
  border-top: double 5px transparent;
  /* first gradient is for card background, second for border background */
  
  background-image: linear-gradient(hsl(227, 47%, 96%),hsl(227, 47%, 96%)), linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));

  /* Somehow we cannot set the background similarly as for body, but we must use -clip and -origin */
  /* Padding box means, the background fills box with including its padding (its optional for us, since we
  havent specified any padding we could also use content-box), but doesnt exceed to borders.
  Border-box means background runs behind borders */
  
  background-clip: padding-box, border-box;
  
  /* Here, border-box means that background images are strating from upper left corners, including border */
  
  background-origin: border-box;
  }

 I hope this will help someone in the future. 
 Have a nice day, John
