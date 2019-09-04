


export default (exp) =>{
        return exp.map((expense)=>expense.amount)
        .reduce ((acc,value)=> acc+value,0)
        
};


