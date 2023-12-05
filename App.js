

const root = ReactDOM.createRoot(document.getElementById("root"));

// creating a dom tree using React.createElement(), actually createElement takes three arguement first onr is the tag, second is the attribute and the third one is the content.
const parent = React.createElement("div",{id:"paarent"},[
    React.createElement("div",{id:'outer'},[
        React.createElement("h1",{},"Hello From React Js from Outer1"),
        React.createElement("h1",{},"Hello From React Js from Outer2")
    ]),
    React.createElement("div",{id:'inner'},[
        React.createElement("h1",{},"Hello From React Js from Inner1"),
        React.createElement("h1",{},"Hello From React Js from Inner2")
])
]);


root.render(parent);