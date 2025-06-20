import styled from "styled-components";
import { Input } from "../components";

const SignInContainer = ({
  className,
  iconId,
  onSubmit,
  onChange,
  ref,
  onClick,
}) => {
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
          <Input
            iconId={iconId}
            type={"email"}
            name={"username"}
            placeholder={"Your email"}
            margin="margin: 0 0 0 10px"
          />

          <Input
            type={"password"}
            name={"password"}
            placeholder={"Your password"}
          />
          <button type="submit">Sign In</button>
          <button
            type="submit"
            onClick={() => {
              onClick();
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export const SignIn = styled(SignInContainer)`
  border: 1px solid black;
  padding: 20px;
  width: 400px;
  border-radius: 5px;
  font-size: 18px;

  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
