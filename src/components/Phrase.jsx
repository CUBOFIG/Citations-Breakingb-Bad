import React from "react";
import styled from "@emotion/styled";

const ContainerPhrases = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  font-size: 0.8rem;
  margin-top: 2rem;

  @media (min-width: 992px) {
    margin-top: 5rem;
  }

  h4 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }

    @media (min-width: 992px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #666;
    margin-top: 2rem;
    font-size: 0.8rem;

    @media (min-width: 992px) {
      font-size: 1rem;
    }
  }
`;

const Phrase = ({ phrases }) => {
  if (Object.keys(phrases).length === 0) return null;
  return (
    <ContainerPhrases className="card bg-light w-100 shadow-lgrounded">
      <h4>{phrases.quote}</h4>
      <p className="ml-auto">- {phrases.author}</p>
    </ContainerPhrases>
  );
};

export default Phrase;
