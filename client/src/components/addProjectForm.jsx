import React, { useState, useEffect } from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import { postNewProject } from "../lib/api";
import { Switch, Route, Redirect } from "react-router-dom";

const AddNewProject = (props) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState(null);
  const [projectLocation, setProjectLocation] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [formSubmit, setFormSubmit] = useState(null);
  const [redirectOnSubmit, setRedirectOnSubmit] = useState(false);
  const [renderForm, setRenderForm] = useState(true);
  const [renderSubmitSuccess, setRenderSubmitSuccess] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setRenderForm(false);
    setRenderSubmitSuccess(true);
    prepareFormData();
    setTimeout(() => setRedirectOnSubmit(true), 2000);
  };

  const prepareFormData = () => {
    let dataToPost = {
      name: projectName,
      city: projectLocation,
      description: projectDescription,
      start_time: startTime,
      end_time: endTime,
    };
    console.log(dataToPost);
    let response = postNewProject(dataToPost).then((data) => {
      console.log(data);
    });
  };

  return (
    <>
      {renderSubmitSuccess && (
        <div className="alert alert-success mt-5" role="alert">
          Your Project has been successfully submitted!
        </div>
      )}
      {renderForm && (
        <div className="mt-5 container">
          <h1 className="mt-5"> Register your project</h1>
          <form
            className="text-left mt-5"
            type="submit"
            onSubmit={(e) => {
              handleSubmitForm(e);
            }}
          >
            <div className="form-group">
              <label>Project Name</label>
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
              <label>Description</label>
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <DateTimePicker
                  margin="normal"
                  required
                  disablePast
                  placeholder="choose start date"
                  id="date-picker-dialog-start"
                  label="Start Time"
                  value={startTime}
                  onChange={(date) => setStartTime(date)}
                  KeyboardButtonProps={{
                    "aria-label": "change start date",
                  }}
                />
                <DateTimePicker
                  margin="normal"
                  required
                  label="End Time"
                  placeholder="choose end date"
                  id="time-picker-end"
                  label="End Time"
                  value={endTime}
                  minDate={startTime}
                  onChange={(time) => {
                    setEndTime(time);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change start time",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <div className="mt-5 d-flex justify-content-center">
              <Button variant="contained" color="primary" type="submit">
                Submit your project
              </Button>
            </div>
          </form>
        </div>
      )}
      {redirectOnSubmit && <Redirect to="/" />}
    </>
  );
};

export default AddNewProject;
