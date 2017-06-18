// Much the same as ruby
var arr = [1, 2, 5, 8, 19];
// Javascript like ruby uses a zero index
arr[1] // would return 2


var arr2 = [
    1,
    true,
    {
        name: 'jack',
        address: ' 123 fake street'
    },
    function(name) {
        var greeting = 'Hey '
        console.log(greeting + name)
    },
    "hello world"
]

// Javascript will show all of the values within the array
console.log(arr2)
arr2[3](arr2[2].name)