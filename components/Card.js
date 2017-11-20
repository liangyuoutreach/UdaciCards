import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Card extends Component {
  state = {
    showAnswer: false
  }

  handleShowAnswer() {
    this.setState({showAnswer: true})
    console.log(this.state)
  }

  render() {
    console.log(this.props)
    const { question, answer } = this.props.question
    const { showAnswer } = this.state

    return (
      <View>
        { showAnswer
          ? <Answer answer={answer} />
          : <Question handleShowAnswer={this.handleShowAnswer.bind(this)} question={question} />
        }
      </View>
    )
  }
}


export function Question({ question, handleShowAnswer }) {
  return (
    <View>
      <Text>Current Question: { question }</Text>
      <TouchableHighlight onPress={handleShowAnswer}>
        <Text>Show Answer</Text>
      </TouchableHighlight>
    </View>
  )
}

export function Answer({ answer }) {
  return (
    <View>
      <Text>Answer: { answer }</Text>
    </View>
  )
}