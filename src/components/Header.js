import React from 'react';
import {BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom';

const Header = ()=>(
    <header>
        <h1>Ballin on a Budget</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>GO HOME</NavLink>
        <NavLink to="/create" activeClassName="is-active">GO CREATE</NavLink>
        <NavLink to="/help" activeClassName="is-active">GO HELP</NavLink>
    </header>
);

export default Header;