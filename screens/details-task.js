import React, { Component } from 'react'
import { StyleSheet, View, Text, CheckBox } from 'react-native';
import tasks from '../samples/taskexamples.json';
import Card from '../tickets/Card'
// this is my db
import firebase from '../tickets/Firebase';
import { set } from 'react-native-reanimated';
//Variable temporal para mi checkbox de su valor True o False 
var tempCheckValues = [];

class Details extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      checkBoxChecked: []
    }
    this.getTasks();
    this.valuesCheckBox();
    
    
  }
  
  // Creation my json tasks 
  task = {
    "id": '',
    "description": '',
    "task": ''
  }

  listTask = [ ]

  getTasks()
  {
    firebase.database().ref().child('Task').on('child_added', snap => {
        
        this.task.id = snap.key;
        this.task.task = snap.val().task.task;
        this.task.description = snap.val().task.description;
        
        console.log(this.task);
        this.listTask.push(this.task);
      
      })
      
     
    
  }
  // ** u can write code js here **
  example = {
    task: this.listTask
  }

  valuesCheckBox()
  {
    this.example.task.map((val) => {
      tempCheckValues[val.id] = false;
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
  CheckedText: {
    textDecorationLine: "line-through",
    fontStyle: "italic",
    backgroundColor: "#eeeeee"
    
  },
  unCheckedText: {
    fontWeight: "bold" 
  }
})

export default Details