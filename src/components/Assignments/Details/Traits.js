import React, { useState } from "react";
import Checkboxes from "./Checkboxes";

const PersonalityTraits = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const checkboxes = [
    {
      name: "Stress Resistance",
      key: "checkBox1",
      label: "Stress Resistance"
    },
    {
      name: "Service Orientation",
      key: "checkBox2",
      label: "Service Orientation"
    },
    {
      name: "Systematic Approach",
      key: "checkBox3",
      label: "Systematic Approach"
    },
    {
      name: "Problem Solving",
      key: "checkBox4",
      label: "Problem Solving"
    },
    {
      name: "Autonomy",
      key: "checkBox5",
      label: "Autonomy"
    },
    {
      name: "Cooperation",
      key: "checkBox6",
      label: "Cooperation"
    }
  ];
  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
  };

  return (
    <div className="about__container">
      <div className="about">
        <div>
          <h5 className="about__focus--title">Assignment focus</h5>
        </div>
        <div>
          <span>About personality traits</span>
        </div>
      </div>
      <hr />

      <div className="about__focus-container">
        <div className="item__container">
          {/* <form onSubmit={this.handleFormSubmit}>
            {createCheckboxes()}

            <button className="btn btn-default" type="submit">
              Save
            </button>
          </form> */}
          <form className="checkbox__form" onSubmit={handleFormSubmit}>
            {checkboxes.map(item => (
              <div key={item.key}>
                <label>
                  <div className="checkbox__container">
                    <div>
                      <Checkboxes
                        name={item.name}
                        checked={checkedItems[item.name]}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <span>{item.name}</span>
                    </div>
                  </div>
                </label>
              </div>
            ))}
            <div>
              <button className="checkbox__form--btn" type="submit">Change focus</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTraits;
