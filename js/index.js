console.log("what am I doing....help!");
// $(document).ready(function() {

//     $('').hover(
       
//        function () {
//           $(this).css({"text-decoration":"underline"});
//        });
       
//  });
$(document).ready(function(){
    $("li").on({
        mouseenter: function(){
        $(this).css({ "font-weight": "bold","text-decoration": "underline"});
        }
    });    
});