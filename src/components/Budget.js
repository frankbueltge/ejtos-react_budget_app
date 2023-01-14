import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const {state} = useContext(AppContext);
    return(
    
           <div className='alert alert-secondary'>
           <span>Budget:  {state.currency}{state.budget}</span>
       </div>
    )
}

export default Budget;