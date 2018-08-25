"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// IndecisionApp Root component
// 1. class based components
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    _createClass(IndecisionApp, [{
        key: "componentDidMount",


        //lifecycle methods are only for class based components

        // when the component first gets mounted to DOM
        value: function componentDidMount() {
            console.log("COmponent did mount");
            try {
                var json = localStorage.getItem("options");
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }

        // when the component updates

    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            console.log("COmponent did update");

            if (prevState.options.length != this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }

        // when a component goes away

    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount(prevProps, prevState) {
            console.log("COmponent will unmount");
        }
    }]);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleIndividualDeleteOption = _this.handleIndividualDeleteOption.bind(_this);
        _this.generateRandomNumber = _this.generateRandomNumber.bind(_this);
        _this.onFormSubmit = _this.onFormSubmit.bind(_this);
        // creating state object in component
        _this.state = {
            // this will pick up defaultProps if props are not being passed
            options: props.options
        };

        return _this;
    }

    // handleDeleteOptions(){
    //     this.setState(()=>{
    //         return {
    //             options: []
    //         }
    //     });
    // }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleIndividualDeleteOption",
        value: function handleIndividualDeleteOption(e) {
            var buttonTobeDeleted = e.currentTarget.id;
            if (buttonTobeDeleted) {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.filter(function (e) {
                            return e !== buttonTobeDeleted;
                        })
                    };
                });
            }
        }
    }, {
        key: "generateRandomNumber",
        value: function generateRandomNumber() {
            var getRandomChoice = Math.floor(Math.random() * this.state.options.length);
            var randomOption = this.state.options[getRandomChoice];
            alert(randomOption);
        }
    }, {
        key: "onFormSubmit",
        value: function onFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            if (option) {
                this.setState(function (prevState) {
                    return {
                        // we cannot directly modify the options array 
                        // because if we do so it will break the other components using options as props
                        // so we use concat which returns a new array
                        options: prevState.options.concat([option])
                    };
                });
                e.target.elements.option.value = '';
            }
        }

        //JSX

    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subTitle = "Put your life in the hands of a computer";
            // const options = [];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(WhatShouldIdo, { hasOptions: this.state.options.length > 0 ? true : false,
                    generateRandomNumber: this.generateRandomNumber }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleIndividualDeleteOption: this.handleIndividualDeleteOption }),
                React.createElement(AddOption, { options: this.state.options, onFormSubmit: this.onFormSubmit })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

// What is a prop?
// Its an object, can be used for rendering
// changes from above(parents) cause re rendering (when fresh prop is passed down to child)
// components have access to props when rendering 
// works from top to bottom (comes from above i.e one way)
// props cannot be changed by component itself


// What is a (component) state?
// Its an object, can be used for rendering
// changes cause re rendering
// components have access to state when rendering
// defined in component itself
// can be changed by component itself


// Header component
// class Header extends React.Component {
//     //JSX
//     render(){
//         // to access props
//         // console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

// !!
// !!
// !!
// \/ 

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: 'Default Prop'
};

// Action component
// class WhatShouldIdo extends React.Component {
//     constructor(props){
//         super(props);
//         // this.generateRandomNumber = this.generateRandomNumber.bind(this);
//     }
//     // generateRandomNumber(){
//     //     console.log(this.props);
//     // }
//     //JSX
//     render(){
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.generateRandomNumber}>What should I do?</button>
//             </div>
//         );
//     }
// }         

// !!
// !!
// !!
// \/ 

// Converting WhatShouldIdo class component to stateless functional component
var WhatShouldIdo = function WhatShouldIdo(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions,
                onClick: props.generateRandomNumber },
            "What should I do?"
        )
    );
};

// Options component
// class Options extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     //JSX
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 <ul>
//                     {
//                         this.props.options.map((option)=>{
//                         return <Option key={option} option={option}/>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
// !!
// !!
// !!
// \/ 


var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove all"
        ),
        React.createElement(
            "ul",
            null,
            props.options.length === 0 && React.createElement(
                "p",
                null,
                "Please add an option to get started!"
            ),
            props.options.map(function (option) {
                return React.createElement(Option, { key: option, option: option,
                    removeIndividual: props.handleIndividualDeleteOption });
            })
        )
    );
};

// Option component
// class Option extends React.Component {
//     //JSX
//     render(){
//         return (
//             <li>{this.props.option}</li>
//         );
//     }
// }

// !!
// !!
// !!
// \/ 


var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "li",
            null,
            props.option,
            " ",
            React.createElement(
                "button",
                { id: props.option, onClick: props.removeIndividual },
                "Remove"
            )
        )
    );
};

// addOption component

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));
    }

    //JSX


    _createClass(AddOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.props.onFormSubmit },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// type 2. stateless functional components
// they donot allow states but allow props
// they do not have access to this
// they are faster than class based


var User = function User(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "Name:",
            props.name,
            " "
        ),
        React.createElement(
            "p",
            null,
            "Age: ",
            props.age,
            " "
        )
    );
};

// render app
// ReactDOM.render( <User name="Amogh" age="23"/>,document.getElementById('app'));
// ReactDOM.render( <IndecisionApp options={["hello","world","welcome"]}/>,document.getElementById('app'));
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
