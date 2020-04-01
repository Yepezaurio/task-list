import React, { Component, navigation } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../navigation/GlobalStyles';
import tasks from '../samples/taskexamples.json';
import firebase from '../tickets/Firebase';


class addTask extends Component {
 
  /*  {
    *    "id": 1,
    *    "task": "first task",
    *    "description": "lorem lipsum"
    * }
    */

  //Navegation from to details ** Need to change *
  pressHandler = () => {
    this.props.navigation.navigate('Details');
  }

  // function for add task into bd

  /**
   *  {
   *    "id": 1,
   *    "task": "first task",
   *    "description": "lorem lipsum"
   * }
   */
  addTask =(task)=> {
    firebase.database().ref('Task').push({
      task
    }).then((data)=>{
      console.log('data ' , data);
      
    }).catch((error)=>{
      //error callback
      console.log('error ' , error)
    })
  }


  clearTextInput = () => {
    this._textInput.setNativeProps({ text: ''});
  }

  render()
  {
    return(
      <View>
      <Formik
          initialValues={{ task: "", description: "" }}
          //Funcion para añadir tareas.
          onSubmit = { (values, actions) => {
            this.addTask(values);
            alert(' Tarea añadidad con exito ');
            actions.resetForm();
          }}
       >
          {(props) => (
              <View   >
                  <TextInput
                    style={ globalStyles.textInput }
                    placeholder=" Task i need to do"
                    //Añado lo del input a la propiedad task 
                    onChangeText={ props.handleChange('task') }
                    //añado lo de task a mi props.values 
                    value = { props.values.task }
                    
                  />
                  <View style={{ flexDirection: "row",
                     justifyContent:"space-between",
                     marginRight: 10, 
                     alignContent: "center",
                     marginBottom: 25
                
                    }}>
                    <TextInput
                      style= { globalStyles.textInput }
                      placeholder="Description "
                      onChangeText= { props.handleChange('description')}
                      value = { props.values.description }
                      
                    />
                    <Button title="addTask " color="green" onPress={ props.handleSubmit }/>
                  </View>
             
                  <Button title="Details Task" onPress={ this.pressHandler }  />
  
              </View>
          )}
      </Formik>
     </View>
  
    )
  }
  
}
export default  addTask
/** 
class addTask   extends Component
{


  render()
  
  {
   

    return (

      <View>
          <Formik
              initialValues={{ task: "", description: "" }}
              
              //Funcion para añadir tareas.
              addTask = { (values) => {
                console.log(Values);

              }}
              
            

          >
              {(props) => (
                  <View   >
                      <TextInput
                        style={ globalStyles.textInput }
                        placeholder=" Task i need to do"
                        //Añado lo del input a la propiedad task 
                        onChangeText={ props.handleChange('task') }
                        //añado lo de task a mi props.values 
                        values = { props.values.task }
                      />
                      <View style={{ flexDirection: "row",
                         justifyContent:"space-between",
                         marginRight: 10, 
                         alignContent: "center",
                         marginBottom: 25
                    
                        }}>
                        <TextInput
                          style= { globalStyles.textInput }
                          placeholder="Description "
                          onChangeText= { props.handleChange('description')}
                          values= { props.values.description }
                          
                        />
                        <Button title="addTask " color="green" />
                      </View>
                 
                      <Button title="Details Task" onPress={ this.props.navigation.navigate('Details') }  />

                  </View>
              )}
          </Formik>
      </View>

     
    )

  }
  
}



export default addTask
*/