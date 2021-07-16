// Public libraries
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Material UI Libraries
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// Material UI Icons
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
// Private libraries
// Material UI Functions
const useStyles = makeStyles({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
});
// Function Create - Sets elements that will be printed to create
function Create() {
  // State variables
  const [notes, setNotes] = useState([]);
  const [property, setProperty] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  // Local Variables from Create
  const classes = useStyles();
  const history = useHistory();
  // Use Effect element from notes
  useEffect(() => {
    fetch("http://localhost:8000/subject")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  // Functions of render
  const changeText = () => {
    console.log("It works");
  };
  // Store city
  const storeProperty = (e) => {
    setProperty(e.target.value);
  };
  // Store state
  const storeCity = (e) => {
    setCity(e.target.value);
  };
  // Store zipCode
  const storeState = (e) => {
    setState(e.target.value);
  };
  // Store property
  const storeZipCode = (e) => {
    setZipCode(e.target.value);
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (property && city && state && zipCode) {
      console.log(property, city, state, zipCode);
      fetch("http://localhost:8000/subject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ property, city, state, zipCode }),
      }).then(() => history.push("/"));
    }
  };

  // Function HTML Render
  return (
    <Container>
      {/* Title Form */}
      <Typography
        className={classes.title}
        variant="h4"
        color="primary"
        align="center"
      >
        REAL | Real State - Form Document delivery
      </Typography>
      {/* Paragraph form */}
      <Typography className={classes.title} variant="body1" color="textPrimary">
        Please fill out the form
      </Typography>
      {/* Form paragraph */}
      <form
        onSubmit={handleSubmit}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <Grid container>
          {/* First section */}
          <Grid className={classes.container} item xs={12} sm={12} md={12}>
            <TextField
              onChange={storeProperty}
              label="Property Adress"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              onChange={storeCity}
              label="City"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              onChange={storeState}
              label="State"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              onChange={storeZipCode}
              label="ZIP Code"
              variant="outlined"
              color="secondary"
              required
            />
          </Grid>
          {/* Second section */}
          <Grid className={classes.container} item xs={12} sm={12} md={12}>
            <TextField
              label="Borrower"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              label="Owner of Public Record"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              label="County"
              variant="outlined"
              color="secondary"
              required
            />
          </Grid>
          <Grid className={classes.container} item xs={12} sm={12} md={12}>
            <TextField
              label="Legal Description"
              variant="outlined"
              color="secondary"
              required
            />
          </Grid>
          {/* Third section */}
          <Grid className={classes.container} item xs={12} sm={12} md={12}>
            <TextField
              label="Assesor's Parcel #"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              label="Tax Year"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              label="R.E Taxes $"
              variant="outlined"
              color="secondary"
              required
            />
          </Grid>
          {/* Fourth section */}
          <Grid className={classes.container} item xs={12} sm={12} md={12}>
            <TextField
              label="Neighborhood Name"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              label="Map Reference"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              label="Census Track"
              variant="outlined"
              color="secondary"
              required
            />
          </Grid>
        </Grid>
        {/* Button submit form to print document */}
        <Button
          onClick={changeText}
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<CloudDownloadIcon />}
        >
          Download document
        </Button>
      </form>
      {/* Display data from other databases */}
    </Container>
  );
}

export default Create;
