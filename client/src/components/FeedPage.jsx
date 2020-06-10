<<<<<<< HEAD
import React from "react";
import axios, * as others from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import volunteer from "./volunteer.jpg";
=======
import React from 'react';
import axios, * as others from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
>>>>>>> search-for-project-feature

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
<<<<<<< HEAD
    axios.get("http://localhost:5000/projects").then((response) => {
      this.setState({
        data: Object.values(response.data),
      });
      const convertedDate = new Date(response.data[0].start_time.$date);
      console.log(convertedDate);
    });
=======
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
>>>>>>> search-for-project-feature
  };

  render() {
    return (
      <div>
        {this.state.data && (
          <div className='list_students'>
            {this.state.data.map((user) => {
              return (
<<<<<<< HEAD
                // <div class="card student">
                //   <p> Name Of The Project: {user.name} </p>
                //   <p> Location: {user.city} </p>
                //   <p>
                //     Projects starts at:{" "}
                //     {new Date(user.start_time.$date).toString()}
                //   </p>
                // </div>
                <div class="card student mb-4" style={{ width: "69rem" }}>
                  <div class="card-body row">
                    <div className="col-9">
                      <p class="card-text"> Name Of The Project: {user.name}</p>
                      <p> Location: {user.city} </p>
                      <p>
                        Projects starts at:{" "}
                        {new Date(user.start_time.$date).toString()}
                      </p>
                      <p>
                        Projects ends at:{" "}
                        {new Date(user.end_time.$date).toString()}
                      </p>
                    </div>
                    <div className="col-3">
                      <img class="FeedPageImage" src={volunteer}></img>
                    </div>
                  </div>
=======
                <div className='student'>
                  <p> Name: {user.name}</p>
                  <p> StudentID: {user._id}</p>
                  <p> Desired_Skills: {user.user_skills}</p>
>>>>>>> search-for-project-feature
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(FeedPage);
