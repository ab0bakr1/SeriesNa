import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import pretty from '../../../IMG/pretty-little-liars.jpg'
import prison from '../../../IMG/prison-break.jpg'
import suits from '../../../IMG/suits.jpg'
import blacklist from '../../../IMG/the-blacklist.jpg'
import vikings from '../../../IMG/vikings.jpg'
import trinkets from '../../../IMG/trinkets.jpg'
import lupin from '../../../IMG/lupin.jpg'
import onlyMurdersInTheBuilding from '../../../IMG/only-murders-in-the-building.jpg'
import kingTulsa from '../../../IMG/king-tulsa.jpg'


const Trending = () => {
  return (
    <section className='Trending'>
      <h3>Trending</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          '@2.00': {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <SwiperSlide >
        <div style={{backgroundImage:`url(${pretty})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>pretty little liars</h4>
          <p>Season:7</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${prison})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>prison break</h4>
          <p>Season:5</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${suits})` ,backgroundSize:"cover",backgroundPosition:"center"}} className='TheBest-card w-100 h-100'>
          <h4>suits</h4>
          <p>Season:9</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${trinkets})` ,backgroundSize:"cover",backgroundPosition:"center"}} className='TheBest-card w-100 h-100'>
          <h4>trinkets</h4>
          <p>Season:2</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${lupin})` ,backgroundSize:"cover",backgroundPosition:"center"}} className='TheBest-card w-100 h-100'>
          <h4>lupin</h4>
          <p>Season:2</p>
          <br />
          <h6>continuous</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${onlyMurdersInTheBuilding})` ,backgroundSize:"cover",backgroundPosition:"center"}} className='TheBest-card w-100 h-100'>
          <h4>only murders in the building</h4>
          <p>Season:3</p>
          <br />
          <h6>continuous</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${kingTulsa})` ,backgroundSize:"cover",backgroundPosition:"center"}} className='TheBest-card w-100 h-100'>
          <h4>king tulsa</h4>
          <p>Season:1</p>
          <br />
          <h6>continuous</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${vikings})` ,backgroundSize:"cover",backgroundPosition:"center"}} className='TheBest-card w-100 h-100'>
          <h4>vikings</h4>
          <p>Season:6</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${blacklist})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>the blacklist</h4>
          <p>Season:10</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Trending