import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({img}) {
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" width={100} height={200} src="https://cdn.goodzone.uz/goodzone/1445e8c9-d646-4736-ae62-2c0c8aeca1c8" />
      <Card.Body>
        <Card.Title>Card Title 2020</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere@0102</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;