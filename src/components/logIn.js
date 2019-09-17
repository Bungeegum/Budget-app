import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const logInPage=({startLogin})=>(
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Ballin' on a budget</h1>
            <p>Get your money right.</p>

            <button className="box-layout__button" onClick={startLogin}>Login</button>
        </div>
        
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(logInPage);