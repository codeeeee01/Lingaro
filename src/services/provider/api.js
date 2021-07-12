import env from 'react-native-config';
import axios from 'axios';

const URL = env.URL;
const KEY = env.KEY;

// const instance = axios.create({
//   baseURL: URL,
//   headers: {
//     'Accept-Version': 'v1',
//   },
// });

// async function request(options) {
// let successData = {};
// let hasError = false;
// let errorMessage = null;
// console.log('asd');

// try {
//   const successData = await instance(options);
//   console.log('successData', successData);
//   return successData;
// } catch (error) {
//   throw new Error(error);
// }

// await instance(options)
// .then(response => {
//   successData = response.data || response._response;
// })
// .catch(error => {
//   hasError = true;
//   if (error.response) {
//     errorMessage = error.response.data.Description;
//   }
// });

// if (hasError) {
//   throw new Error(errorMessage || 'Unknown error');
// }

// return successData;
// }

export const photosAPI = async () => {
  axios.get(`${URL}/photos/?client_id=${KEY}`).then(response => {
    // console.log('asd');
  });
  // fetch('https://google.com').then(res => {
  //   return res.json().then(
  //     () => res.json(), // this will throw
  //   );
  // });
  // const options = {
  //   method: 'GET',
  //   url: `${URL}/photos/?client_id=${KEY}`,
  //   headers: {
  //     'Accept-Version': 'v1',
  //   },
  //   data: undefined,
  // };

  // return request(options);
};
