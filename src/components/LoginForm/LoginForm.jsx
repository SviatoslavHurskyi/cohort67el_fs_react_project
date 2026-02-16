import Button from "../Button/Button";
import Input from "../Input/Input";

import "./styles.css";

function LoginForm() {
  // const CLICK_ME_BUTTON = document.querySelector("#clickme_button");

  // const login = () => {
  //   console.log("login");
  // };

  // CLICK_ME_BUTTON.addEventListener("click", login);

  // C передачей аргументов
  // const login = (message) => {
  //   console.log("Button login works!!!");
  //   alert(message);
  // };

  // Без передачи аргументов
  const login = (event) => {
    event.preventDefault();
    console.log("Button login works!!!");
  };

  return (
    <form onSubmit={login} className="login-form-container">
      <p className="title">Login form</p>
      <div className="inputs-container">
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button name="Login" type="submit" />
      {/* Без передачи аргументов функции login */}
      {/* <button onClick={login} type="button">
        Login
      </button> */}
      {/* C передачей аргументов функции login */}
      {/* <button onClick={() => login("Hello from argument of fuction login")} type="button">
        Login
      </button> */}
    </form>
  );
}

export default LoginForm;
