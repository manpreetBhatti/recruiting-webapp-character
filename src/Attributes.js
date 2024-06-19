import { useState, useEffect } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";

const Attributes = (props) => {
  const attributes = props.attributes;
  const setAttributes = props.setAttributes;
  const [totalAttributePoints, setTotalAttributePoints] = useState(0);

  useEffect(() => {
    if (hasOwnProperty.call(attributes, "Strength")) {
      setTotalAttributePoints(
        Object.keys(attributes).reduce((acc, attribute) => {
          return acc + attributes[attribute].strenght;
        }, 0)
      );
    }
  }, [attributes]);

  useEffect(() => {
    if (totalAttributePoints >= 70) {
      alert("You have reached the maximum atrributes points");
    }
  }, [totalAttributePoints]);

  const incrementStrength = (strenght, attribute) => {
    setAttributes((prevAttributes) => {
      return {
        ...prevAttributes,
        [attribute]: {
          modifier: caluclateModifier(
            strenght + 1,
            prevAttributes[attribute].modifier
          ),
          strenght: strenght + 1,
        },
      };
    });
  };

  const decereaseStrength = (strenght, attribute) => {
    setAttributes((prevAttributes) => {
      return {
        ...prevAttributes,
        [attribute]: {
          modifier: caluclateModifier(
            strenght - 1,
            prevAttributes[attribute].modifier
          ),
          strenght: strenght - 1,
        },
      };
    });
  };

  const caluclateModifier = (strenght, modifier) => {
    return Math.floor((strenght - 10) / 2);
  };

  return (
    <div>
      <h2>Attributes</h2>
      <ul>
        {Object.keys(attributes).map((attribute) => {
          return (
            <div key={attribute} style={{ padding: "10px" }}>
              {attribute}:{attributes[attribute].strenght}
              <br />
              modifier:{attributes[attribute].modifier}
              <div>
                <button
                  onClick={() => {
                    incrementStrength(
                      attributes[attribute].strenght,
                      attribute
                    );
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    decereaseStrength(
                      attributes[attribute].strenght,
                      attribute
                    );
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Attributes;
