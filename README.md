# Webpack Frontend Starterkit

[![Dependabot badge](https://flat.badgen.net/dependabot/wbkd/webpack-starter?icon=dependabot)](https://dependabot.com/)

A lightweight foundation for your next webpack based frontend project.

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [autoprefixer](https://github.com/postcss/autoprefixer)
- Style Linting via [stylelint](https://stylelint.io/)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

### Modify

1. npm start

## Notes

typeof(variable)
variable.toString() // convert to string
Number.parseInt('55') // convert to number
Number.parseFloat('55.99') // convert to float

### Rest Parameters

```
function sendCars(...allCarIds){
    allCarIds.forEach(id => console.log(id);
}

sendCars(100,200,555);
```

```
function sendCars(day,...carIds){
  carIds.forEach(id => console.log(id));
}

sendCars('Friday',1,2,3);

```

### Destructuring Arrays

```
let carIds = [1,2,5];
let [car1,car2,car3] = carIds;
console.log(car1,car2,car3);
```

```
let carIds = [1,2,5];
let car1, remainingCars;

[car1, ... remainingCars] = carIds;

console.log(car1);
console.log(remainingCars);
```

```
let carIds = [1,2,5];
let remainingCars;
[,...remainingCars] = carIds;

console.log(remainingCars);
```
```
let carIds = [100,200,300];
let car1,car2,theRest;

[car1,car2,...theRest] = carIds;

console.log(car1,car2,theRest);
```
### Destructring Objects

```

let car = {
  id:5000,
  style:'convertible'
};

// method 1
let {id,style} = car;

// method 2
let id, style;
({id, style} = car);

console.log(id,style);
```

### Spread Syntax
allow function to take an array as arg and spread out its elements 

```
function greet(person1,person2){
  console.log(`Hello ${person1} and ${person2}`);
}

let names = ['John','Mary'];

greet(...names);
```

```
function display(char1,char2,char3,char4){
  console.log(char1,char2,char3,char4);
}


let letters = 'abcd';


display(...letters);
```

```
function startCars(car1,car2,car3){
  console.log(car1,car2,car3);
}

let carIds = [100,300,500];
startCars(...carIds);

```

```
function startCars(car1,car2,car3){
  console.log(car1,car2,car3);
}

let carCodes = 'abc';
startCars(...carCodes);
```

```

function startCars(car1,car2,car3, ...rest){
  console.log(rest);
}

let carIds = [1,2,3,4,5,6];
startCars(...carIds);
```

### Controlling loops

```
let i = 0;
for(; i < 12 ; i++){
  if(i === 8){
    break
  }
}

console.log(i);
```

### Unary Operators

* string to numeric
```
+var1

-var1
```

```
let userSettings = {name:'Joe'};
let defaultSettings = {name:'Default'};

console.log(userSettings && defaultSettings);  // return Default
console.log(userSettings || defaultSettings); // return Joe
```

### Conditional Operator

console.log( 5 > 44 ? 'yes':'no');

## Function scope

* IIFE , Immediately Invoked Function Expression

```
function(){
    console.log('in function');
}
```

```
(
    function(){
        console.log('in function');
    }
)();
```

* closure 
```
let app = (
    function(){
      let carId = 123;
      console.log('in function');
      return {};
    }
)();

console.log(app);
```

```
let app = (
    function(){
      let carId = 123;
      let getId = function(){
        return carId;
      };
      return {
        getId: getId
      };
    })();

console.log( app.getId());
```

```
let greeting = (
    function(){
      let message = 'Hello';
      let getMessage = function(){
        return message;
      };

      return {
        getMessage: getMessage
      };
    }
)();

console.log( greeting.getMessage() );
```
```
function setupCounter(val){
    return function counter(){
        return val++;
    }
}

let counter1 = setupCounter(0);
console.log(counter1());
console.log(counter1());

let counter2 = setupCounter(10);
console.log(counter2());
```
### this 
```
let o = {
    carId:123,
    getId:function(){
        return this.carId;
    }
};

console.log(o.getId());
```

### call 
function properties
* accept argument list 
* use call when dealing with individual arguments of varying type
```
let o = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};

let newCar = {carId: 456};

console.log( o.getId.call(newCar) );

```

```
let person1 = {name:'John',age:22};
let person2 = {name:'Mary',age:26};

let sayHi = function (){
    console.log(`Hi, ${this.name}`);
};

sayHi.call(person1);
sayHi.call(person2);
```

```
let person1 = {name:'John',age:22};
let sayHi = function(message){
    console.log(`${message} ${this.name}`);
};

sayHi.call(person1,'Hi');
```
### apply
* similar to call 
* accepts a single array of arguments 
* use apply when input parameter in form of array of similar values
```
let o = {
  carId:123,
  getId:function(prefix){
    return `${prefix} ${this.carId}`;
  //      return prefix + this.carId ;
  }
};

let newCar = {carId: 456};

console.log( o.getId.apply(newCar, ['ID: ']));

```

```
function introduction(name,profession){
    console.log(`My name is ${name} and I am a ${profession}.`);
    console.log(this);
}

introduction('John','student');

introduction.apply(undefined,['Mary','Lawyer']);

introduction.call(undefined,'James','artist');
```
### bind 
* create copy of function and change the value 
```
let o = {
  carId:123,
  getId: function (){
    return this.carId;
  }
};

let newCar = { carId:456 };

let newFn = o.getId.bind(newCar);

console.log( newFn() );
```

```
let person1 = {
    name:'Mary',
    getName:function(){
        return `${this.name}`;
    }
};

let person2 = {name:'John'};

let getNameCopy = person1.getName.bind(person2);

console.log(getNameCopy());
```
### function built in 

* eval 
```
let x = 1;
let y = 2;
console.log(eval('x + y + 1'));
```

* parseInt
```
parseInt('F',16)
parseInt('15',10)
parseInt('Hi',10)
```

```
parseFloat('3.99')
```

* return hexadecimal
```
escape('text')
escape(' ') // %20
```

* unescape
```
unescape('%20')
```

### arrow function
* doesnt have this 

```
let getId = _ => 123
```

### this 
* owner of function we are executing 
* arrow functions do not have their own this value 

```
let message = {
    name: 'John',
    regularFunction: function(){
        console.log(`Hello ${this.name}`);
    },
    arrowFunction: () => console.log(`Hi ${this.name}`)
};

message.regularFunction();
message.arrowFunction();
```

## function

### default parameters 

```
function sayHi(name='World'){
  console.log(`Hello ${name}`);
}

sayHi();
sayHi('John');

```

### Rest Parameters
define function to store multiple arg in a single array 
useful invoking function with multiple arg 

```
let sayHi = function greet(...names){
  names.forEach(name => console.log(`Hi ${name}`));
}

sayHi('Mary','John','James');
```

```
let sayHi = function greet(message,...names){
  console.log(`${message} everyone!`);
  names.forEach(name => console.log(`Hi ${name}`))
}

sayHi('Welcome','Mary','John','James');
```


