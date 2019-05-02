import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileDrilldown from '../Components/ProfileDrilldown';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.location.state.data
    }
  }

  render() {
    const { profile } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <ProfileDrilldown profile={profile} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;