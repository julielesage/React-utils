import './App.css';
import styled from 'styled-components';

const ExampleStyledComponents = styled.div`
color : ${(props) => props.color};`
  ;

export const ExampleComponent = () => (
  <ExampleStyledComponents color="red">
    <p>This is an example containing styled-components</p>
  </ExampleStyledComponents>
);