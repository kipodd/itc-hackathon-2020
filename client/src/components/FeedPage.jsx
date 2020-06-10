import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import volunteer from './volunteer.jpg';

class FeedPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      toggleRender: false,
      searchData: [],
    };
  }

  componentDidMount = () => {
    this.getstudents();
    console.log(this.props.searchResult);
    const toggle = this.props.toggle;
    const searchResult = this.props.searchData;
    this.setState({ toggleRender: toggle, searchData: searchResult });
  };

  getstudents = () => {
    axios.get('http://localhost:5000/projects').then((response) => {
      this.setState({
        data: Object.values(response.data),
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.toggleRender && (
          <div className='list_students'>
            {this.state.data.map((user) => {
              return (
                <div className='card student mb-4' style={{ width: '69rem' }}>
                  <div className='card-body row'>
                    <div className='col-9'>
                      <p className='card-text'>
                        {' '}
                        Name Of The Project: {user.name}
                      </p>
                      <p> Location: {user.city} </p>
                      <p>
                        Projects starts at:{' '}
                        {new Date(user.start_time.$date).toString()}
                      </p>
                      <p>
                        Projects ends at:{' '}
                        {new Date(user.end_time.$date).toString()}
                      </p>
                    </div>
                    <div className='col-3'>
                      <img className='FeedPageImage' src={volunteer}></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* {this.state.toggleRender && (
          <div className='list_students'>
            {this.state.searchData.map((user) => {
              return (
                <div className='card student mb-4' style={{ width: '69rem' }}>
                  <div className='card-body row'>
                    <div className='col-9'>
                      <p className='card-text'>
                        {' '}
                        Name Of The Project: {user.name}
                      </p>
                      <p> Location: {user.city} </p>
                      <p>
                        Projects starts at:{' '}
                        {new Date(user.start_time.$date).toString()}
                      </p>
                      <p>
                        Projects ends at:{' '}
                        {new Date(user.end_time.$date).toString()}
                      </p>
                    </div>
                    <div className='col-3'>
                      <img className='FeedPageImage' src={volunteer}></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )} */}
      </div>
    );
  }
}

export default withRouter(FeedPage);
