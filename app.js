

  $('.button-div').click(function () {
    $('.button-div').toggleClass('dark-toogle');
    $('button').toggleClass('transform');
    $('h1').toggleClass('dark-text');
    $('h4').toggleClass('dark-text')
    $('button').toggleClass('dark-body');
    $('p').toggleClass('dark-text');
    $('body').toggleClass('dark-body');
    $('.dim-text').toggleClass('dark-dim-text');
    $('.card').toggleClass('dark-card');
    $('hr').toggleClass('dark-hr');
    $('.instagram').toggleClass('dark-instagram');
  });

// Here is list where I select elements and classes with JQuery selectors and than
// we add toggle function which means that if the element has not the dark class,
// it will be added and if it already has the class it will be removed

// Dark classes need to be predefined in css or must be written here in JQuery
