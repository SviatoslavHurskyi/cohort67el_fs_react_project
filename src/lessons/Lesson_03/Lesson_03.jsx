import SimpsonsCard from "../../components/SimpsonsCard/SimpsonsCard";
import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No Job",
    hobby: "coocking",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skate",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  return (
    <div className="homework03_page_wrapper">
      <SimpsonsCard
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
        avatar={homerSimpson.avatarURL}       
      />
      <SimpsonsCard
       firstName={margeSimpson.firstName}
        lastName={margeSimpson.lastName}
        job={margeSimpson.job}
        hobby={margeSimpson.hobby}
        avatar={margeSimpson.avatarURL}      
      />
      <SimpsonsCard 
       firstName={bartSimpson.firstName}
        lastName={bartSimpson.lastName}
        job={bartSimpson.job}
        hobby={bartSimpson.hobby}
        avatar={bartSimpson.avatarURL}      
      />

    <div className="button_control">
      <Button name="Log in" />
    </div>
     <div className="button_control">
      <Button name="Sign in" />
    </div>
     <div className="button_control">
      <Button />
    </div>
    </div>
  );
}

export default Lesson_03;
