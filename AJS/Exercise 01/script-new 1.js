const peopleUrl = 'https://swapi.co/api/people/';
const planetsUrl = 'https://swapi.co/api/planets/';
//let eventId;
let eventUrl;

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
        let eventId = event.target.parentElement.id;
        callFun(eventId);
    })
}
let person;
function eventFun(eventId){
    return fetch(`https://swapi.co/api/people/${eventId}`)
        .then(function (response){
            return response.json();
        }).then(function (response){
            console.log(response)
            person = response;
            return person;
        })
        .catch(function (error){
            console.log(error)
        })
}
async function callFun(eventId){
    try {
         await fetch(eventId);
        $("#asd").removeClass('display-none')
        $('#asd').html(`
        <h3>More information about selected character</h3>
        Name: ${person.name}<br>
        Hair color: ${person.hair_color}
        `);
    } catch (error) {
        console.log(error)
    }
}