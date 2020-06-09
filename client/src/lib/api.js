import axios from 'axios';

export const postNewProject = (data) => {
  return axios.post('http://127.0.0.1:5000/projects', data);
};
