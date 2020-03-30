import React, { Component, navigation } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../navigation/GlobalStyles';
import tasks from '../samples/taskexamples.json';
import firebase from '../tickets/Firebase';


export default function addTask({navigation})
{
  
  const pressHandler = () => {
    navigation.navigate('Details');
  }

  return(
    <View>
    <Formik
        initialValues={{ task: "", description: "" }}
        
        //Funcion para añadir tareas.
        onSubmit = { (values) => {
          console.log(values);
          console.log(tasks);
          alert(' Tarea añadidad con exito ');
          
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
                  <Button title="addTask " color="green" onPress={ props.handleSubmit }/>
                </View>
           
                <Button title="Details Task" onPress={ pressHandler }  />

            </View>
        )}
    </Formik>
</View>

  )
}

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