const dayHourIn = '20/01/2020 10:01:00';
const dayHourOut = '20/01/2022 14:34:00';

function convertDateHourMs(dateHour) {
    const [date, hours] = dateHour.split(' ');
    const [day, month, year] = date.split('/');
    const [hour, minutes, seconds] = hours.split(':');
    const newDate = new Date(year, month - 1, day, hour, minutes, seconds);
    return newDate.getTime();
}

const timeIn = convertDateHourMs(dayHourIn);
const timeOut = convertDateHourMs(dayHourOut);
const stayedTimeInSeconds = (timeOut - timeIn) / 1000

function calcTime(stayedTimeSeconds) {
    const dayInSeconds = 24 * 60 * 60;
    const hourInSeconds = 60 * 60;
    const minutesInSeconds = 60;

    const days = Math.floor(stayedTimeSeconds / dayInSeconds);
    const hours = Math.floor(stayedTimeSeconds / hourInSeconds) % 24;
    const minutes = Math.floor(stayedTimeSeconds / minutesInSeconds) % 60;
    const seconds = stayedTimeSeconds % 60;
    const dateReturn = `dias:${days}| horas:${hours}| minutos:${minutes}| segundos:${seconds}`
    return dateReturn;
}

console.log(calcTime(stayedTimeInSeconds));