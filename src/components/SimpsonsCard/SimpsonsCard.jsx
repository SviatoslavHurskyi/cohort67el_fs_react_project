import "./styles.css";

// props - это возможность передавать данные из родительского компонента в дочерний
// props является обьектом
// Синтакси без деструктуризации
// function SimpsonsCard(props) {
//   console.log(props)
// Синтаксис с деструктуризацией
function SimpsonsCard({ avatar, firstName, lastName, job, hobby }) {
  // Данные храняться в самом компоненте, это старый подход
  // const homerSimpson = {
  //   firstName: "Homer",
  //   lastName: "Simpson",
  //   job: "Nuclear Security Specialist",
  //   hobby: "Bear, TV, FastFood",
  //   avatarURL:
  //     "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  // };

  // const { firstName, lastName, job, hobby, avatarURL } = homerSimpson;

  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="User Avatar" />
      <div className="card_info">
        <span className="info_title">Fullname: </span>
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <div className="card_info">
        <span className="info_title"> Job: </span>
        <p>{job}</p>
      </div>
      <div className="card_info">
        <span className="info_title">Hobby: </span>
        <p>{hobby}</p>
      </div>
    </div>
  );
}

export default SimpsonsCard;
