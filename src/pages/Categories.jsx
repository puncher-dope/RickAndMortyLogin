import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context";

const Div = styled.div`
  margin: 100px 0;
  display: flex;
  align-items: flex-start;

  & ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    display: flex;
    gap: 10px;
  }

  & div {
    font-size: 28px;
    background-color: #313131;
    width: 400px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
  & div:hover {
    transform: scale(1.05);
    background-color: #4f4f4f;
    will-change: transform;
    cursor: pointer;
  }
`;

export const Categories = () => {
   const auth = useAuth()
    const navigate = useNavigate()

     const handleSignOut = () => {
        auth.signOut(() => {
            navigate('/')
        })
    }
  return (
    <Div>
      <ul>
        <Link to={"/categories/characters"}>
          <div>Characters</div>
        </Link>

        <Link to={"/categories/locations"}>
          <div>Locations</div>
        </Link>

        <Link to={"/categories/episodes"}>
          <div>Episodes</div>
        </Link>
        
          <div><button onClick={handleSignOut}>logOut</button></div>

      </ul>
    </Div>
  );
};
