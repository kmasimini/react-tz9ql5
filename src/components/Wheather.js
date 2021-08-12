import React from 'react';
import styled from 'styled-components';
import CityComponent from './CityComponent';
import WeatherInfoComponent from './WeatherInfoComponent';


const Container = styled.div`
 display: flex;
 flex-direction: column;
 margin: auto;
 align-items: center;
 box-shadow: 0 3px 6px 0 #555;
 paddding: 20px 10px;
 border-radius: 10px;
 width: 800px;
 background-color: #fff;
`;

const AppName = styled.span`
 font-size: 20px;
 font-wieght: bold;
 color: black;

`;



function Weather(){

  return(
    <Container>

      <AppName>Weather App</AppName>
      <CityComponent/>
      <WeatherInfoComponent />
    </Container>
  );
}

export default Weather;