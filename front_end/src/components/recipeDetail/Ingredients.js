import styled from "styled-components";

const TextContainer = styled.div`
  text-align: ${(props) => (props.ta ? props.ta : "left")};
  width: 40%;
  margin: 0 3rem 0 6rem;
  .title {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 5rem 0;
  }
  .content_bold {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin: 1rem 0;
  }
`

const Ingredients = ({ ingredients }) => {
  return (
    <TextContainer ta="right">
      <div className="title">INGREDIENTS</div>
      <ul>
        {ingredients && ingredients.map((ingredient, idx) => (<li className="content_bold" key={idx}>{ingredient}</li>))}
      </ul>
    </TextContainer>
  )
}

export default Ingredients;