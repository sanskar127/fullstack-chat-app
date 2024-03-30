export default function extractTime(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12? 'pm' : 'am';
    hours = hours % 12;
    hours = hours? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes +'' + ampm;
    return strTime;
}