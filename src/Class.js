import { useState, useEffect } from "react";
import { CLASS_LIST } from "./consts.js";

const ClassList = (props) => {
  const [list, setList] = useState(CLASS_LIST);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    for (let className in list) {
      let satisfied = true;
      for (let attribute in list[className]) {
        if (props.attributes[attribute] != undefined) {
          if (
            props.attributes[attribute].strenght < list[className][attribute]
          ) {
            satisfied = false;
          }
        }
      }
      setList((prevList) => {
        return {
          ...prevList,
          [className]: {
            ...prevList[className],
            satisfied: satisfied,
          },
        };
      });
    }
  }, [props.attributes]);

  return (
    <div>
      <h2>Class List</h2>
      <div>
        {Object.keys(list).map((className) => {
          return (
            <div
              key={className}
              style={{ padding: "10px" }}
              onClick={() => {
                setSelectedClass(className);
              }}
            >
              <div style={list[className].satisfied ? { color: "red" } : {}}>
                {" "}
                {className}{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {selectedClass && (
          <div>
            <h3>{selectedClass}</h3>
            {Object.keys(list[selectedClass]).map((attribute) => {
              return (
                <span key={attribute}>
                  {attribute}: {list[selectedClass][attribute]}
                  <br />
                </span>
              );
            })}
            <button
              onClick={() => {
                setSelectedClass(null);
              }}
            >
              Close Class
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassList;
