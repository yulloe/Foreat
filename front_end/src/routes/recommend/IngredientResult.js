import React from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';


import IngredientResultCard from "components/recommend/Ingredient/IngredientResultCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IngredientResult = () => {
  const location = useLocation();

  console.log(location.state)
  return (
    <Container>
        <IngredientResultCard />
        <IngredientResultCard />
    </Container>
  )
}

export default IngredientResult;