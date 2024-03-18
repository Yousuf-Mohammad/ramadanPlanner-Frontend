import DailyQuotes from "../../Components/DailyQuotes/DailyQuotes"
import Onboarding from "../../Components/Onboarding/Onboarding"
import SalahTime from "../../Components/SalahTime/SalahTime"
import HijriToday from "../../Components/hijriDate/HijriToday"
// import QuranTracker from "../../Components/QuranTracker/QuranTracker"
// import SalahTrack from "../../Components/SalahTracker/SalahTrack"
// import TaskList from "../../Components/TaskList/TaskList"
// import TRackerContainer from "../../Components/TrackerContainer/TRackerContainer"



export const HomeScreen = () => {
  return (
    <div>
      <Onboarding/>
      {navigator.geolocation.getCurrentPosition((loc)=>console.log(loc))}
      <SalahTime/>
      <DailyQuotes/>
      


      
    </div>
  )
}
