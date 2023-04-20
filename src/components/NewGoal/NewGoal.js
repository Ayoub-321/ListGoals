import React, { useState } from "react";
import './NewGoal.css';

const NewGoal = props => {

    const [entredText, setEntredText] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: entredText
        };

        setEntredText('');

        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
        setEntredText(event.target.value);
    };

    return <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={entredText} onChange={textChangeHandler}/>
        <button type="submit">Add Goal</button>
    </form>
}

export default NewGoal;