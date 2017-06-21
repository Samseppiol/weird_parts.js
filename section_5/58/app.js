Array.prototype.myCustomFeature = 'proto test!'

var arr = ['Jack', 'John', 'Jaime'];

for (var prop in arr) {
    console.log(prop + ': '+ arr[prop]);
}

