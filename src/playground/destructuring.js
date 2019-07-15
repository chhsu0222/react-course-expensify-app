//
// Oblect destructuring
//
/*
const person = {
    name: 'CH',
    age: 26,
    location: {
        city: 'Taipei',
        temp: 92
    }
}

// Default value if name prop undefined
const { name = 'Anonymous', age } = person
console.log(`${name} is ${age}.`)

// Renaming syntax
const { city, temp: temperature } = person.location
console.log(`It's ${temperature} in ${city}`)

// Default value & remaning combination
const { name: firstname = 'Anonymous' } = person
console.log(`${firstname} is here!!`)
*/
//
// Array destructuring
//

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

// Pick the 1st & 3rd item 
const [itemName, , mediumPrice] = item

console.log(`A ${itemName} costs ${mediumPrice}`)
