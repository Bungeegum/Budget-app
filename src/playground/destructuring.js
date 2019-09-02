/*const person={
    name:'David',
    age:23,
    location:{
        city:'Big A',
        temp:100
    }
};

const {name,age} = person;

console.log(`${name} is ${age}.`);


const book = {
    title:'ode to a toad',
    author:'David Valles',
    publisher: {
        name:'penguinz0'
    }
};

const {name:publisherName='anonymy'}=book.publisher;

console.log(publisherName)
*/


//array destructering

const address= ['1299 S Juniper Street','Philedelphia','pen','91702'];

const [street,city,state,zip]= address;

console.log(`you are in ${city}`);

