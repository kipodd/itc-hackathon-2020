import React from 'react';
// import axios, * as others from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import calendar from './calendar.png';
import location from './location.png';
import Greta from './Greta.jpg';

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
      <div className='ProfilePageDetails container'>
        <div>
          <h3 className='ProfilePageName'> Greta Feldman </h3>
          <img className='ProfilePageImage' src={Greta}></img>
          <div className='ProfilePageCalendar'>
            <img className='ProfilePageCalendarIcon' src={calendar}></img>
            <a className='ProfilePageJoiningDate'> Joined: June 2020 </a>
          </div>
          <div className='ProfilePageLocation'>
            <img className='ProfilePageLocationIcon' src={location}></img>
            <a className='ProfilePagelocationDate'> Location: Tel Aviv </a>
          </div>
        </div>
        <div className='ProfilePageUserInfo'>
          <div className='ProfilePageBio container mb-5'>
            I am 17 years old world-renowned Swedish environmental activist. In
            the post corona world, people realized the importance of community
            engagement more than ever! I love this app because this allows me to
            volunteer easily anytime I want!
          </div>
          <div className='ProfilePageInterestHeadline'>Interests</div>
          <div className='ProfilePageCards'>
            <div class='card ProfilePageInterests' style={{ width: '18rem' }}>
              <div class='card-body ProfilePageInterests'>
                <p class='card-text'>Teaching Sweedish</p>
              </div>
            </div>
            <div class='card ProfilePageInterests' style={{ width: '18rem' }}>
              <div class='card-body ProfilePageInterests'>
                <p class='card-text'>Collecting Garbage When I run</p>
              </div>
            </div>
            <div class='card ProfilePageInterests' style={{ width: '18rem' }}>
              <div class='card-body ProfilePageInterests'>
                <p class='card-text'> Help Old Women With Groceries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Student);
