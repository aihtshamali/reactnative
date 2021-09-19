import React, { useState } from 'react';
import { CheckBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const ListItem = ({titleId, title, onPress}) => {
  const [isSelected, setSelection] = useState(false);
    
    return (
    <View style={styles.item}>
        <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
        />
        <Text  style={isSelected ? styles.lineThrough : styles.title}>{title}</Text>
        <Icon style={styles.icon}  name="remove" size={20} color={'#55BCF6'} onPress={() => onPress(titleId)}  />
    </View>
    );
}

const styles = StyleSheet.create({
    item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row'
  },
  title: {
    fontSize: 15,
    alignSelf: "center",
    marginLeft: 10,
  },
  lineThrough:{
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  },
  checkbox: {
    alignSelf: "center",
    
  },
  icon: {
      textAlign:'right',
      flex: 1,
      alignSelf: 'center'
  }
})


