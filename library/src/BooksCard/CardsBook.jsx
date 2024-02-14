import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsBooks = ({ title, category, img, price }) => {
  return (
    <div className="row">
      <div className="xs=12 md=6 lg=3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default CardsBooks;
