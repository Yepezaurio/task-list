import React, { Component } from 'react'
import { StyleSheet, View, Text, CheckBox } from 'react-native';
import tasks from '../samples/taskexamples.json';
import Card from '../tickets/Card'
// this is my db
import firebase from '../tickets/Firebase';
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
                style= {{ marginRight: 10}}
                value = { this.state.checkBoxChecked[e.id]}
                onValueChange = { () => this.mChangeValueCheckBox(e.id, this.state.checkBoxChecked[e.id])}
              />
              <Text style= { this.state.checkBoxChecked[e.id] ?  styles.CheckedText  :  styles.unCheckedText   }  >
                { e.task }   { e.description } 
              </Text> 
            
            </Card>
          </View> 
        )}
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  CheckedText:{
    textDecorationLine: "line-through",
    fontStyle: "Italic",
    backgroundColor: "#eeeeee",
    
  },
  unCheckedText: {
    fontWeight: "bold" 
  }
})

export default Details