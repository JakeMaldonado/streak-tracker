import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export default class Header extends Component {
  render() {
    return(
      <Title level={2}>Streak tracker</Title>
    );
  }
}
