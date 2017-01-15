/**
 * Created by Totep on 1/6/17.
 */
$( document ).ready(function() {

    var employees = null;
    var empCount = 0;

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
            empCount++;

            $('#emppic').append(
                "<div class='square' style=\"background-image: url('/employee_images/" + image + "')\">" +
                    "<div class='hoverbox'>" +
                        "<h2>" + firstName + " " + lastName + "</h2>" +
                        "<p>" + position + "</p>" +
                    "</div>" +
                "</div>");
        }
    };

    function addMoreEmployees() {
        var moreEmp = empCount;
        for (i = moreEmp; i < moreEmp + 4; i++) {
            if (employees[i] === undefined) {
                $("#more").remove();
                return;
            };
            console.log(employees[i]);
            var firstName = employees[i].name.first;
            var lastName = employees[i].name.last;
            var position = employees[i].position;
            var image = employees[i].image;
            empCount++;

            $('#emppic').append(
                "<div class='square' style=\"background-image: url('/employee_images/" + image + "')\">" +
                "<div class='hoverbox'>" +
                "<h2>" + firstName + " " + lastName + "</h2>" +
                "<p>" + position + "</p>" +
                "</div>" +
                "</div>");
        }
    };


    $("#more").click(function addemp() {
        addMoreEmployees();
    });
});
