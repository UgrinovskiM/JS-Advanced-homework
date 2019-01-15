let result;
$("button").click(function(){
    $.ajax({
        url: "https://restcountries.eu/rest/v2/region/Europe",
        success: function(result){
        console.log(result);
    }});
});