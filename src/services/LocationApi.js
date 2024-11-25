import axios from "axios";

export function GetLocation ({latitude, longitude}) {
    const location = 
    axios.get (`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
    return location
}