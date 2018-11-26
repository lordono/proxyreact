// common/kawaii/SpeechMsg.js
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { SpeechBubble } from 'react-kawaii';

const StyledDiv = styled.div`
  display: inline-flex;
  padding: 40px 0 20px;
`;
const KawaiiContainer = styled.div`
  padding-right: 24px;
`;
const TextContainer = styled.div`
  text-align: left;
`;
const StyledH1 = styled.h1`
  font-size: ${props => props.theme.size/10}rem;
  color: #545454;
  font-weight: normal;
  margin-bottom: 0;
  padding-top: 6px;
`;

const StyledH3 = styled.h1`
  font-size: ${props => props.theme.size*2/25}rem;
  color: #999999;
  font-weight: normal;
  margin-bottom: 0;
`;

const SpeechMsg = ({ text="Not Found", description="The item you are looking for cannot be found", color="#CCE5FB", mood="sad", size=15  }) => (
  <div>
    <StyledDiv>
      <KawaiiContainer>
        <SpeechBubble
          size={size*5}
          color={color}
          mood={mood}
        />
      </KawaiiContainer>
      <ThemeProvider theme={{ size: size }}>
        <TextContainer>
          <StyledH1>{text}</StyledH1>
          <StyledH3>{description}</StyledH3>
        </TextContainer>
      </ThemeProvider>
    </StyledDiv>
  </div>
)

export default SpeechMsg;