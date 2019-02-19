// https://swapi.co/api/people/
// https://swapi.co/api/planets/

$('#goHome').on('click', () => {
    $('table').empty()
})

let people;
let planets;
let peopleResult;
$('#getPeople').on('click', () => {
    $('#spinner').removeAttr('class');
    $('.logo').hide()
    $('tbody').empty()
    $.ajax({
        method: "GET",
        url: 'https://swapi.co/api/people',
        success: function (data) {
            people = data;
            peopleSW(people)
            // console.log(people);
        }
    })
});


function peopleSW() {
    $('#spinner').hide()
    peopleResult = people.results;
    $('table').removeAttr('class')
    $('#people').removeAttr('class')

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
        // console.log(peopleName)
    }

}
$('#getPlanets').on('click', () => {
    $('#spinner').removeAttr('class');
    $('.logo').hide()
    $('tbody').empty()
    $.ajax({
        method: "GET",
        url: 'https://swapi.co/api/planets',
        success: function (data1) {
            planets = data1;
            planetsSW(planets);
            // console.log(planets)
        }
    })
})
function planetsSW() {
    $('#spinner').hide()
    planetsResult = planets.results;
    $('table').removeAttr('class')
    $('#planets').removeAttr('class')
    
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
}