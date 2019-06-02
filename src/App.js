import React from 'react';
import { Form } from 'antd';
import StreakCard from './components/StreakCard';
import Header from './components/Header';
import NewStreakForm from './components/NewStreakForm';
import 'antd/dist/antd.css';

function App() {
  const NewStreak =  Form.create({ name: 'newStreak' })(NewStreakForm);
  return (
    <div className="App">
      <Header/>
      <NewStreak/>
      <StreakCard/>
    </div>
  );
}

export default App;
