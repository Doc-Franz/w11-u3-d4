import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyArticle } from "../interfaces/Article";

interface SingleArticleProps {
  article: MyArticle;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  return (
    <Col xs={12} md={6} key={article.id} className="mb-3">
      <Card>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.summary}</Card.Text>
          <Link to={`/article/${article.id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleArticle;
