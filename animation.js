
var btnContainer = document.getElementById("BtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){

    var current = document.getElementsByClassName("active3");
    current[0].className = current[0].className.replace(" active3", "");
    this.className += " active3";

    
  });
}

$().ready(function(){


$("#profile").click(function(){
  $("#1").html("<h2 class=\"mt-4 mb-3\">Profile</h2><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p  class=\"everything\" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p>");

  var eT=0;
$('.everything').hide().each(function() {
    $(this).delay(eT).fadeIn('slow');
    eT += 100;
});
});

$("#skills").click(function(){
  $("#1").html("<h2 class=\"mt-4 mb-3\">Technical Skills</h2><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p  class=\"everything\" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p>");
  var eT=0;
$('.everything').hide().each(function() {
    $(this).delay(eT).fadeIn('slow');
    eT += 100;
});
});

$("#work").click(function(){
  $("#1").html("<h2 class=\"mt-4 mb-3\">Work Experience</h2><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p  class=\"everything\" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p>");
  
  var eT=0;
  $('.everything').hide().each(function() {
    $(this).delay(eT).fadeIn('slow');
    eT += 100;
});
});

$("#cert").click(function(){
  $("#1").html("<h2 class=\"mt-4 mb-3\">Certificates</h2><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p  class=\"everything\" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p>");
  var eT=0;
  $('.everything').hide().each(function() {
    $(this).delay(eT).fadeIn('slow');
    eT += 100;
});

});

$("#univ").click(function(){
  $("#1").html("<h2 class=\"mt-4 mb-3\">Universities</h2><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p  class=\"everything\" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p><p class=\"everything\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque conseqe ipsam quae! Explicabo fugit cupiditate nihil provident error iste totam culpa excepturi quam suscipit accusamus ma minus, ipsum rerum natus?</p>");
  var eT=0;
  $('.everything').hide().each(function() {
    $(this).delay(eT).fadeIn('slow');
    eT += 100;
});

});

var el=0;
$('.everything').hide().each(function() {
  $(this).delay(el).fadeIn('slow');
  el += 100;
});

});



