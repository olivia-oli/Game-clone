import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  font-family: "Courier New", Courier, monospace;
  background-color: transparent;
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5em;
  font-weight: 200;
  background-color: transparent;
`;
