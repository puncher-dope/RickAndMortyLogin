import styled from "styled-components";
import { Input } from "../components";

const SignInContainer = ({ className, onSubmit, onChange, ref, onClick }) => {
  return (
    <>
      <div className={className}>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          ref={ref}
          onChange={(e) => {
            onChange(e);
          }}
        >
          <Input type={"text"} name={"name"} placeholder={"Name"} />

          <Input type={"text"} name={"nickname"} placeholder={"Nickname"} />
          <Input type={"email"} name={"email"} placeholder={"Email"} />
          <span>Gender</span>
          <div className="gender">
            <h3>male</h3>
            <h3>female</h3>
            <Input type={"radio"} name={"gender"} value={"male"} />
            <Input type={"radio"} name={"gender"} value={"female"} />
          </div>

          <Input
            type={"password"}
            name={"password"}
            placeholder={"Your password"}
          />
          <Input
            type={"rePassword"}
            name={"rePassword"}
            placeholder={"Repeat password"}
          />
          <button type="submit">Sign Up</button>
          <button
            type="button"
            onClick={() => {
              onClick();
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export const SignUp = styled(SignInContainer)`
  border: 1px solid black;
  padding: 20px;
  width: 400px;
  border-radius: 5px;

  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & .gender {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
