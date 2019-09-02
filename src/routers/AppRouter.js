import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import BudgetDashboardPage from '../components/BudgetDashboardPage';
import EditPage from '../components/EditPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';








const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={BudgetDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpense}/>
                <Route path="/edit/:id" component={EditPage}/>
                <Route path= "/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            
        </div>
    </BrowserRouter>
);

export default AppRouter;