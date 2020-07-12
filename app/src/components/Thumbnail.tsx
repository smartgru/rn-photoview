import React from 'react';
import AddPhoto from './AddPhoto';
import PhotoCard from './PhotoCard';

const Thumbnail = ({ image, onClose, onAdd }) => {
  if (image) {
    return <PhotoCard image={image} onClose={onClose} />;
  } else {
    return <AddPhoto onAdd={onAdd} />;
  }
};

export default Thumbnail;
