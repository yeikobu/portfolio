import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "use-window-size-v2";
import { db } from '../firebase/config';
import Project from './Project';

import '../styles/Portfolio.scss';
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  const { width } = useWindowSize(100);
  const [projects, setProjects] = useState([]);

  const mobileProjects = projects.filter(project => project.category === 'mobile');
  const webProjects = projects.filter(project => project.category === 'web');

  const fetchProjects = async () => {
    await getDocs(collection(db, 'projects'))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const sortedData = newData.sort().reverse();
        setProjects(sortedData);
      })
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  return (
    <>
      <div className='portfolio'>
        <div className='portfolio-container' id='portfolio'>
          <div>
            <h5>Mobile Projects</h5>
            <Swiper 
            //If screen width size is less than 1170px it reders 1 component. Else if size less than 1786, 2 component. Else 3
              slidesPerView={width < 1170 ? 1 : (width < 1786 ? 2 : 3)}
              spaceBetween={0}
              slidesPerGroup={1}
              loop={false}
              loopFillGroupWithBlank={false}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {
                mobileProjects.map((project, i) => (
                  <SwiperSlide className='projects-container'>
                    <Project key={i} description={project.description} img={project.img} link={project.link} title={project.title} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div>
            <h5>Web Projects</h5>
            <Swiper 
              slidesPerView={width < 1170 ? 1 : (width < 1786 ? 2 : 3)}
              spaceBetween={0}
              slidesPerGroup={1}
              loop={false}
              loopFillGroupWithBlank={false}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {
                webProjects.map((project, i) => (
                  <SwiperSlide className='projects-container'>
                    <Project key={i} description={project.description} img={project.img} link={project.link} title={project.title} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;