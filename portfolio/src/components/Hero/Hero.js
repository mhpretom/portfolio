import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To  <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a B.tech graduate in Information Technology. I have a fair amount of knowledge in front-end development and aspire to be a full stack (MERN) developer.
      </SectionText>
      <Button onClick={()=>window.location="https://drive.google.com/file/d/1Ek622cuPNWACdH-NuVYDyPuA42nlT5cm/view?usp=sharing"}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;