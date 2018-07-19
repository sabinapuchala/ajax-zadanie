$(document).ready(function () {

    $("button").click(function () {

        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {


            $('body').append('<div></div>');
            $('div').attr('id', 'dane-programisty');

            $.each(data, function (key, val) {
                console.log("id= " + key + "  val = " + val);
                let text = "id = " + key + "  val = " + val + ", ";
                $('div').prepend(text);



            });
        });

    });

});