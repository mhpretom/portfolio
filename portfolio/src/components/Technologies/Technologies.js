import React from 'react';
import {  DiReact, DiZend ,DiCss3,DiHtml5,DiJavascript1,DiBootstrap,} from 'react-icons/di';
import {SiJava} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From HTML To React
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>
            Experienced with <br />
            HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>
            Experienced with <br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiBootstrap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Experienced with <br />
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Styled Components</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Styled Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;