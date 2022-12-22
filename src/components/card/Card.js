import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({name,img,title,price}) {
  return (
    <Card style={{ width: '24rem',height:340,textAlign:'center' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img width={160} src={img}alt="" />
        <Card.Text>
          {name}
        </Card.Text>
        <span>{price}</span>
       
      </Card.Body>
    </Card>
  );
}

export default BasicExample;