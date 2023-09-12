import React, { Fragment } from 'react'
import { Box3, Box3Container } from './styles/NextDays.styles'
import { useQuery } from 'react-query';
import { formatToLocalTime, icon } from '../utils/Weather.utils';
import { type } from 'os';



  type NextForecast = {
    daily: [
      {
        dt: number,
        timezone: string
        temp: {
          min: number,
          max: number
        }
        weather: [
          {
            icon: string,
            description: string,
          }
        ]
      }
    ]
  }
  

function NextDays() {

  const { isLoading, isError, data: forecasts } = useQuery<NextForecast>({
    queryKey: ["/3.0/onecall?lat=33.44&lon=-94.04&units=metric&exclude=hourly,minutely,current,alerts&appid="]
  })


  return (
    <div>
      {isError && <div><p>Une erreur s'est produite</p></div>}
      {!isLoading &&
        <Box3>
          {forecasts?.daily.slice(1, 5).map((day, index) => {
            return (
              <Box3Container key={index}>
                <div>
                  <header>{formatToLocalTime(day.dt)}</header>
                </div>
                <div>
                  <img alt='/' src={icon(day.weather[0].icon)}></img>
                </div>
                <div>
                  <p>{day.weather[0].description}</p>
                </div>
                <div>
                  <p>{day.temp.max.toFixed()} / {day.temp.min.toFixed()} C</p>
                </div>
              </Box3Container>
            )
          })}
        </Box3>}
    </div>
  )
}

export default NextDays