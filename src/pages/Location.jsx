import styled from "styled-components";
import { useFetch } from "../hooks";
import { formatDate } from "../utils";
import { LocationsCard } from "./components";

const Div = styled.div`
  /* width: 100%; */
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
`;
export const Location = () => {
  const { data, error } = useFetch("http://localhost:3000/location");

  return (
    <>
      {error ? <h1>Error</h1> : null}
      <Div>
        {data?.map(({ id, name, type, dimension, created }) => (
          <LocationsCard
            key={id}
            name={name}
            type={type}
            dimension={dimension}
            created={formatDate(created)}
          />
        ))}
      </Div>
    </>
  );
};
