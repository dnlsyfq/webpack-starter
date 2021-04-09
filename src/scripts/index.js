// import '../styles/index.scss';
//
// if (process.env.NODE_ENV === 'development') {
//   require('../index.html');
// }

// console.log('Hello World!');

// function sendCars(day,...carIds){
//   carIds.forEach(id => console.log(id));
// }
//
// sendCars('Friday',1,2,3);

// let carIds = [1,2,5];
// let [car1,car2,car3] = carIds;
// console.log(car1,car2,car3);

// let carIds = [1,2,5];
// let car1, remainingCars;
//
// [car1, ... remainingCars] = carIds;
//
// console.log(car1);
// console.log(remainingCars);

// let carIds = [1,2,5];
// let remainingCars;
// [,...remainingCars] = carIds;
//
// console.log(remainingCars);

// let carIds = [100,200,300];
// let car1,car2,theRest;
//
// [car1,car2,...theRest] = carIds;
//
// console.log(car1,car2,theRest);

// let car = {
//   id:5000,
//   style:'convertible'
// };
//
// let {id,style} = car;
//
// console.log(id,style);

// function startCars(car1,car2,car3){
//   console.log(car1,car2,car3);
// }

// let carIds = [100,300,500];
// startCars(...carIds);

// let carCodes = 'abc';
// startCars(...carCodes);

// function startCars(car1,car2,car3, ...rest){
//   console.log(rest);
// }
//
// let carIds = [1,2,3,4,5,6];
// startCars(...carIds);

let i = 0;
for(; i < 12 ; i++){
  if(i === 8){
    break
  }
}

console.log(i);