import { DateTime } from "luxon";


export const formatToLocalTime = (secs = 0) => {
   return DateTime.fromSeconds(secs).toFormat("ccc dd LLL");
}


export const icon = (code = '') => {
   return `https://openweathermap.org/img/wn/${code}@2x.png`
}



