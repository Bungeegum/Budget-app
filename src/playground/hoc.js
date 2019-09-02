
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(
    <div>
        <h1>INFO</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />)://spreading the objext with ...props to pass on to the child
            (
                <p> Please log in to tview the info</p>
            )
            }
            
        </div>
            
    );
};
const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            <p>this is provat einfo nigga</p>
            <WrappedComponent {...props} />
        </div>

    );
};

const AuthInfo = requireAuthentication(Info)


const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo  isAuthenticated={true} info="There are the detaisl"/>,document.getElementById('app'));