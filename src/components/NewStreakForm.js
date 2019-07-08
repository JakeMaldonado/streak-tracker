import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, DatePicker, Button, Input, Radio } from 'antd'
import moment from 'moment'
import uuid from 'uuid'
import getUserStreak from '../actions/streaks'

export class NewStreakForm extends Component {
  state = {
    value: 1,
    streatId: uuid()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.getUserStreak({
          title: values['Streak Name'],
          started: moment(values['date-picker']).format('LL'),
          startedObj: moment(values['date-picker'].value),
          countBy: this.state.value,
          streakId: this.state.streatId
        })
      }
    })
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }

    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    }

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    }

    return(
      <Form onSubmit={this.handleSubmit} {...formItemLayout}>
        <Form.Item
          label={
            <span>
              Streak Name&nbsp;
            </span>
          }
        >
          {getFieldDecorator('Streak Name', {
            rules: [{ required: true, message: 'Please input a streak name!', whitespace: true }],
          })(<Input size="large" placeholder="Days since I..." style={{ maxWidth: '450px' }}/>)}
        </Form.Item>
        <Form.Item label="Started">
          {getFieldDecorator('date-picker', config)(<DatePicker />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Count by&nbsp;
            </span>
          }
        >
          <Radio.Group onChange={this.onChange} value={this.state.value} buttonStyle="solid">
            <Radio style={radioStyle} value={1}>
              Days
            </Radio>
            <Radio style={radioStyle} value={2}>
              Weeks
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const mapDisptachToProps = (dispatch) => ({
  getUserStreak: (streakObj) => dispatch(getUserStreak(streakObj))
})

export default connect(undefined, mapDisptachToProps)(NewStreakForm)
