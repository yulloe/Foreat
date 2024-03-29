import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 32vh;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  algin-items: center;
  padding: 0.5rem;
  .Warning {
    color: red;
  }
  .Line {
    border: 0;
    width: 5vw;
    height: 0.05rem;
    background: black;
    margin: auto;
  }
  .WarningLine {
    border: 0;
    width: 5vw;
    height: 0.05rem;
    background: red;
    margin: auto;
  }
  .Title {
    font-size: 2vh;
    margin: auto;
  }
  .TitleSmall {
    font-size: 1.5vh;
    margin: auto;
  }
  .Content {
    font-weight: 500;
    margin: auto;
  }
`  

const NutritionCard = ( props ) => {
  const title = props.title;
  const grams = props.grams;
  const ratio = props.ratio;
  return (
      <Container {...props} style={(ratio > 100) ? { backgroundColor:"#ff000017", borderColor:"red" } : {}}>
        <div className={((ratio > 100) ? ("Warning" + " " + "Title"): "Title")}>{title}</div>
        <div className={((ratio > 100) ? ("Warning" + " " + "Content") : "Content" )}>{grams}Kcal</div>
        <div className={((ratio > 100) ? "WarningLine" : "Line" )} />
        <div className={( (ratio > 100) ? ("Warning" + " " + "Content") : "Content" )}>{ratio}%</div>
      </Container>
  );
};

export default NutritionCard;