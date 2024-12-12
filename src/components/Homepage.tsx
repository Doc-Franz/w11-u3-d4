import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";

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

const Homepage = () => {
  const [articles, setArticles] = useState<MyArticle[]>([]);

  const fetchArticles = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((articles) => {
        setArticles(articles.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => fetchArticles(), []);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={8}>
          <Row>
            {articles.map((article) => (
              <SingleArticle article={article} key={article.id} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
