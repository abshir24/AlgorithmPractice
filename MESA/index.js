$(document).ready(function(){
    $("#student-info-form").submit(function(){
        //this is going to take everything that we input into the form
        // and store it in an array
        var $inputs = $('#student-info-form :input');

        var infodiv = $("#student-info").empty()
        
        $inputs.each(function() {
            $(this).val()
        });

        return false
    })
})