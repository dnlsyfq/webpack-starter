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

