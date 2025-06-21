import { SignIn, SignUp } from "../components";
import { useState, useRef } from "react";
import { useAuth } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

 const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const location = useLocation();
  const formRef = useRef(null);
  const auth = useAuth();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const validatePassword = () => {
    if (register.password !== register.rePassword) {
      alert("Пароли не совпадают!");
      return false;
    }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");

    if (!username) {
      alert("Please enter your email");
      return;
    }

    auth.signIn(String(username), () => {
      navigate(from, { replace: true });
    });
  };

  const handleChange = ({ target }) => {
    setInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChangeRegister = ({ target }) => {
    setRegister((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      {isSignUp ? (
        <SignUp
          ref={formRef}
          onSubmit={onSubmit}
          onChange={handleChangeRegister}
          onClick={onClick}
        />
      ) : (
        <SignIn
          ref={formRef}
          iconId={"fa-at"}
          onSubmit={onSubmit}
          onChange={handleChange}
          onClick={onClick}
        />
      )}
    </>
  );
};


export default Login