import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        Add expense
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit expense
    </div>
);

const HelpPage = () => (
    <div>
        Help
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - Not found!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true}/>
            <Route path='/create' component={AddExpensePage}/>
            <Route path='/edit' component={EditExpensePage}/>
            <Route path='/help' component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
