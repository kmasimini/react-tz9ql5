import React from 'react';
import styled from 'styled-components';


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

const CityComponents = styled.div`
 display: flex;
 flex-direction: column;
`;

const WeatherComponents = styled.div`
 display: flex;
 flex-direction: column;
`;


function Weather(){

  return(
    <Container>

      <AppName>Weather App</AppName>
      < CityComponents>CityComponents</ CityComponents>
      <WeatherComponents>WeatherComponents</WeatherComponents>
    </Container>
  );
}

export default Weather;