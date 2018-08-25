import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

class Header extends React.Component {

    //JSX
    render(){
        return (
            <div>
                <h1>Expensify</h1>
                <NavLink to="/" activeClassName="is-active" exact="true">Go Home</NavLink>
                <NavLink to="/CreateExpense" activeClassName="is-active" >Create Expense</NavLink>
                <NavLink to="/EditExpense" activeClassName="is-active" >Edit Expense</NavLink>
                <NavLink to="/HelpPage"  activeClassName="is-active">Help Page</NavLink>
            </div>
        );
    }
}

export default Header;
