var a = 'Hello world';

function b() {
  console.log('Called b!');
}

// Will display in the console called b! Hello world
// This will work because it comes after the declarations, if it is above then it will come out as undefined,
b();
console.log(a)
