import { useEffect, useState } from "react";
import { SKILL_LIST } from "./consts.js";

const Skills = (props) => {
  const skills = props.skills;
  const setSkills = props.setSkills;

  const maxPoints = 10 + 4 * props.attributes["Intelligence"].modifier;

  const [points, setPoints] = useState(0);

  useEffect(() => {
    setSkills((prevSkills) => {
      return prevSkills.map((skill) => {
        return {
          ...skill,
          total: props.attributes[skill.attributeModifier].modifier,
          points: 0,
        };
      });
    });
  }, [props.attributes]);

  useEffect(() => {
    setPoints(
      skills.reduce((acc, skill) => {
        return acc + skill.points;
      }, 0)
    );
  }, [skills]);

  useEffect(() => {
    if (points >= maxPoints) {
      alert("You have reached the maximum points");
    }
  }, [points]);

  const incrementSkill = (skill) => {
    setSkills((prevSkills) => {
      return prevSkills.map((prevSkill) => {
        if (prevSkill.name === skill.name) {
          return {
            ...prevSkill,
            points: prevSkill.points + 1,
            total: prevSkill.total + 1,
          };
        }
        return prevSkill;
      });
    });
  };

  const decrementSkill = (skill) => {
    setSkills((prevSkills) => {
      return prevSkills.map((prevSkill) => {
        if (prevSkill.name === skill.name) {
          return {
            ...prevSkill,
            points: prevSkill.points - 1,
            total: prevSkill.total - 1,
          };
        }
        return prevSkill;
      });
    });
  };

  return (
    <div>
      <h2>Skills</h2>
      Max Points: {maxPoints}
      <div>
        {skills.map((skill) => {
          return (
            <div key={skill.name} style={{ padding: "10px" }}>
              {skill.name}: {skill.points}
              <div>
                <button
                  onClick={() => {
                    incrementSkill(skill);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    decrementSkill(skill);
                  }}
                >
                  -
                </button>
              </div>
              <hr />
              total: {skill.total}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
