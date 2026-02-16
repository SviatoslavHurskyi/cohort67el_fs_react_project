import Button from "../../components/Button/Button";

import { animal, getFoodStatus } from "./data";
import "./styles.css";

function Lesson_02() {
  console.log(animal.type);

  return (
    <div className="lesson_02_wrapper">
      <div className="animal_card">
        <p className="card_title">Animal Card: {animal.type}</p>
        <img className="avatar" src={animal.avatarURL} alt="Tiger Avatar" />
        <p className="card_info">Name: {animal.fullName}</p>
        <p className="card_info">Age: {animal.age}</p>
        <p className="card_info">Color: {animal.color}</p>
        <p className="card_info">
          Is Planteater? {getFoodStatus(animal.isPlanteater)}
        </p>
        {/* <p className="card_info">
          Is Planteater? {animal.isPlanteater ? "Yes" : "No"}
        </p> */}
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default Lesson_02;
