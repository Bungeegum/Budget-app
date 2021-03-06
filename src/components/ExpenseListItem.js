import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id,createdAt,description,amount})=>(
    
        <Link className="list-item" to = {`/edit/${id}`}>
            <div>
                <h1 className="list-item__title">{description}</h1>
                <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data">
                {numeral(amount/100).format('$0,0.00')} 
            </h3>
    
        </Link>
        
        
    


);
    
export default ExpenseListItem;
