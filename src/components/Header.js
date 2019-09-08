import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


const Header = ({startLogout})=>(
    <header>
        <h1>Ballin on a Budget</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>GO HOME</NavLink>
        <NavLink to="/create" activeClassName="is-active">GO CREATE</NavLink>
        <NavLink to="/help" activeClassName="is-active">GO HELP</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);
const mapDispatchToProps = (dispatch)=>({
    startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);