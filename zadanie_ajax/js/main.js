/*$("button").click(function(){

  $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data){
    console.log(data);
  });

});*/
 
$("button").click(function(){

  $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
    $.each(data, function(key, val) {
      console.log("id= " + key + "  val = " + val);
    });
  });

});