import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddPhoto = ({ onAdd }) => (
  <View style={styles.addBtn}>
    <TouchableOpacity onPress={onAdd}>
      <Icon name="plus" color="#B83DBA" size={40} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddPhoto;
