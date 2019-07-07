import React, { Component } from 'react'
import { Card } from 'antd'
import { Button } from 'antd'
import moment from 'moment'

export default class StreakCard extends Component {
  currentStreak = () => {
    const startDate = moment(this.props.started)
    const currentDate = moment()
    console.log(this.props.started)
    console.log(startDate)
    console.log(currentDate)
    console.log(startDate.diff(currentDate, 'days'))
    return currentDate.diff(startDate, 'days')
  }

  render() {
    const cardStyles = {
      width: 300,
      textAlign: 'center',
      margin: '50px 5%'
    }

    return(
      <Card key={this.props.keyID.toString()} title={this.props.title} style={ cardStyles }>
        <h1>{this.currentStreak()}</h1>
        <p>Current Streak</p>
        <p>Started: {this.props.startDate}</p>
        <Button type="danger" block>End Streak</Button>
      </Card>
    )
  }
}
