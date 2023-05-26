$(document).ready(function(){


    // Call action for buttons

    $("#happybtn").click(function(){
      $("#happy").show();
      $("#anxious").hide();
      
    });

    $("#anxiousbtn").click(function(){
      $("#anxious").show();
      $("#happy").hide();
      
    });

    



});




function myFunction() {
  var x = document.getElementById("myname").value;
  document.getElementById("display-name").innerHTML = x;

}