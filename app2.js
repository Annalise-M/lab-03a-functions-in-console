console.log('Too Many Puppies');

const puppies = ['Stanley', 'Marty', 'Cammie', 'Ozzy', 'Otay'];

const Stanley = { name: 'Stanly', age: 13, weight: 15, color: 'black & white', status: 'alive' };
const Marty = { name: 'Marty', age: 14, weight: 16, color: 'white', status: 'alive' };
const Cammie = { name: 'Cammie', age: 16, weight: 40, color: 'black', status: 'deceased' };
const Ozzy = { name: 'Ozzy', age: 7, weight: 13, color: 'tan', status: 'alive' };
const Otay = { name: 'Otay', age: 30, weight: 40, color: 'brown', status: 'deceased' };

let i = status;


function logOutThings() {
    console.log('So many loved puppies', puppies);
    if(i === 'deceased') {
        console.log(i, 'staying alive');
    }
    else {
        console.log(i, 'is watching over us');
    }
}


// if the dogs age is  > 15, the "named dog" is watching over us. 