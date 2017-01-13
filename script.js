/**
 * Created by Totep on 1/6/17.
 */
$( document ).ready(function() {

    var employees = null;

$.ajax({
    url: 'Employees.json',
    method: 'get',
    dataType: 'json',
    error: function(data){
    },
    success: function(data){

        employees = data;
        addEmp();
    }
});
    function addEmp() {
        for (i = 0; i < 8; i++) {
            var firstName = employees[i].name.first;
            var lastName = employees[i].name.last;
            var position = employees[i].position;
            var image = employees[i].image;

            $( "#emppic" ).append("<div class='square'></div>");
            $( "#emppic" ).append("<img src='/employee_images/" +  image + "'" + "/>");
            $( ".square" ).append( "<h2>" + firstName + " " + lastName +"</h2>" );
            $( ".square" ).append( "<p>" + position +"</p>" );




    }
     };
    if (i = 9) {
    $("#more").click(function addemp() {
        for (i = 9; i < 13; i++) {
            var firstName = employees[i].name.first;
            var lastName = employees[i].name.last;
            var position = employees[i].position;
            var image = employees[i].image;

            $("#emppic").append("<div class='square'></div>");
            $("#emppic").append("<img src='/employee_images/" + image + "'" + "/>");
            $(".square").append("<h2>" + firstName + " " + lastName + "</h2>");
            $(".square").append("<p>" + position + "</p>");


        }
         })
    } else if (i = 14) {
        $("#more").click(function addemp() {
            for (i = 14; i = 14; i++) {
                var firstName = employees[i].name.first;
                var lastName = employees[i].name.last;
                var position = employees[i].position;
                var image = employees[i].image;

                $("#emppic").append("<p>" + firstName + " " + lastName + "</p>");
                $("#emppic").append("<p>" + position + "</p>");
                $("#emppic").append("<img src='/employee_images/" + image + "'" + "/>");
                $("#more").remove();
            }
        })
        }

});

