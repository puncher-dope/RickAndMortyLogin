import styled from "styled-components";
import { useFetch } from "../hooks";
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
export const Episode = () => {
  const { data, error } = useFetch("http://localhost:3000/episode");

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
