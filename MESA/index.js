$(document).ready(function(){
    $("#basic-info-form").submit(function(){
        //this is going to take everything that we input into the form
        // and store it into an array
        var $inputs = $('#basic-info-form :input');

        //this will store the student-info div object into a variable
        var infodiv = $("#basic-info")
        
        //this will remove everything from the page so that we can have a clean space to display our data
        infodiv.empty();


        //This for each loop will iterate through the array of inputs that
        //we created earlier and display its values on the webpage
        $inputs.each(function() {
            $("#basic-info").append("<h3> "+ $(this).val()+ "</h3>");
        });

        return false
    })

    $("#academic-info-form").submit(function(){
        //this is going to take everything that we input into the form
        // and store it into an array
        var $inputs = $('#academic-info-form :input');

        //this will store the student-info div object into a variable
        var infodiv = $("#academic-info")
        
        //this will remove everything from the page so that we can have a clean space to display our data
        infodiv.empty();


        //This for each loop will iterate through the array of inputs that
        //we created earlier and display its values on the webpage
        $inputs.each(function() {
            $("#academic-info").append("<h3> "+ $(this).val()+ "</h3>");
        });

        return false
    })
})