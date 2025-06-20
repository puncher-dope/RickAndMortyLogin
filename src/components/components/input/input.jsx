import styled from "styled-components";
import { Div } from "../div/Div";

const InputContainer = ({ className, iconId, type, name, placeholder, value }) => {
  return (
    <div className={className}>
      <Div className="input-container">
        <i className={`fa ${iconId}`}></i>
        <input type={type} name={name} placeholder={placeholder} value={value}/>
      </Div>
    </div>
  );
};

export const Input = styled(InputContainer)`
  & input {
    border: none;
    border-radius: 5px;
    background-color: #373737;
    width: 92%;
    ${({margin}) => margin}
  }
  & input::placeholder {
    color: #fff;
    font-size: 18px;
  }
  & input:focus {
    outline: none;
  }

`;
