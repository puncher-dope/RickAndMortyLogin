import styled from "styled-components";
import { useSearchCharacters } from "../hooks";
import { EpisodeCard } from "./components";
import { formatDate } from "../utils";

  const Div = styled.div`
    /* width: 100%; */
    margin-top: 120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
    gap: 10px;
  `;
 const Episode = () => {
  const { error, data } = useSearchCharacters(
    '',
    1,
    "https://rickandmortyapi.com/api/location"
  );

  return (
    <>
      {error ? <h1>Error</h1> : null}
      <Div>
        {
          data?.map(({ id, name, air_date, episode, created }) => (
            <EpisodeCard
              key={id}
              name={name}
              air_date={air_date}
              episode={episode}
              created={formatDate(created)}
            />
          ))}
      </Div>
    </>
  );
};


export default Episode