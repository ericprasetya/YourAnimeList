import Card from 'react-bootstrap/Card';
import styled from '@emotion/styled'

export default function AnimeCard({children, ...attr}) {
  const StyledCard = styled(Card)`
    width: 18rem;
    transition: box-shadow .2s;
    &:hover {
      box-shadow: 0 0 10px 2px #888888; 
    }
  `
  return (
    <StyledCard className="mb-2">
      {children}
    </StyledCard>
  );
}

export function CardImage({src, ...attr}){
  return <Card.Img variant="top" src={src} {...attr} style={{ maxHeight : '400px' }}/>

}

export function CardBody({children}){
  return <Card.Body>
    {children}
  </Card.Body>
}