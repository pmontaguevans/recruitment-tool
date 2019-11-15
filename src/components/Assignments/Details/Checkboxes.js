import React from "react";

const Checkboxes = ({ type = "checkbox", name, checked = false, onChange }) => {
  console.log("Checkbox: ", name, checked);

  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export default Checkboxes;
