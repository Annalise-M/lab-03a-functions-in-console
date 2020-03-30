console.log('start the file');

const myName = 'Annalise Murphy';

console.log('My name is', myName);

let x = 6;

if(x % 2 === 0) {
    console.log(x, 'is even');
}
else {
    console.log(x, 'is odd');
}


// for(/* initializer */; /*test*/; /*post-loop action*/) {

// }

// for(let i = 0; i < x; i++) {
    //  console.log(i);
    // }

const colors = ['yellow', 'red', 'blue', 'purple', 'salmon'];
    
console.log('color by index 1;', colors[1]);

for(let i = 0; i < x; i++) {
    isEvenOrOdd(i);
}
for(let i = 0; i < colors.length; i++) {
    const color = colors[i];
    console.log('color at index', i, color);
}

function isEvenOrOdd(n) {
    if(n % 2 === 0) {
        console.log(n, 'is even');
    }
    else {
        console.log(n, 'is odd');
    }
}

isEvenOrOdd(4);