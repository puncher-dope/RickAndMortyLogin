import styled from "styled-components";
import { useFetch } from "../hooks";
import { CharacterCard } from "./components";
import { formatDate } from "../utils";

  const Div = styled.div`
    /* width: 100%; */
    margin-top: 120px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-around;
    gap: 10px;
  `;
export const Characters = () => {
  const { data, error } = useFetch("http://localhost:3000/characters");

  return (
    <>
      {error ? <h1>Error</h1> : null}
      <Div>
        {
          data?.map(({ id, name, status, species, gender, image, created }) => (
            <CharacterCard
              key={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              created={formatDate(created)}
            />
          ))}
      </Div>
    </>
  );
};
