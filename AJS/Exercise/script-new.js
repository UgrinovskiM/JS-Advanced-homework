const peopleUrl = 'https://swapi.co/api/people/';
const planetsUrl = 'https://swapi.co/api/planets/';
let people = [];
let planets;
let peopleNameArr = [];
let x;
// here goes the logic - Happy coding ;)

// Spinner added to index, but hidden
$('#spinner').html(`<img class='display-none' src='./assets/spinner3.gif'>`)

// Home button click
$('#goHome').on('click', () => {
    $(table).hide();
    $('.logo').show();
});

// People button click
// $('#getPeople').on('click', () => {
    // $('.logo').hide();
    // $('#spinner img').show();
    // $('#planets').hide();
    // $('#body').empty();
//     if (people === undefined) {
//         $.ajax({
//             method: 'GET',
//             url: peopleUrl,
//             success: (data) => {
//                 console.log(data);
//                 people = data;
//                 peopleSW(people);
//             }
//         })
//     } else {
//         // $(table).show();
//         // $('#people').show();
//         peopleSW(people)
//     }
// });
function getPeopleData(url){
    $('.logo').hide();
    $('#spinner img').show();
    $('#planets').hide();
    $('#body').empty();
    // if (people === undefined) {
    fetch(url)
    .then(response => response.json())
    .then(response => {
        people.push(response.results)   
        if(response.next){
            // console.log(people);
            getPeopleData(response.next)
        }else{
            $(table).show();
            $('#people').show();
            peopleSW(people)
        }
    })
    .catch(e => {
        // debugger;
        console.log(e);
    })
}

$('#getPeople').on('click', () => {
    getPeopleData(peopleUrl)
})
let peopleResult = [];
// People show function
function peopleSW(people) {
    $('#spinner img').hide();
    for(i=0;i<people.length;i++){
        for(j=0;j<people[i].length;j++){
            peopleResult.push(people[i][j])
        }
    }
    // console.log(peopleResult)

    $(table).show();
    $('#people').show();
    for (let i = 0; i < peopleResult.length; i++) {
        let peopleName = peopleResult[i].name;
        let peopleGender = peopleResult[i].gender;
        let peopleBirth = peopleResult[i].birth_year;
        let peopleHeight = peopleResult[i].height;
        let peopleMass = peopleResult[i].mass;
        let personURL = peopleResult[i].url;
        $('tbody').append(`<tr>
            <td><a target="_blank" href='${personURL}'>${peopleName}</a></td>
            <td>${peopleGender}</td>
            <td>${peopleBirth}</td>
            <td>${peopleHeight}</td>
            <td>${peopleMass}</td>
            </tr>`
        )
        // peopleNameArr.push(peopleName);
        // console.log(peopleName)
        $('#search').on('click', () => {
            let inputText = $('.form-control').val();
            peopleResult.filter((peopleName) =>{
                if (peopleName === inputText){
                    $('tbody').append(`<tr>
                    <td>${peopleName}</td>
                    </tr>`
                    )
            }});
        });
    }
};

// Planets button click
$('#getPlanets').on('click', () => {
    $('.logo').hide();
    $('#spinner img').show();
    $('#people').hide();
    $('#body').empty();
    if (planets === undefined) {
        $.ajax({
            method: 'GET',
            url: planetsUrl,
            success: (planetData) => {
                console.log(planetData);
                planets = planetData;
                planetsSW(planets);
            }
        })
    } else {
        // $(table).show();
        // $('#planets').show();
        planetsSW(planets);
    }
});

// Planets show function
function planetsSW() {
    $('#spinner img').hide();
    planetsResult = planets.results;
    $(table).show();
    $('#planets').show();
    for (i = 0; i < planetsResult.length; i++) {
        let planetName = planetsResult[i].name;
        let planetDiameter = planetsResult[i].diameter;
        let planetClimate = planetsResult[i].climate;
        let planetTerrain = planetsResult[i].terrain;
        let planetRot = planetsResult[i].rotation_period;
        let planetPopulation = planetsResult[i].population;
        $('tbody').append(`<tr>
            <td>${planetName}</td>
            <td>${planetDiameter}</td>
            <td>${planetClimate}</td>
            <td>${planetTerrain}</td>
            <td>${planetRot}</td>
            <td>${planetPopulation}</td>
            </tr>`
        )
    }
}

// Search button
