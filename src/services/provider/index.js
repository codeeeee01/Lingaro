import * as api from './api';

async function getPhotosExec() {
  try {
    const data = await api.photosAPI();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getPhotos() {
  return getPhotosExec();
}
