import React from 'react'
import { Container, Box1, Box2, Box1Header, BoxContainer, BoxContainer1, AllContainer } from './components/styles/Container.style';
import GlobalStyles from './components/styles/Global';
import NextDays from './components/NextDays';
import { formatToLocalTime, icon } from './utils/Weather.utils';
import { useQuery } from 'react-query';


function App() {

  interface weathers {
    name: string,
    dt: number,
    main: {
      temp: number,
      temp_max: number,
      temp_min: number,
      humidity: number,
    },
    wind: {
      speed: number
    },
    weather: [
      {
        icon: string,
        description: string,
      }
    ]
  }

  const { isLoading, isError, data: weather } = useQuery<weathers>({
    queryKey: ["/2.5/weather?q=berlin&units=metric&appid="]
  })

  return (
    <div>
      {isError && <div><p>Une erreur s'est produite</p></div>}
      {!isLoading && <>
        <GlobalStyles />
        <Container>
          <AllContainer>
            <BoxContainer>
              <BoxContainer1>
                <Box1>
                  <Box1Header>
                    <h2>{weather?.name}</h2>
                    <p>{formatToLocalTime(weather?.dt)}</p>
                  </Box1Header>
                  <Box1Header>
                    <h1>{weather?.main.temp.toFixed()} C</h1>
                    <p>{weather?.main.temp_max.toFixed()} / {weather?.main.temp_min.toFixed()} C</p>
                    <div>
                      <img alt='/' src={icon(weather?.weather[0].icon)}></img>
                      <p>{weather?.weather[0].description}</p>
                    </div>
                  </Box1Header>
                  <p>Wind: {weather?.wind.speed.toFixed()} km/h</p>
                  <p>Humidity: {weather?.main.humidity} %</p>
                </Box1>
                <Box2>
                  <img alt='/' src={icon(weather?.weather[0].icon)}></img>
                </Box2>
              </BoxContainer1>
              <NextDays />
            </BoxContainer>
          </AllContainer>
        </Container>
      </>}
    </div>
  );
}

export default App;
