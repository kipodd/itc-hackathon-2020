import React from 'react';
import axios, * as others from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class FeedPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    this.getstudents();
  };

  getstudents = () => {
    axios
      .get('http://localhost:5000/projects')
      .then((response) => {
        const userdata = response.data;
        console.log(userdata);
        this.setState({ data: userdata.data });
        console.log(this.state.data);
        return response.json;
      })
      .catch(() => {});
  };

  render() {
    return (
      <div>
        {this.state.data && (
          <div className='list_students'>
            {this.state.data.map((user) => {
              return (
                <div className='student'>
                  <p> Name: {user.name}</p>
                  <p> StudentID: {user._id}</p>
                  <p> Desired_Skills: {user.user_skills}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default FeedPage;
