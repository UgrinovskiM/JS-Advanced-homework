let people;
let planets;
let peopleResult;
let heightArray = [];
$('#goHome').on('click', () => {
    $('table').hide();
    $('.logo').show()
})

$('#getPeople').on('click', () => {
    $('#spinner').removeClass('display-none');
    $('.logo').hide()
    $('tbody').empty()
    $("#planets").hide();
    $('#people').show();
    if (people === undefined) {
        $.ajax({
            method: "GET",
            url: 'https://swapi.co/api/people',
            success: function (data) {
                people = data;
                peopleSW(people)
                // console.log(people);
            },
        })
    } else {
        peopleSW(people)
    }
});

function peopleSW() {
    $('#spinner').hide()
    $('#spinner').addClass('display-none');
    $('table').show();
    peopleResult = people.results;
    $('table').removeClass('display-none')
    $('#people').removeClass('display-none')

    for (let i = 0; i < peopleResult.length; i++) {
        let peopleName = peopleResult[i].name;
        let peopleGender = peopleResult[i].gender;
        let peopleBirth = peopleResult[i].birth_year;
        let peopleHeight = peopleResult[i].height;
        let peopleMass = peopleResult[i].mass;
        $('tbody').append(`<tr>
            <td>${peopleName}</td>
            <td>${peopleGender}</td>
            <td>${peopleBirth}</td>
            <td>${peopleHeight}</td>
            <td>${peopleMass}</td>
            </tr>`)
        heightArray.push(peopleHeight);
    }
    $('#search').on('click', function () {
        let value = $('.form-control').val().toLowerCase();
        $("#body tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })
}
$('#getPlanets').on('click', () => {
    $('#spinner').removeClass('display-none');
    $('.logo').hide();
    $('tbody').empty();
    $("#people").hide();
    $('#planets').show();
    if (planets === undefined) {
    $.ajax({
        method: "GET",
        url: 'https://swapi.co/api/planets',
        success: function (data1) {
            planets = data1;
            planetsSW(planets);
            // console.log(planets)
        }
    })
} else {
    planetsSW(planets)
}
})
function planetsSW() {
    $('#spinner').hide()
    
    $('#spinner').addClass('display-none');
    $('table').show();
    planetsResult = planets.results;
    $('table').removeClass('display-none')
    $('#planets').removeClass('display-none')

    for (i = 0; i < planetsResult.length; i++) {
        let planetName = planetsResult[i].name;
        let planetDiameter = planetsResult[i].diameter;
        let planetClimate = planetsResult[i].climate;
        let planetTerrain = planetsResult[i].terrain;
        let planetRot = planetsResult[i].rotation_period;
        let planetPopulation = planetsResult[i].population;
        $('tbody').append(`<tr>
            <th>${planetName}</th>
            <th>${planetDiameter}</th>
            <th>${planetClimate}</th>
            <th>${planetTerrain}</th>
            <th>${planetRot}</th>
            <th>${planetPopulation}</th>
            </tr>`)
    }
    $('#search').on('click', function () {
        let value = $('.form-control').val().toLowerCase();
        $("#body tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    })
}
// Sort
// $('#height').on('click',()=>{


//     // return heightArray.sort(function(a,b){return a-b});
// })
// $('#height').on('click',()=>{
//     for (let j = 1; j < peopleHeight.length; j++) {
//         if (j.toLowerCase() > 1 + j.toLowerCase())

//     }

// })