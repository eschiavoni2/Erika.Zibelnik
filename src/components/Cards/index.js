import { Button } from '../Button';
import Card from 'react-bootstrap/Card';
import { CardText, CardImg, CardBody, CardSubtitle, CardTitle, ButtonWrap } from './CardElements';

function Cards({ img, dark, primary, descriptionCardBullet, descriptionCardBullet2, descriptionCardBullet3, buttonLabel2, buttonLabel3, descriptionCard, buttonLabel, darkText, topLineCard}) {
  return (
    <Card style={{ width: '18rem' }}>
      <CardImg variant="top" src={img} />
      <CardBody>
        <CardTitle darkText={darkText}>{topLineCard}</CardTitle>
        <CardSubtitle>{descriptionCardBullet}</CardSubtitle>
        <CardText darkText={darkText}>
          {descriptionCard ?? descriptionCardBullet2}
        </CardText> 
        <ButtonWrap>
        {buttonLabel ?
          <Button primary={primary ? 1 : 0}
            dark={dark ? 1 : 0} as="a" href="https://eschiavoni2.github.io/Budget-Tracker/" target="_blank" rel="noopener noreferrer" >{buttonLabel}</Button>
            : buttonLabel2 ?
          <Button primary={primary ? 1 : 0}
              dark={dark ? 1 : 0} as="a" href="https://eschiavoni2.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer" >{buttonLabel2}</Button>
            :
          <Button primary={primary ? 1 : 0}
              dark={dark ? 1 : 0} as="a" href="https://github.com/eschiavoni2" target="_blank" rel="noopener noreferrer" >{buttonLabel3}</Button>
          }
        </ButtonWrap>
          </CardBody>
    </Card>
  );
}

export default Cards;