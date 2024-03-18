

import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./DailyQuotes.css"
const DailyQuotes =() => {
    return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    
    slidesPerView={1}
    autoplay={{
        delay: 3500,
        disableOnInteraction: true,
        }}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[60dvh] p-4 lg:p-20 justify-center items-center ">
        
        <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-24 gap-10 z-1 shadow-lg shadow-black duaBg min-h-[60dvh]">

            <div className="flex justify-center items-center flex-col gap-4 w-full p-5 textBg  ">
                <h1 className='text-center text-white text-[35px]  font-bold px-20 pt-6 underline'>Today&apos;s Dua</h1>
                <h1 className='text-center text-white text-[35px] font-bold  '>رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</h1>
                <h4 className='text-center text-white text-[25px] font-bold  '>&quot;Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire.&quot;</h4>
                <p className='text-center text-gray-300 text-[15px] font-bold  '>[Al-Baqarah, 2:201]</p>
                
            </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[60dvh] p-4 lg:p-20 justify-center items-center ">
        
        <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-24 gap-10 z-1 shadow-lg shadow-black hadithBg min-h-[60dvh]">

            <div className="flex justify-center items-center flex-col gap-4 w-full p-5 textBg  ">
                <h1 className='text-center text-white text-[35px]  font-bold px-20 pt-6 underline'>Today&apos;s Hadith</h1>
                <h1 className='text-center text-white text-[35px]   '> إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ</h1>
                <h4 className='text-center text-white text-[25px] font-bold  '>&quot; The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for. &quot;</h4>
                <p className='text-center text-gray-300 text-[15px] font-bold  '>[Sahih Al Bukhari: 1]</p>
                
            </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[60dvh] p-4 lg:p-20 justify-center items-center ">
        
        <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-24 gap-10 z-1 shadow-lg shadow-black quranBg min-h-[60dvh]">

            <div className="flex justify-center items-center flex-col gap-4 w-full p-5 textBg  ">
                <h1 className='text-center text-white text-[35px]  font-bold px-20 pt-6 underline'>Today&apos;s Ayat </h1>
                <h1 className='text-center text-white text-[35px] font-bold  '>ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ</h1>
                <h4 className='text-center text-white text-[25px] font-bold  '>&quot;Praise belongs to Allah, the Lord of all the worlds.&quot;</h4>
                <p className='text-center text-gray-300 text-[15px] font-bold  '>[Surah Fatiha, 1:1]</p>
                
            </div>
        </div>
        </div>
        </SwiperSlide>
        
        
        
        
    </Swiper>
    );
};

export default DailyQuotes