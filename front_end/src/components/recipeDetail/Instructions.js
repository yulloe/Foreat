import styled from "styled-components";

const TextContainer = styled.div`
  text-align: ${(props) => (props.ta ? props.ta : "left")};
  width: 60%;
  margin: 0 5rem;
  .title {
    font-size: 2.25rem;
    font-weight: 600;
    margin: 0 0 7rem 0;
  }
  .content_bold {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem 0;
  }
  .content_light {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 1rem 0;
    list-style: auto;
  }
`

const Instructions = ({instructions}) => {
  return (
    <TextContainer>
        <div className="title">INSTRUCTIONS</div>
        <ul>
          { instructions && instructions.map((instruction) => (<li className="content_light">{instruction}</li>))}
        </ul>
      </TextContainer>
    )
}

export default Instructions;