import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import tasks from '../samples/taskexamples.json';
import Card from '../tickets/Card'

class Details extends Component {
  
  // ** u can write code js here **
  example = { 
    task: tasks 
  }

  render(){
    return (
      <View>
        { this.example.task.map(e => 
          <View> 
            <Card>
              <Text>  { e.task } </Text> 
              <Text> { e.description }</Text>
            </Card>
          </View> 
        )}
      </View>
    )
  }
 
}

export default Details