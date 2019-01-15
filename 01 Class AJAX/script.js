let result;
$("button").click(function(){
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        success: function(result){
        console.log(result);
        table(result)
    }});
});
function table(result){
    for (i=0;i<result.length;i++){
        // console.log(result[i].login)
        let name = result[i].name;
        let alpha2Code = result[i].alpha2Code;
        let region = result[i].region;
        let langAll = result[i].languages;
        
        $('tbody').append(`
        <tr>
            <td>${name}</td>
            <td>${alpha2Code}</td>
            <td>${region}</td>
        </tr>`)
        for (j=0;j<langAll.length;j++){
            console.log(langAll[j].name);
        }
    }
}
// table(result)
//   <!-- login/user
// id
// login so url
// avatar url / Photo width 50 / height 50
// url -->
