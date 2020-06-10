import React from "react";
import axios from "axios";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import volunteer from "./volunteer.jpg";

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
    axios.get("http://localhost:5000/projects").then((response) => {
      this.setState({
        data: Object.values(response.data),
      });
      const convertedDate = new Date(response.data[0].start_time.$date);
      console.log(convertedDate);
    });
  };

  render() {
    return (
      <div>
        {this.state.data && (
          <div className="list_students">
            {this.state.data.map((user) => {
              return (
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
                      <p class="card-text">
                        {" "}
                        <b>Name Of The Project:</b> {user.name}
                      </p>
                      <p>
                        {" "}
                        <b>Description:</b> {user.description}{" "}
                      </p>
                      <p>
                        {" "}
                        <b>Location:</b> {user.city}{" "}
                      </p>
                      <p>
                        <b>Projects starts at:</b>{" "}
                        {new Date(user.start_time.$date).toString()}
                      </p>
                      <p>
                        <b> Projects ends at:</b>{" "}
                        {new Date(user.end_time.$date).toString()}
                      </p>
                    </div>
                    <div className="col-3">
                      <img class="FeedPageImage" src={volunteer}></img>
                    </div>
                  </div>
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
