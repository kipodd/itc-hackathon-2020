import React, { useState } from "react";
import "../App.css";
import { SearchNewProject } from "../lib/api";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";

const SeacrhBar = () => {
  const [searchInput, setSearchInput] = useState(null);

  const storeInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const submitSearch = (e) => {
    console.log(searchInput);
    SearchNewProject(searchInput)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form>
        <div className="mt-5 d-flex justify-content-center">
          <h3>VoluntHere!</h3>
        </div>
        <div className="input-group mb-3 mt-1 d-flex justify-content-center ">
          <input
            type="text"
            className="search-focus "
            placeholder="Seacrh for projects"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => {
              storeInput(e);
            }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={(e) => {
              submitSearch(e);
            }}
          >
            Search for project
          </Button>
        </div>
      </form>
    </>
  );
};
export default SeacrhBar;
