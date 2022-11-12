import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { db } from '../firebase/config';
import '../styles/Knowledge.scss';

const Knowledge = () => {

  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    await getDocs(collection(db, 'skills'))
      .then((querySnapshot) => {
        const skillsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse();
        const newSkillsData = skillsData.map((skill) => {
          const replacedDescription = skill.description.replace(/\\n/g, '\n');
          skill.description = replacedDescription;
          return skill;
        });
        setSkills(newSkillsData);
      })
  }

  useEffect(() => {
    fetchSkills();
  }, [])

  return (
    <div className='knowledge-container' id='knowledge'>
      <h3>What I know in</h3>
      <p>(Swipe left...)</p>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper skill-cards-container"
      >
        {
          skills.map((skill, i) => (
            <SwiperSlide key={i} className='skill-cards'>
              <div>
                <img src={skill.img} alt={skill.title} />
              </div>
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default Knowledge;