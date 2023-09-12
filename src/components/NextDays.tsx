import React, { Fragment } from 'react'
import { Box3, Box3Container } from './styles/NextDays.styles'
import { useQuery } from 'react-query';
import { formatToLocalTime, icon } from '../utils/Weather.utils';
function NextDays() {

  interface forecast {
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

  const { isLoading, isError, data: forecasts } = useQuery<forecast>({
    queryKey: ["/3.0/onecall?lat=33.44&lon=-94.04&units=metric&exclude=hourly,minutely,current,alerts&appid="]
  })


  return (
    <div>
      {isError && <div><p>Une erreur s'est produite</p></div>}
      {!isLoading &&
        <Box3>
          {forecasts?.daily.map((day, index) => {
            return (
              <Fragment key={index}>
                {index > 0 && index < 5 &&
                  <Box3Container >
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
                  </Box3Container>}
              </Fragment>
            )
          })}
        </Box3>}
    </div>
  )
}

export default NextDays