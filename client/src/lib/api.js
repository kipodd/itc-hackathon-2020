import axios from 'axios';

export const postNewProject = (data) => {
  return axios.post('http://localhost:5000/projects', data);
};
