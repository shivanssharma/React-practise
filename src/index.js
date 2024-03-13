import React from 'react';
import ReactDOM from 'react-dom';
//import App from "./components/app.js";
//import App from "./components2/App.js";
import App from "./components3/App.js";
//import App1 from "./components1.jsx/app1.js";
import animals,{useanimals} from "./data.js";
import cars from "./data.js";
 ReactDOM.render(<App />,document.getElementById("root"));
// ReactDOM.render(<h1>sairam </h1>,document.getElementById("root"));
//ReactDOM.render(<App1 />,document.getElementById("root"));
// document.getElementById("root").style.textDecoration="line-through";


// destructing concept
// const [cat, dog] =animals;
// console.log(cat);
//  console.log(dog);
//  const { name, sound, foodrequirements:{food,water} }=cat;
//  console.log(foodrequirements.water);
// console.log(food);
// console.log(useanimals);
// const [ animal,makesound ]=useanimals(cat);
// console.log(animal);
// makesound();

//------------------------------------------------------------------------------
//console.log(cars);

// const [Honda,tesla]=cars;
// const {speedStats: {topSpeed : topmostspeed}}=Honda;
// const {speedStats: {topSpeed : upspeed}}=tesla;
// const {coloursByPopularity: [Hondatopcolor]}=Honda;
// const {coloursByPopularity: [teslatopcolor]}=tesla;
// ReactDOM.render(
//     <table>
//         <tr>
//             <th>Brand</th>
//             <th>topSpeed</th>
//             <th>brandcolor</th>
//         </tr>
//         <tr>
//             <td>{Honda.model}</td>
//             <td>{topmostspeed}</td>
//             <td>{Hondatopcolor}</td>
//         </tr>
//         <tr>
//             <td>{tesla.model}</td>
//             <td>{upspeed}</td>
//             <td>{teslatopcolor}</td>
//         </tr>
//     </table>
//     ,document.getElementById("root")
// );
//------------------------------------------------------------------------------

const fruits =["banana","apple","mango"];
const games =["basketball",...fruits,"football","volleyball"];

const basketball={
    material:"ball",
    material2:"rim"
};
const user={
    ...basketball,
    id:1
};
console.log(user);