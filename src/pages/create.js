// Public libraries
import React from "react";
// Material UI Libraries
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// Material UI Icons
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
// Private libraries
// Material UI Functions
const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
  },
  title: {
    textDecoration: "underline",
    marginTop: 20,
    marginBottom: 20,
  },
});
// Function Create - Sets elements that will be printed to create
function Create() {
  // Functions of render
  const changeText = () => {
    console.log("It works");
  };
  // Local Variables from Create
  const classes = useStyles();
  // Function HTML Render
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h4"
        color="primary"
        align="center"
      >
        REAL | Real State - Form Document delivery
      </Typography>
      <Typography className={classes.title} variant="body1" color="dark">
        Please fill out the form
      </Typography>
      <Button
        onClick={changeText}
        type="submit"
        variant="contained"
        color="secondary"
        startIcon={<CloudDownloadIcon />}
      >
        Download document
      </Button>
    </Container>
  );
}

export default Create;
