// Public libraries
import React, { useState } from "react";
// Private libraries
import SidebarDrawer from "../components/SidebarDrawer";
// Material UI imports
import Container from "@material-ui/core/Container";
// Private libraries
function Form() {
  // Data from the form to be sent to the word document
  const [subject, setSubject] = React.useState({
    propAddress: "",
    city: "",
    state: "",
    zipCode: "",
    /* borrower: "",
    ownrPublRecord: "",
    county: "",
    legDescription: "",
    assesParcel: "",
    txYear: 0,
    reTaxes: 0,
    neibhdName: "",
    mapRefrce: "",
    censusTrack: "", */
  });

  // subject - Handle elements while writing
  const handleChange = (prop) => (event) => {
    setSubject({ ...subject, [prop]: event.target.value });
  };
  // HTML return
  return (
    <div>
      This is form page
      <h1>Hello</h1>
    </div>
  );
}
// Export element
export default Form;
