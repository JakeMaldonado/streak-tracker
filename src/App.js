import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'antd'
import StreakCard from './components/StreakCard'
import NewStreakForm from './components/NewStreakForm'
import 'antd/dist/antd.css'
import logo from './streak.png'

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

export class App extends Component {

  streakCards = () => {
       return this.props.streaks.map((streak) => {
         return <StreakCard key={streak.streakId} { ...streak } />
       })
    }

  render() {
    const EnterNewStreak =  Form.create({ name: 'newStreak' })(NewStreakForm)

    return (
      <div className="App">
        <div style={{ textAlign: 'center', width: '100%', margin: '30px 0' }}>
          <div style={ containerSyle }>
            <img src={logo} style={ logoStyle } alt='streak main'/>
          </div>
        </div>
        <EnterNewStreak />
        <div style={ cardStyles }>
          { this.streakCards() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streaks: state.streaks
  }
}

export default connect(mapStateToProps, undefined)(App)
