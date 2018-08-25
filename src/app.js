import React from 'react';
import ReactDOM from 'react-dom';
import Expensify from './components/Expensify'
import ExpensifyDashboardPage from './components/ExpensifyDashboardPage';
import EditExpense from './components/EditExpense';
import HelpPage from './components/HelpPage';
import NotFound from './components/NotFoundPage'

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const routes= (
    <BrowserRouter>
        <Switch>
      
            <Route path="/" component={Expensify}  exact={true}/>
            <Route path="/ExpensifyDashboardPage" component={ExpensifyDashboardPage} />
            <Route path="/EditExpense" component={EditExpense} />
            <Route path="/HelpPage" component={HelpPage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


ReactDOM.render( routes,document.getElementById('app'));