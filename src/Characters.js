import { useState, useEffect } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import Attributes from "./Attributes.js";
import ClassList from "./Class.js";
import Skills from "./Skills.js";
import axios from "axios";

const Characters = (props) => {
  const [attributes, setAttributes] = useState({});
  const [skills, setSkills] = useState(SKILL_LIST);

  const [charList, setCharList] = useState([]);

  useEffect(() => {
    ATTRIBUTE_LIST.forEach((attribute) => {
      setAttributes((prevAttributes) => {
        return {
          ...prevAttributes,
          [attribute]: { modifier: 0, strenght: 10 },
        };
      });
    });
  }, []);

  const saveData = () => {
    axios
      .post(
        `/api/{manpreetBhatti}/character1`,
        {
          name: "character1",
          attributes: attributes,
          skills: skills,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  const getData = () => {
    axios.get(`/api/{manpreetBhatti}/character1`).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h2>{props.name}</h2>
      {hasOwnProperty.call(attributes, "Strength") ? (
        <div style={{ display: "flex" }}>
          <Attributes attributes={attributes} setAttributes={setAttributes} />
          <ClassList attributes={attributes} />
          <Skills
            attributes={attributes}
            skills={skills}
            setSkills={setSkills}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Characters;
