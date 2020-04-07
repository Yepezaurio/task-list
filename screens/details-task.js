import React, { Component } from 'react'
import { StyleSheet, View, Text, CheckBox, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import Card from '../tickets/Card'
import { MdModeEdit, MdDelete } from 'react-icons/md'
//  import ModalEdit from '../tickets/Modal'
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
    this.getTasks();
    this.valuesCheckBox();
  }
  //Modal is create for edit task 
  showModal = () => {
    this.setState = { modalOpen: true }
  }

  hideModal = () => {
    this.setState = { setModalOpen: false }
  }

  // Creation my json tasks 
  listTask = [ ]

  getTasks()
  {
    firebase.database().ref().child('Task').on('child_added', snap => {
        
        const jTask = { id: snap.key , task: snap.val().task.task , description: snap.val().task.description }
        this.listTask.push(jTask);

      })
  }
  // ** u can write code js here **
  example = {
    task: this.listTask
  }

  valuesCheckBox()
  {
    this.example.task.map((val) => {
      console.log(val.id);
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
      <ScrollView>
      <View >
        { this.example.task.map(e => 
          <View key={e.id}> 
      
              <Card>
                <CheckBox
                  style= {{ marginRight: 10}}
                  value = { this.state.checkBoxChecked[e.id]}
                  onValueChange = { () => this.mChangeValueCheckBox(e.id, this.state.checkBoxChecked[e.id])}
                />
                <TouchableOpacity>
               
                 <MdModeEdit color='#2471a3'/> 
                </TouchableOpacity>
                <MdDelete  style={{marginLeft: 10, marginRight: 10}} color='#FF0000' />
                <Text style= { this.state.checkBoxChecked[e.id] ?  styles.CheckedText  :  styles.unCheckedText   }  >
                  { e.task }   { e.description } 
                </Text> 
                  
              </Card>
            
          </View> 
        )}
      </View>
      </ScrollView>
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