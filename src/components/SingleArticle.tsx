import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface MyArticle {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  launches: Launch[];
  events: unknown[];
}

interface Launch {
  launch_id: string;
  provider: string;
}

interface SingleArticle {
  article: MyArticle;
}

const SingleArticle = ({ article }: SingleArticle) => {
  return (
    <Col xs={12} md={6} key={article.id} className="mb-3">
      <Card>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.summary}</Card.Text>
          <Link to={`/${article.id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleArticle;
