import React from 'react';

const ProfileDrilldown = (props) => {
  return (
    <div>
      <h1>{props.profile.name}</h1>
      <h3>{props.profile.username}</h3>
      <h3>{props.profile.email}</h3>
      <p>Address: {props.profile.address.suite} {props.profile.address.street}, {props.profile.address.city} {props.profile.address.zipcode}</p>
      <p>Coordinates: {props.profile.address.geo.lat}, {props.profile.address.geo.lng}</p>
      <p>Phone: {props.profile.phone}</p>
      <p>Company: {props.profile.company.name}</p>
    </div>
  );
}

export default ProfileDrilldown;