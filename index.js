$(document).ready(function(){


    // Call action for buttons

    $("#happybtn").click(function(){
      $("#happy").show();
      $("#anxious").hide();
      $("#depression").hide();
      $("#empty").hide();
      
    });

    $("#anxiousbtn").click(function(){
      $("#anxious").show();
      $("#happy").hide();
      $("#depression").hide();
      $("#empty").hide();
      
    });

    $("#depressionbtn").click(function(){
        $("#depression").show();
        $("#anxious").hide();
        $("#happy").hide();
        $("#empty").hide();
        
      });
  
    $("#emptybtn").click(function(){
        $("#empty").show();
        $("#happy").hide();
        $("#depression").hide();
      $("#anxious").hide();
        
      });

    



});




function myFunction() {
  var x = document.getElementById("myname").value;
  document.getElementById("display-name").innerHTML = x;

}