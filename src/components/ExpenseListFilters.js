import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByAmount,setStartDate,setEndDate,sortByDate} from '../actions/filters';

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate,endDate}) =>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    };
    onFocusChange = (calendarFocused)=>{
        this.setState(()=>({calendarFocused}));

    };
    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            placeholder="search expense"
                            type="text" 
                            className="text-input"
                            value={this.props.filters.text} 
                            onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value)); //write to the store
                            }}
                        />
                    </div>
                    <div  className="input-group__item">
                        <select 
                            className="select"
                            type="text"
                            value={this.props.filters.sortBy}    
                            onChange={(e) => {
                                if (e.target.value === "date") {
                                    this.props.dispatch(sortByDate());
                                } else if (e.target.value === 'amount') {
                                    this.props.dispatch(sortByAmount());
                                }
                                }}
                        >
                            <option value="date">Date</option>
                            <option value="amount" >Amount</option>
                        </select>
                    </div>
                    <div  >
                        <DateRangePicker
                            startDateId="this start ID"
                            startDate={this.props.filters.startDate}
                            endDateId="this end date id"
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>

                </div>

            </div>

        );
    }
};


const mapStateToProps = (state) => {
    return{
        filters:state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);