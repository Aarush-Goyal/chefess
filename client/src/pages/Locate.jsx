import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Locate = () => {
  return (
    <div
      className="locate"
      style={{
        top: "25vh",
        margin: 0,
        padding: 0,
        width: "50vw",
        height: "50vh",
      }}
    >
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Locate;
