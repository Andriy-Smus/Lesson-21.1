
$(document).ready(function(){
  $('.bg-iphone-anim').animate({
    height: '357px'
  },6000, 'easeOutSine').fadeIn(0, function(){
        $('h2').text('1')
  }).animate({
        height: '0px'
  },6000, 'easeOutSine').fadeIn(0, function(){
        $('h2').text('0')
  })
})




