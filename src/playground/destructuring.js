// object destructuring
const person = {
  name: "ben",
  age: 26,
  location: {
    city: "nairobi",
    country: "Kenya",
    temp: 92
  }
};
const { age, name = "anonymous" } = person;
// set default if object being destrucured does not contain the variable
const { city, temp: temperature } = person.location;
// temp:temperature  --> rename destructured variable
console.log(`${age} ${name} ${temperature}`);

// array destructuring

const address = ["19665", "allsops", "kenya"];

const [addressNumber, cityName, state] = address;
console.log(`you are in ${addressNumber} ${cityName} ${state}`);
// array destructuring asigns variable name and values to items inside an array according to their indexes
// if you want to destructure specific values, you use commasto separate the unwanted values and the ones you want
// eg const [, , state] = address , only destructures the state from the given array
// to set default, const [, , state="kenya"] = address this sets the value to the default even when the value is not provided or maybe the array is empty.
