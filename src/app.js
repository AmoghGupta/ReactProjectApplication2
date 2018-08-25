import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Expensify from './components/Expensify'
import CreateExpense from './components/CreateExpense';
import EditExpense from './components/EditExpense';
import HelpPage from './components/HelpPage';
import NotFound from './components/NotFoundPage'

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const routes= (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={Expensify}  exact={true}/>
            <Route path="/CreateExpense" component={CreateExpense} />
            <Route path="/EditExpense" component={EditExpense} />
            <Route path="/HelpPage" component={HelpPage} />
            <Route component={NotFound} />
        </Switch>
    </div>
       
    </BrowserRouter>
)


ReactDOM.render( routes,document.getElementById('app'));