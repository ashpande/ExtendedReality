console.log("hey there")
// function pageRedirect() {

//   window.location.replace("http://localhost:3000/users/results");

// }  
$(document).ready(function(){
    $(document).on("click","button",function(e){
      e.preventDefault();
      var a = document.getElementById("myText").innerHTML
      console.log(a);
      $.ajax({
          type: "POST",
          url: '/users/postsketch' ,
          contentType: 'application/json',
          processData: false,
          data: JSON.stringify({data: a}),
          success: function(data) {
            pageRedirect();
            console.log("Successfully saved the matched beans to the user.");
    
      

        }
    }).done(function ( ) {
        console.log("OK");
    }).fail(function ( jqXHR, textStatus, errorThrown ) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      });
    });
  
  });