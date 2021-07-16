// Public libraries
import React from "react";
// Material UI Libraries
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// Private libraries

// Function Create - Sets elements that will be printed to create
function Create() {
  // Functions of render
  const changeText = () => {
    console.log("It works");
  };
  // Function HTML Render
  return (
    <Container>
      <Typography variant="h4" color="primary" align="center">
        REAL | Real State - Form Document delivery
      </Typography>
      <Typography variant="body1" color="dark">
        Please fill out the form
      </Typography>
      <Button
        onClick={changeText}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Download document
      </Button>
    </Container>
  );
}

export default Create;
