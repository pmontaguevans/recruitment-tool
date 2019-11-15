import React, { useState } from "react";
import { MdAssignment } from "react-icons/md";

const AssignmentForm = ({ addDepartment }) => {
  const [title, setTitle] = useState("");

  const handleAssignment = e => {
    e.preventDefault();
    addDepartment(title);
    setTitle("");
  };

  return (
    <form className="assignmentForm" onSubmit={handleAssignment}>
      <button type="submit">
        <span>
          <MdAssignment />
        </span>
        <span>New assignment</span>
      </button>
      {/* <input
        type="text"
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      /> */}
    </form>
  );
};

export default AssignmentForm;
