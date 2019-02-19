const peopleUrl = 'https://swapi.co/api/people/';
const planetsUrl = 'https://swapi.co/api/planets/';
//let eventId;
let eventUrl;
let eventId;
let person;
let people;
let peopleArr = [];
function fetchData(peopleUrl) {
    if(peopleUrl === null){
        createTable(peopleArr)
        return;
    }
    fetch(peopleUrl)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    // if (data.next !== null || data.results !== null) {
                        for (let i = 0; i < data.results.length; i++) {
                            people = data.results[i];
                            peopleArr.push(people);
                        }
                        // fetchData(data.next)
                    createTable(peopleArr)

                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        })
}
$('#getPeople').on('click', () => {
    fetchData(peopleUrl)
});
function createTable(arr){
    $(table).show();
    $('#people').show();
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        let peopleName = arr[i].name;
        let peopleGender = arr[i].gender;
        let peopleBirth = arr[i].birth_year;
        let peopleHeight = arr[i].height;
        let peopleMass = arr[i].mass;
        // console.log(counter++);
        $('tbody').append(`<tr id="${counter++}">
            <td>${peopleName}</td>
            <td>${peopleGender}</td>
            <td>${peopleBirth}</td>
            <td>${peopleHeight}</td>
            <td>${peopleMass}</td>
            </tr>`)
            
        // console.log(peopleName)
    }
    $('tbody').on('click',(event)=>{
        console.log(event.target.parentElement.id);
        eventId = event.target.parentElement.id;
        eventFun(eventId)
        })
}

function eventFun(eventId){
    fetch(`https://swapi.co/api/people/${eventId}`)
        .then(function (response){
            return response.json();
        }).then(function (response){
            console.log(response)
            person = response;
            // console.log(person.name);
            return person;
        })
        .catch(function (error){
            console.log(error)
        })
}
var dataFilm;
async function callFun(eventId){
    try {
        await eventFun(eventId)
        $("#asd").removeClass('display-none');
        $('#asd').html(`
        <h3>More information about selected character</h3>
        Name: ${person.name}<br>
        Hair color: ${person.hair_color}<br>
        Films:
        `);
        for (const film of person.films) {
            await fetch(film)
            .then(function (dataFilm){
                return dataFilm.json();
            }).then(function (dataFilm){
                console.log(dataFilm)
                $('#asd').append(`<p>${dataFilm.title}</p>`)
                return dataFilm;
                // console.log(dataFilm.title);
                // return dataFilm;
            })
        }
        $('#asd p').on('click',(e)=>{
            $(e.target).append(`
            <p>${dataFilm.director}</p><br>
            <p>${dataFilm.created}</p><br>
            <p>${dataFilm.release_date}</p><br>
            <p>${dataFilm.producer}</p><br>
            <p>${dataFilm.episode_id}</p><br>`)
        })
        // $('#asd').appendTo(`<div id='divOne'></div>`)
    } catch (error) {
        console.log(error)
    }
}

