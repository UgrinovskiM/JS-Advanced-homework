let month;
let day;
let year;

let x = new Date();
let yearNow = x.getFullYear();
let monthNow = x.getMonth() + 1;
let dayNow = x.getDate();
function Person(firstName, lastName, month,day,year, placeOfBirth) {
    return{
        firstName,
        lastName,
        month,
        day,
        year,
        placeOfBirth,
        details(){
            return `This is ${firstName} ${lastName} from ${placeOfBirth}.`
        },
        calculateAge(month,day,year){
            return `This person is ${yearNow - this.year} years old, ${monthNow + this.month} months old, ${dayNow - this.day} `
        }
    }
}
let Marjan = new Person("Marjan","Ugrinovski",10,28,1991,'Skopje');
console.log(Marjan);
// console.log(Marjan.dateOfBirth());
console.log(Marjan.calculateAge());
// let x = new Date();
// let yearNow = x.getFullYear();

// console.log(Marjan.dateOfBirth)
// console.log(yearNow);
Date.daysBetween = function( date1, date2 ) {
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;
  
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
  
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
      
    // Convert back to days and return
    return Math.round(difference_ms/one_day); 
}

//Set the two dates
var y2k  = new Date(2000, 0, 1); 
var Jan1st2010 = new Date(y2k.getFullYear() + 10, y2k.getMonth(), y2k.getDate());
var today= new Date();
//displays 726
console.log( 'Days since ' 
           + Jan1st2010.toLocaleDateString() + ': ' 
           + Date.daysBetween(Jan1st2010, today));