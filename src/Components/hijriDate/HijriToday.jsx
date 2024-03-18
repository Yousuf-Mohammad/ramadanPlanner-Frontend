import hijriDate from "hijri-date";
import { month } from "../../data/month";
import { useDispatch} from "react-redux";
import { setArabicDate } from "../../redux/features/arabicDate/arabicDate";
const HijriToday = () => {
  
    const date = new hijriDate();
    const {_year,_month,_date} =date
    const gregDate = new Date().toDateString();
    
    const Month = month.find((m)=>m.id===_month)
    const offset =2
    const todaysDate =(_date-offset);

    const dispatch =useDispatch();
    dispatch(setArabicDate({day:todaysDate,month:_month,year:_year}))
    
  return (
    <div>

        <h1 className="text-center text-2xl font-bold">{`${todaysDate}th ${Month.monthName} ${_year}`}</h1>
        <h1 className="text-center text-xl font-semibold mb-10">{`(${gregDate})`}</h1>
    </div>
  )
}

export default HijriToday