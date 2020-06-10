import React, { useState, useEffect } from 'react';
import '../App.css';
import { SearchNewProject } from '../lib/api';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import FeedPage from './FeedPage';

const SeacrhBar = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [SearchData, setSearchData] = useState();
  const [toggle, setToggle] = useState(true);

  const storeInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    setToggle(false);
  }, [SearchData]);

  const submitSearch = (e) => {
    console.log(searchInput);
    SearchNewProject(searchInput)
      .then((response) => {
        console.log(response.data);
        setSearchData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form>
        <div className='mt-5 d-flex justify-content-center'>
          <h3>VoluntHere!</h3>
        </div>
        <div className='input-group mb-3 mt-1 d-flex justify-content-center '>
          <input
            type='text'
            className='search-focus '
            placeholder='Seacrh for projects'
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
            onChange={(e) => {
              storeInput(e);
            }}
          />
        </div>
        <div className='d-flex justify-content-center mb-5'>
          <Button
            variant='contained'
            color='primary'
            type='button'
            onClick={(e) => {
              submitSearch(e);
            }}
          >
            Search for project
          </Button>
        </div>
      </form>
      <FeedPage searchData={SearchData} toggle={toggle}></FeedPage>
    </>
  );
};
export default SeacrhBar;
