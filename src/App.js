import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

import './App.css';

const App = () => {

  const [coursGoals, setCoursGoal] = useState([
    {id: 'cg1', text: 'Finish the cours'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'}
  ]);



  const addNewGoalHandler = newGoal => {

    // setCoursGoal(coursGoals.concat(newGoal));
    setCoursGoal((prevCoursGoals) => prevCoursGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal  onAddGoal={addNewGoalHandler}/>
      <GoalList goals={coursGoals}/>
    </div>
  );
};

export default App;
