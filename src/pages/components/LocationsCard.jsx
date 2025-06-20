import styled from "styled-components";

const LocationsCardContainer = ({
  className,
  name,
  type,
  dimension,
  created,
}) => {
  return (
    <div className={className}>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Created at: {created}</p>
    </div>
  );
};



export const LocationsCard = styled(LocationsCardContainer)`
  width: 500px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  background-color: #363636;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: #4f4f4f;
     will-change: transform;
  }
`;
