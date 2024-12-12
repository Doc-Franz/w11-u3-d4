/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "../interfaces/Article";

const ArticleDetail = () => {
  const { articleId } = useParams();

  const [articleDetails, setArticleDetails] = useState<ArticleDetails | null>(null);

  const fetchArticleDetails = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + articleId)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((articleDetails) => {
        setArticleDetails(articleDetails);
      });
  };

  useEffect(() => {
    fetchArticleDetails();
  }, [articleId]);

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        {articleDetails && (
          <Col>
            <h1 className="mt-3">{articleDetails.title}</h1>
            <img src={articleDetails.image_url} className="mb-3" style={{ width: "100%" }} />
            <p>{articleDetails.summary}</p>
            <p>Published at {new Date(articleDetails.published_at).toLocaleString("it-IT")}</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ArticleDetail;
