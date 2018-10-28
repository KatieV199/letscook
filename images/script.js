
 jQuery(document).ready(function () {


     jQuery(".category-in").click(function () {
         jQuery(".main-left-side-list").toggleClass('active');
          
     });


     jQuery(".main_button").click(function () {
         jQuery(".main_categories").fadeIn(300);
        
     });

     jQuery(".main_categories span").click(function () {
         jQuery(".main_categories").fadeOut(300);
     });



      jQuery(".add_recept").click(function () {
         jQuery(".add_recept-block").fadeIn(300);
        
     });

     jQuery(".add_recept-block span").click(function () {
         jQuery(".add_recept-block").fadeOut(300);
     });



    
    jQuery(".tab_content").hide(); 
    jQuery("ul.tabs li:first").addClass("active").show(); 
    jQuery(".tab_content:first").show(); 

    
    jQuery("ul.tabs li").click(function() {
        jQuery("ul.tabs li").removeClass("active"); 
        jQuery(this).addClass("active"); 
        jQuery(".tab_content").hide(); 
        var activeTab = jQuery(this).find("a").attr("href");
        jQuery(activeTab).fadeIn(); 
        return false;
    });


    $(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
       
       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ol').sortable();  
      
    }
);


    var defaults = {
  // CSS selectors and attributes that would be used by the JavaScript functions
  todoTask: "todo-task",
  todoHeader: "task-header",
  todoDate: "task-date",
  todoDescription: "task-description",
  taskId: "task-",
  formId: "todo-form",
  dataAttribute: "data",
  deleteDiv: "delete-div"
}, codes = {
  "1" : "#pending", // For pending tasks
  "2" : "#inProgress",
  "3" : "#completed"
};

// Add Task
var generateElement = function(params) {
  var parent = $(codes[params.code]),
      wrapper;
  if (!parent) {
    return;
  }
  wrapper = $("<div />", {
    "class" : defaults.todoTask,
    "id" : defaults.taskId + params.id,
    "data" : params.id
  }).appendTo(parent);
  $("<div />", {
    "class" : defaults.todoHeader,
    "text": params.title
  }).appendTo(wrapper);
  $("<div />", {
    "class" : defaults.todoDate,
    "text": params.date
  }).appendTo(wrapper);
  $("<div />", {
    "class" : defaults.todoDescription,
    "text": params.description
  }).appendTo(wrapper);
};

generateElement({
  id: "123",
  code: "1",
  title: "My Uber Important Task",
  date: "5/2/2014",
  description: "I have to do a lot of steps to implement this task!"
});

var removeElement = function(params) {
  $("#" + defaults.taskId + params.id).remove();
};


     
 });

 