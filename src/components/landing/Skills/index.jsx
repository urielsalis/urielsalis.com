import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Uriel and I’m a Kotlin Software Engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          Kotlin and Java developer of web and desktop applications using different technologies. Specialized in backend development but experienced with frontend frameworks like Angular and React and mobile app development with Java, Kotlin and Flutter
          Worked on the travel and fintech sectors and consulted for different businesses, adding to my experience as a volunteer for different projects, including working along with both volunteers and employees of big companies like Microsoft(for Minecraft)
          Always looking for ways to improve and learn new things!
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
