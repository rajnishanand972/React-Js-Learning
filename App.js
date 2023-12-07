import React from 'react';
import ReactDOM  from 'react-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));

// creating a dom tree using React.createElement(), actually createElement takes three arguement first onr is the tag, second is the attribute and the third one is the content.
// const parent = React.createElement("div",{id:"paarent"},[
//     React.createElement("div",{id:'outer'},[
//         React.createElement("h1",{},"Hello From React Js from Outer1"),
//         React.createElement("h1",{},"Hello From React Js from Outer2")
//     ]),
//     React.createElement("div",{id:'inner'},[
//         React.createElement("h1",{},"Hello From React Js from Inner1"),
//         React.createElement("h1",{},"Hello From React Js from Inner2")
// ])
// ]);

//This jsx code is transpiled into React.createElement() using babel which gives an obejct which is then rendered into HTML tags. 



const name = "JSX";
// React Element
const jsxheading = <h1 id="head">Hello World From {name} using React Element</h1>

const Hello = function(){
return <h1>Hello from normal function</h1>
};

const Hi = () => (
    <h1>Hii I am a React Developer</h1>
);

// Functional Components using arrow function
const BodyComponent = () => (
    <div id="container">
    {jsxheading}
    <h1 id="body">Hello From Body using Functional Component arrow function</h1>
    <Hello/>
    {Hi()}
    </div>
);


//root.render(parent);

root.render(<BodyComponent/>);