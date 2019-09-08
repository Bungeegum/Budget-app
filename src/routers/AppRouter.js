import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Switch} from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import BudgetDashboardPage from '../components/BudgetDashboardPage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import logInPage from '../components/logIn';
import PrivateRoute from './PrivateRoute';


export const history = createHistory();

const AppRouter=()=>(
    <Router history={history}>
        <div>
            <Switch>
                <Route path= "/" component={logInPage} exact={true}/>
                <PrivateRoute path="/dashBoard" component={BudgetDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpense}/>
                <PrivateRoute path="/edit/:id" component={EditPage}/>
                <Route path= "/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            
        </div>
    </Router>
);

export default AppRouter;