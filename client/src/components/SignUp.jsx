import React, { useState } from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import { postNewProject } from "../lib/api";

const AddNewProject = (props) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState(null);
  const [projectLocation, setProjectLocation] = useState(null);
  const [formSubmit, setFormSubmit] = useState(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    prepareFormData();
  };
  const prepareFormData = () => {
    let dataToPost = {
      name: projectName,
      city: projectLocation,
      description: projectDescription,
    };
    console.log(dataToPost);
    let response = postNewProject(dataToPost).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="mt-5 container">
      <h1 className="mt-5"> Register MicroVolunteer Now!</h1>
      <form
        className="text-left mt-5"
        type="submit"
        onSubmit={(e) => {
          handleSubmitForm(e);
        }}
      >
        <div className="form-group">
          <label>Account Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(event) => {
              setProjectName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label> Select A Password </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(event) => {
              setProjectName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            className="form-control mb-3"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={(e) => {
              setProjectDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            id="project-location"
            onChange={(event) => {
              setProjectLocation(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Interests</label>
          <input
            type="text"
            className="form-control"
            id="project-location"
            onChange={(event) => {
              setProjectLocation(event.target.value);
            }}
          />
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <Button variant="contained" color="primary" type="submit">
            Submit your project
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProject;
