import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./TheBest.css"
import GOT from '../../../IMG/GOT.jpg'
import arrow from '../../../IMG/arrow.jpg'
import breaking from '../../../IMG/breaking-bad.png'
import dexter from '../../../IMG/dexter.jpg'
import kingdom from '../../../IMG/kingdom.jpg'
import leverage from '../../../IMG/leverage.jpg'
import money from '../../../IMG/money-heist.jpg'
import orange from '../../../IMG/orange.jpg'
import orphan from '../../../IMG/orphan-black.png'



const TheBest = () => {
  return (
    <section className='TheBest'>
      <h3>The Best</h3>
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
        <div style={{backgroundImage:`url(${GOT})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>Game of Thrones</h4>
          <p>Season:8</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${arrow})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>arrow</h4>
          <p>Season:8</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${breaking})` ,backgroundSize:"cover",backgroundPosition:"center"}} className='TheBest-card w-100 h-100'>
          <h4>breaking bad</h4>
          <p>Season:5</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${dexter})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>dexter</h4>
          <p>Season:8</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${kingdom})` ,backgroundSize:"cover",backgroundPosition:"center"}} className='TheBest-card w-100 h-100'>
          <h4>kingdom</h4>
          <p>Season:3</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${leverage})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>leverage</h4>
          <p>Season:5</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${money})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>money heist</h4>
          <p>Season:3</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${orange})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>orange is the new black</h4>
          <p>Season:7</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div style={{backgroundImage:`url(${orphan})` ,backgroundSize:"cover",backgroundPosition:"bottom"}} className='TheBest-card w-100 h-100'>
          <h4>orphan black</h4>
          <p>Season:5</p>
          <br />
          <h6>finished</h6>
        </div>
      </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default TheBest
// key={item.shows.id}
// id={item.shows.id}
// image={item.shows.image ? item.show.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
// name={item.shows.name}
// rating={item.show.rating.average ? item.show.rating.average : "No rating"}
