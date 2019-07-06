import React, { Component } from 'react';
import { Form } from 'antd';
import StreakCard from './components/StreakCard';
import NewStreakForm from './components/NewStreakForm';
import 'antd/dist/antd.css';
import logo from './streak.png';

const cardStyles = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap'
}

const logoStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
}

const containerSyle = {
  height: 'auto',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '25%'
}

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
       return this.state.streaks.map((streak, i) => {
         return <StreakCard keyID={i} { ...streak } />
       });
    }

    return (
      <div className="App">
        <div style={{ textAlign: 'center', width: '100%', margin: '30px 0' }}>
          <div style={ containerSyle }>
            <img src={logo} style={ logoStyle } alt='streak main'/>
          </div>
        </div>
        <EnterNewStreak newStreak={ newStreak }/>
        <div style={ cardStyles }>
          { streakCards() }
        </div>
      </div>
    );
  }
}

export default App;
