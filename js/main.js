jQuery(document).ready(function() {
jQuery(".button-down").click(function () {
         jQuery("ul.menu").slideToggle(300);
        
     });

     jQuery("ul.menu span").click(function () {
         jQuery("ul.menu").slideToggle(300);
     });


     jQuery(".category-in").click(function () {
         jQuery(".main-left-side-list").toggleClass('active');
          
     });

});