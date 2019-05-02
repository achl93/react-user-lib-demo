import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfiles: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(resJson => this.setState({ userProfiles: resJson }))
    .then(this.setState({ isLoading: false }));
  }

  render() {
    const { isLoading, userProfiles } = this.state;
    console.log(userProfiles);
    const userProfilesDOM = userProfiles.map(profile =>
      <Col key={profile.id}>
        <Card style={{ width: '18rem', height: '20rem', margin: '1em' }}>
          <Card.Body>
            <Card.Title>{profile.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Username: {profile.username}</ListGroupItem>
            <ListGroupItem>Email: {profile.email}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Link to={{
              pathname: `/profile/${profile.id}`,
              state: {
                data: profile
              }
            }}>
              <Button variant="primary">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );

    if (isLoading) {
      return (
        <div>
          <h1>User Library</h1>
          <div>Loading...</div>
        </div>
      );
    }

    return (
      <div>
        <Container>
          <h1>User Library</h1>
          <Row>
            {userProfilesDOM}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;