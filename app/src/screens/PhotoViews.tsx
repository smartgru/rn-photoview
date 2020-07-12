import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Thumbnail from '../components/Thumbnail';
import {getPhotos, addPhotos, deletePhoto} from "../services/REST";

const rows = [0, 1, 2];
const columns = [0, 1, 2];

const ProfileScreen = () => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    getPhotos()
      .then((response) => setPhoto(response.data))
      .catch((error) => console.log(error.response));
  }, []);

  const handleClose = () => {

  };

  const handleAdd = () => {
    addPhotos({
      id: photo.id,
      memberId: photo.memberId,
      photos: [...photo.photos, "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpgg"],
    })
      .then((response) => setPhoto(response.data))
      .catch((error) => console.log(error.response))
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagesContainer}>
        {rows.map((item) => (
          <View style={styles.imagesRow}>
            {columns.map((column) => (
              <View style={styles.imageWrapper}>
                <Thumbnail
                  image={photo && photo.photos ? photo.photos[item * 3 + column] : null}
                  onClose={handleClose}
                  onAdd={handleAdd}
                />
              </View>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  imagesContainer: {
    flex: 1,
    marginVertical: 40,
  },
  imagesRow: {
    flex: 1,
    flexDirection: 'row',
  },
  imageWrapper: {
    flex: 1,
    margin: 7,
  },
});

export default ProfileScreen;
