import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Cards from '../cards/Cards'
import Single from '../../assets/single.png'
import Double from '../../assets/double.png'
import Triple from '../../assets/triple.png'

const Slides = () => {
  return (
    <div>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Cards
              price="$149"
              img={Single}
              plan="Single"
              storage="500 GB"
              grantUser="1 User"
              upload="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              price="$199"
              img={Double}
              plan="Partnership"
              storage="1 TB"
              grantUser="3 Users"
              upload="10"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              price="$299"
              img={Triple}
              plan="Group Account"
              storage="5 TB"
              grantUser="10 Users"
              upload="20"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}

export default Slides
