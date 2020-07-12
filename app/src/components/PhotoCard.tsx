import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const PhotoCard = ({ image, onClose }) => (
  <View style={styles.imgContainer}>
    <Image source={{ uri: image }} style={styles.image} />
    <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
      <Icon name="close" color="#B83DBA" size={12} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  imgContainer: {
    position: 'relative',
    overflow: 'hidden',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  closeBtn: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: -6,
    right: -6,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
});

export default PhotoCard;
