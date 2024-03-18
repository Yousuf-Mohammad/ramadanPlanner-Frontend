import { Coordinates, CalculationMethod, PrayerTimes ,Madhab} from 'adhan';
import { useState } from 'react';

const SalahTime = () => {

const [latitude,setLatitude]=useState(23.7167)
const [longitude,setLongitude]=useState(90.349)
{navigator.geolocation.getCurrentPosition((loc)=>setLatitude(loc.coords.latitude))}
{navigator.geolocation.getCurrentPosition((loc)=>setLongitude(loc.coords.longitude))}
const coordinates = new Coordinates(latitude,longitude);
const params = CalculationMethod.MoonsightingCommittee();
params.madhab = Madhab.Hanafi;
const date = new Date();
const prayerTimes = new PrayerTimes(coordinates, date, params);
const Fajr =prayerTimes.fajr.toLocaleTimeString();
const dhuhr =prayerTimes.dhuhr.toLocaleTimeString();
const asr =prayerTimes.asr.toLocaleTimeString();
const maghrib =prayerTimes.maghrib.toLocaleTimeString();
const isha =prayerTimes.isha.toLocaleTimeString();
  return (
    <div>
        <p>fajr : {Fajr}</p>
        <p>johr : {dhuhr}</p>
        <p>asr : {asr}</p>
        <p>magrib : {maghrib}</p>
        <p>isha : {isha}</p>
        
    </div>
  )
}

export default SalahTime