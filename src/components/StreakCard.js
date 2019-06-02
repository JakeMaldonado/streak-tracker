import React, { Component } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';

export default class StreakCard extends Component {
  render() {
    return(
      <Card title="Day's I've worked out" style={{ width: 300, textAlign: 'center' }}>
        <h2>15</h2>
        <p>Current Streak</p>
        <Button type="danger" block>End Streak</Button>
      </Card>
    )
  }
}
