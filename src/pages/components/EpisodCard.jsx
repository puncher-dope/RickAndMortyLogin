import styled from "styled-components";

const EpisodeCardContainer = ({
  className,
  name,
  air_date,
  episode,
  created,
}) => {
  return (
    <div className={className}>
      <h2>{name}</h2>
      <p>Air Date: {air_date}</p>
      <p>episode: {episode}</p>
      <p>Created at: {created}</p>
    </div>
  );
};

export const EpisodeCard = styled(EpisodeCardContainer)`
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
