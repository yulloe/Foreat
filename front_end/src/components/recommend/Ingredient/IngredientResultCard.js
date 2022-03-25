import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ImgWrapper = styled.div`
  overflow: hidden;
  width: 30rem;
  padding: 2rem;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 17rem;
  object-fit: cover;
`

const TextContainer = styled.div`
  padding: 2rem 2rem;
  width: 30rem;
  height: 15rem;
  .calorie {
    margin: 1.5rem 0 0 0;
    font-size: 1.5rem;
    color: #949191;
  }
  .title {
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem 0 1.5rem 0;
    overflow: hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .ingredient {
    display: inline-flex;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0 1rem 0.5rem 0;
  }
`

const IngredientResultCard = ({recipeSeq, recipeImage, recipeName, recipeCalorie, recipeIngredients}) => {

  return (
    <Link to={`/recipes/${recipeSeq}`} style={{color: 'black', textDecoration : "none"}}>
      <Container>
        <ImgWrapper>
          <Img src={recipeImage} />
        </ImgWrapper>
        <TextContainer>
          <div className='calorie'>{recipeCalorie}Kcal</div>
            <div className='title'>{recipeName}</div>
            <ul>{recipeIngredients.map((ingredient, index) =>
              <div className='ingredient' key={index}>{ingredient.ingredient_name}, </div>)}
            </ul>
        </TextContainer>
      </Container>
    </Link>
  );
};


IngredientResultCard.propTypes = {
  recipeSeq: PropTypes.number.isRequired,
  recipeImage: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeCalorie: PropTypes.number.isRequired,
  recipeIngredients: PropTypes.array.isRequired,
};


export default IngredientResultCard;