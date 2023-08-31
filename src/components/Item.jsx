import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imagen} />
        <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>
                {product.categoria}
                {product.precio}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
)