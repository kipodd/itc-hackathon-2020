import React from "react";
// import axios, * as others from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import calendar from "./calendar.png";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //   componentDidMount() {
  //     axios
  //       .get("http://localhost:5000/student/" + this.props.match.params.id)
  //       .then((response) => {
  //         this.setState({
  //           data: Object.values(response.data),
  //         });
  //       })
  //       .catch((er) => {
  //         console.log(er);
  //       });
  //   }

  render() {
    return (
      <div className="ProfilePageDetails">
        <div>
          <h3 className="ProfilePageName"> Itzik Pazuelo</h3>
          <img
            className="ProfilePageImage"
            src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/1452239_10153612362700327_2002053524_n.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_oc=AQkLeWMMwe4uC4Sbtu473_ga4AUn94rvKJx9t3lDVrlW5nC6kgNfkhWi2CieWU6upiA&_nc_ht=scontent.ftlv5-1.fna&oh=03db35b499334a694fbf4eac161733f1&oe=5F03FB27"
          ></img>
          <div className="ProfilePageCalendar">
            <img className="ProfilePageCalendarIcon" src={calendar}></img>
            <a className="ProfilePageJoiningDate"> Joined: July 2011 </a>
          </div>
        </div>
        <div className="ProfilePageUserInfo">
          <h1 className="ProfilePageBio">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quas
            ipsa aliquam impedit laboriosam unde eius perferendis exercitationem
            repellendus incidunt? Odio recusandae harum at vel laborum in
            officiis delectus quae.
          </h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Student);
