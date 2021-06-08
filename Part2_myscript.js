// jQuery makes it easy to interact with the DOM!

// List of all possible events!
// https://api.jquery.com/category/events/

//////////////
// CLICKS ///
////////////

// On click
$('h1').click(function(){
  console.log("There was a click!");
})
// Click on multiple elements
$('li').click(function(){
  console.log('any li was clicked!');
})
// Using this with jQuery
$('h1').click(function(){
  $(this).text('I was changed!');
})

/////////////////
// KEYPRESS ////
///////////////

// KEY PRESS
$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue')
})
// We can use this event object, that has ton of information!
$('input').eq(0).keypress(function(event){
  console.log(event);
})
// Each keyboard key has a keycode, for example enter is 13
$('input').eq(0).keypress(function(event) {
  if(event.which === 13){
    $('h3').toggleClass("turnBlue")
  }
})

////////////
// ON() ///
//////////

// on() basically works like addEventListener()
$('h1').on('dblclick',function() {
  $('h1').addClass('turnBlue');
})

$('h1').on('mouseenter',function() {
  $('h1').toggleClass('turnBlue');
})

/////////////////////////////
// EFFECTS and ANIMATIONS //
///////////////////////////

// http://api.jquery.com/category/effects/

$('input').eq(1).val('FADE OUT EVERYTHING');

$('input').eq(1).on('click',function() {
  $(".container").fadeOut(3000)
})

$('input').eq(1).on('click',function() {
  $(".container").slideUp(1000)
})
