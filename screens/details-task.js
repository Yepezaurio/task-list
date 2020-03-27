import React, { Component } from 'react'
import { StyleSheet, View, Text, CheckBox } from 'react-native';
import tasks from '../samples/taskexamples.json';
import Card from '../tickets/Card'

//Variable temporal para mi checkbox de su valor True o False 
var tempCheckValues = [];

class Details extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      checkBoxChecked: []
    }
    this.valuesCheckBox();
  }
  
  // ** u can write code js here **
  example = { 
    task: tasks 
  }

  valuesCheckBox()
  {
    this.example.task.map((val) => {
      tempCheckValues[val.id] = false
    })
  }

  mChangeValueCheckBox(id,value)
  {
    this.setState({
      checkBoxChecked: tempCheckValues
    })

    var tempCheckBoxChecked = this.state.checkBoxChecked;
    tempCheckBoxChecked[id] = !value;

    this.setState({
      checkBoxChecked: tempCheckBoxChecked
    })

  }


  render(){
    return (
      <View >
        { this.example.task.map(e => 
        
          <View key={e.id}> 
            <Card>
              <CheckBox
                value = { this.state.checkBoxChecked[e.id]}
                onValueChange = { () => this.mChangeValueCheckBox(e.id, this.state.checkBoxChecked[e.id])}
              />
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