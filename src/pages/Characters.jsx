import styled from "styled-components";
import { CharacterCard } from "./components";
import { formatDate } from "../utils";
import { useSearchCharacters } from "../hooks";
import { BASE_URL } from "../constants/Constants";

const Div = styled.div`
  /* width: 100%; */
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-around;
  gap: 10px;
`;
const Characters = () => {

  const {  error, data } = useSearchCharacters('', 1, BASE_URL.CHARACTERS);



  return (
    <>
      {error ? <h1>Error</h1> : null}
      <Div>
        {data?.map(({ id, name, status, species, gender, image, created }) => (
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

export default Characters;
