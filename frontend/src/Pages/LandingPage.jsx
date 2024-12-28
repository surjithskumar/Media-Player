import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      {/* Header Section */}
      <Row className="text-center align-items-center p-4 mx-0">
        <Col xs={12} lg={5} className="mb-4 mb-lg-0">
          <h1 style={{ color: "blueviolet", fontSize: "2.5rem" }}>
            Welcome to <span className="text-warning">Media-Player</span>
          </h1>
          <p>
            The media player offers a simple and intuitive interface, making it easy to play your favorite music, videos, and podcasts. Experience crystal-clear sound and stunning visuals with high-quality audio and video playback. The versatile format support ensures seamless playback of a wide range of media formats. Enjoy uninterrupted playback with advanced features like buffering and queuing.
          </p>
          <Link
            to={'/home'}
            className="btn btn-info"
            style={{ textDecoration: "none" }}
          >
            Get Started
          </Link>
        </Col>
        <Col xs={12} lg={5}>
          <img
            className="img-fluid"
            src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif"
            alt="Media player animation"
          />
        </Col>
      </Row>

      {/* Features Section */}
      <div className="container text-center mt-4 px-3">
        <h5 className="text-warning">Features</h5>
        <Row className="mt-5 justify-content-center">
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="bg-info h-100">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6t1Lq5DDZz5-EbP7wzd1RSKq0L4m280xGHQ&s" alt="Managing Videos" />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Organize, upload, and manage all your videos effortlessly.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="bg-info h-100">
              <Card.Img variant="top" src="https://i.ytimg.com/vi/pVsGz1P1RjI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAcm7AlYTYsXVnl79mQZAQw56h1Gw" alt="Categorized Videos" />
              <Card.Body>
                <Card.Title>Categorized Videos</Card.Title>
                <Card.Text>
                  Browse through your videos by categories for easy access.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="bg-info h-100">
              <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/videos/1068289796/thumb/8.jpg?ip=x480" alt="Watch History" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Keep track of the videos you've watched for convenience.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Details Section */}
      <div className="container border mt-5 p-4 px-3">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <h4 className="text-warning fw-bolder">Simple, Powerful & Fast</h4>
            <h6 className="mt-3">
              <span className="text-warning fw-bolder">Play Everything </span>
              Our media player supports a wide range of formats, so you can enjoy your favorite media content on any device.Access and play your entire media library, from music to movies, in one convenient location.
            </h6>
            <h6 className="mt-3">
              <span className="text-warning fw-bolder">Categorize Videos </span>
              The media player intelligently categorizes your videos based on genre, actor, or director, making it easy to find and enjoy your favorite content. With personalized recommendations, you'll always discover something new to watch.
            </h6>
            <h6 className="mt-3">
              <span className="text-warning fw-bolder">Manage Videos </span>
              Effortlessly manage your video library with features like tagging, rating, and creating playlists. Organize your content the way you want and quickly find what you're looking for.
            </h6>
          </Col>
          <Col xs={12} lg={6}>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/exkJKrAVzAc?si=hwtDrMj_-LNiJiGb"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LandingPage;
