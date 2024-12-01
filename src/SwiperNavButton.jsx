import React from 'react';
import { useSwiper } from 'swiper/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export const SwiperNavButtons = (props) => {
  const swiper = useSwiper();
  function gonext() {
  
    swiper.slideNext()
    props.a()
  }
  function goback() {
    swiper.slidePrev()
    props.b()
  }
  function sabt() {
    swiper.slideTo(0)
    props.stepone()
  }
  function hesab() {
    swiper.slideTo(1)
    props.steptow()
  }
  function khazaneh() {
    swiper.slideTo(2)

    props.stepthree()
  }
  function omoomi() {


  
    swiper.slideTo(3)
    props.step4()

  }




  return (<>
     <div className="cont-swiper-head-btns">   
    <div className="swiper-head-btns">   
        <button onClick={sabt} className={swiper.activeIndex==0? 'link-swiper red-swiper':'link-swiper '}> ثبت نام </button>

      <button onClick={hesab} className={swiper.activeIndex==1? 'link-swiper red-swiper':'link-swiper '} link-swiper>حسابداری </button>



      <button onClick={khazaneh} className={swiper.activeIndex==2? 'link-swiper red-swiper':'link-swiper '}> خزانه </button>
      <button onClick={omoomi} className={swiper.activeIndex==3? 'link-swiper red-swiper has-right-border':'link-swiper has-right-border '}  >عمومی</button>
    </div>
    </div>
    <div className="swiper-nav-btns">





      <button onClick={goback} className='swiper-next '> 
      
      <NavigateNextIcon className='icon-back'/>
      
      </button>



      <button onClick={gonext} className='swiper-prev '  >

<NavigateNextIcon className='icon'/>

      </button>
    </div>
  </>

  );
};
