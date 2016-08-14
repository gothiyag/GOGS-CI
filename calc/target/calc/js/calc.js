$(function() {
    $('#add').click(function() {
        var number1 = $("#Number1").val();
        var number2 = $("#Number2").val();

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/calc/CI/calcservice/+/'+number1+'/'+number2,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                console.log("The Response is:"+JSON.stringify(response));
                console.log("The Response1 is:"+response.result);
                $('#Result').val(response.result);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

$(function() {
    $('#sub').click(function() {
        var number1 = $("#Number1").val();
        var number2 = $("#Number2").val();

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/calc/CI/calcservice/-/'+number1+'/'+number2,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                console.log("The Response is:"+JSON.stringify(response));
                console.log("The Response1 is:"+response.result);
                $('#Result').val(response.result);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});


$(function() {
    $('#mul').click(function() {
        var number1 = $("#Number1").val();
        var number2 = $("#Number2").val();

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/calc/CI/calcservice/x/'+number1+'/'+number2,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                console.log("The Response is:"+JSON.stringify(response));
                console.log("The Response1 is:"+response.result);
                $('#Result').val(response.result);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

$(function() {
    $('#div').click(function() {
        var number1 = $("#Number1").val();
        var number2 = $("#Number2").val();

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/calc/CI/calcservice/div/'+number1+'/'+number2,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                console.log("The Response is:"+JSON.stringify(response));
                console.log("The Response1 is:"+response.result);
                $('#Result').val(response.result);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});