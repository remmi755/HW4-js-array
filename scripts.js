console.log('-----------------------#5')

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    sayYes = () => console.log("Вы согласились."), // нужно обновить данное место
    sayNo = () => console.log("Вы отменили выполнение.") // нужно обновить данное место
);

console.log('-----------------------#6')


let str = 'my-short-string';
let newArray = str.split("-");
console.log(newArray);

console.log('-----------------------#7')

arr = ['JavaScript', 2015];
console.log(`'${arr.join(' ')}'`);

console.log('-----------------------#8')

let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];

let whoYounger = users.filter(function (e)
{return e.age < 20;});
console.log(whoYounger);

console.log('-----------------------#9')


let names = users.map(item => item.name);
console.log( names ); // [Vic, Petya, Jon]


console.log('-----------------------#10')

function filterRangeInPlace(arr, a, b) {

    for(let i = arr.length - 1; i >= 0; i--) {
        if (!(a <= arr[i] && arr[i] <= b)) {
            arr.splice(i, 1);
        }
    }

}

let arrN = [5, 3, 8, 1];
filterRangeInPlace(arrN, 1, 4);
console.log( arrN ); // [3, 1]

console.log('-----------------------#11')

function stringToArr (str, separator) {
     return  str.split(separator);
}

let strNew = "You are welcome"
console.log(stringToArr( strNew," "))

console.log('-----------------------#12')

function  slArray(arr, startIndex, endIndex) {
return arr.slice(startIndex, endIndex)
}

let arr3 = [5, 3, 8, 1];
let range = slArray(arr3, 1, 4);
console.log( range ); // 3, 8, 1
console.log( arr3 ); // 5,3,8,1 (без изменений)

console.log('-----------------------#13')


    function sumAll(...items) {
        let sum = 0;
        for (let item of items)
            sum += item;
        return sum;
    }

    console.log( sumAll(1) );
    console.log (sumAll(1, 2, 5, 10) );
    console.log( sumAll(1, 2, 3, 5, 10, 21, 42) );

