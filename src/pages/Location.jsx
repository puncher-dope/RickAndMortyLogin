import styled from "styled-components";
import { useSearchCharacters } from "../hooks";
import { formatDate } from "../utils";
import { LocationsCard } from "./components";

const Div = styled.div`
  /* width: 100%; */
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
`;
const Location = () => {
  const { error, data } = useSearchCharacters(
    '',
    1,
    "https://rickandmortyapi.com/api/location"
  );
  

  return (
    <>
      {error ? <h1>Error</h1> : null}
      <Div>
        {data?.map(({ id, name, type, dimension, created }) => {
          
            return (
              <LocationsCard
                key={id}
                name={name}
                type={type}
                dimension={dimension}
                created={formatDate(created)}
              />
            )
        })}
      </Div>
    </>
  );
};

export default Location;
