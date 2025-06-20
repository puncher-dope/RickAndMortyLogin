import styled from "styled-components";

const CharacterCardContainer = ({
    className,
  name,
  status,
  species,
  gender,
  image,
  created,
}) => {
  return (
    <div className={className}>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>Status: {status}</p>
      <p>species: {species}</p>
      <p>gender: {gender}</p>
      <p>Created at: {created}</p>
    </div>
  );
};

export const CharacterCard = styled(CharacterCardContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  background-color: #000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
     will-change: transform;
  }
  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  & p {
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }
`;
