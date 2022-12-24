import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { SectionBg, SectionContainer, VideoBg, SectionContent, SectionH1, SectionH2, SectionP, SectionBtnWrapper, ArrowForward, ArrowRight } from './SectionElements';
import { Button } from '../Button';

const SectionElements = () => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SectionContainer>
      <SectionBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' alt="Video by Cottonbro Studio">
        </VideoBg>
      </SectionBg>
      <SectionContent>
        <SectionH1>
          I'm Erika.
        </SectionH1>
        <SectionH2>
          I'm a Software Engineer.
        </SectionH2>
        <SectionP>
          I create interfaces & improve user experiences for organizations big and small. I'm currently available and ready to work immediately.
        </SectionP>
        <SectionBtnWrapper>
          <Button to='resume'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            View my resume {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </SectionBtnWrapper>
      </SectionContent>
    </SectionContainer>
  )
}

export default SectionElements
