import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Card(props) {

    return(

        <View>
            <View>
                { props.children }
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },

    cardConten: {
        marginHorizontal: 18,
        marginVertical: 10
    }
})

<