import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Today's tasks</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        height: 60,
        marginTop:30
    },
    text:{
        fontWeight: 'bold',
        fontSize: 30,
        color:'black',
    }
})