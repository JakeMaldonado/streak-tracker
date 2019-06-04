import React, { Component } from 'react';
import { Form } from 'antd';
import StreakCard from './components/StreakCard';
import Header from './components/Header';
import NewStreakForm from './components/NewStreakForm';
import 'antd/dist/antd.css';

class App extends Component {
  state = {
    streaks: []
  }

  render() {
    const EnterNewStreak =  Form.create({ name: 'newStreak' })(NewStreakForm);

    const newStreak = (streakObj) => {
     this.setState({
       streaks: this.state.streaks.concat(streakObj)
      })
    }

    const streakCards = () => {
       return this.state.streaks.map(streak => {
         return <StreakCard { ...streak } />
       });
    }

    return (
      <div className="App">
        <Header/>
        <EnterNewStreak newStreak={ newStreak }/>
        { streakCards() }
      </div>
    );
  }
}

export default App;
