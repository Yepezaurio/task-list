import React from 'react';
import { StyleSheet, Button, TextInput, View, Text} from 'react-native';
import { Formik } from 'formik';


export default function HomeFormik(){
    return(
        <View>
            <Formik
                initialValues={{ user: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={{ height: 40, fontSize: 18, borderBottomWidth: 1 }}
                            placeholder="User or email"
                            onChangeText={ props.handleChange('user') }
                            value={ props.values.user }
                        />
                        <TextInput
                            style={{ height: 40, fontSize: 18, borderBottomWidth: 1 }}
                            placeholder="password"
                            onChangeText={ props.handleChange('password') }
                            value={ props.values.password }
                        />
                        <Button title="Log In" color="green" onPress={props.handleSubmit}/>
                    </View>

                )}

            </Formik>
        </View>
    )
}