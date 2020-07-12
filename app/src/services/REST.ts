import axios from 'axios';
import {API_URL} from '../config';

const REST = ({requestType, url, data}) =>
  axios({
    baseURL: API_URL,
    method: requestType,
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const getPhotos = () => REST('get', '/member/1/photos', null);

export const addPhotos = ( data ) => REST('post', '/member/1/photo', data);

export const deletePhoto = () => REST('delete', '/members/1/photo');
