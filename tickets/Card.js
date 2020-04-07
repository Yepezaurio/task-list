import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Card(props) {
    
 
    return(
        <View style={ styles.card }>
            <View style={ styles.cardContent }>
                { props.children }
                <View style={{flexDirection: 'row',  justifyContent: 'space-between' }}>
                 
                </View>
               </View>
           
        </View>
    )

}
const styles = StyleSheet.create({
    card: {
        borderRadius: 30,
        elevation: 5,
        backgroundColor: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        padding: 15,
         
        
    },

    cardContent: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 5
    }
})