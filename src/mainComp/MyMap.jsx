import React ,{useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup ,Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import polyline from '@mapbox/polyline';
const ORS_API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImU2YTg4NjhlNzk2NjQ5M2JiYTdkZDNiMDNiYmJiNGY0IiwiaCI6Im11cm11cjY0In0=';
const valunteerIcon = L.icon({
  iconUrl: "https://res.cloudinary.com/dycjjaxsk/image/upload/v1754983560/ChatGPT_Image_Aug_12_2025_12_55_08_PM_1_xuqdv6.png",
  iconSize: [40, 40], // width, height
  iconAnchor: [20, 40], // point of icon which will correspond to marker's location
  popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
});
const userIcon = L.icon({
  iconUrl: "https://res.cloudinary.com/dycjjaxsk/image/upload/v1754983991/ChatGPT_Image_Aug_12_2025_01_02_21_PM_1_neqyjb.png",
  iconSize: [40, 40], // width, height
  iconAnchor: [20, 40], // point of icon which will correspond to marker's location
  popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
});
const MyMap = ({ volunteerPos, pickupPos }) => {
    const [routeCoords, setRouteCoords] = useState([]);
       useEffect(() => {
    if (volunteerPos && pickupPos) {
      fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}&start=${volunteerPos.lng},${volunteerPos.lat}&end=${pickupPos.lng},${pickupPos.lat}`
      )
        .then((res) => res.json())
        .then((data) => {
          const geometry = data.features[0].geometry;
          // Decode polyline coordinates
          const coords = geometry.coordinates.map(([lng, lat]) => [lat, lng]);
          setRouteCoords(coords);
        });
    }
  }, [volunteerPos, pickupPos]);
  return (
     <div className=''>
          <MapContainer center={pickupPos} zoom={13} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={volunteerPos} icon={valunteerIcon}>
        <Popup>Volunteer Location</Popup>
      </Marker>
      <Marker position={pickupPos} icon={userIcon}>
        <Popup>Pickup Location</Popup>
      </Marker>
      {routeCoords.length > 0 && <Polyline positions={routeCoords} color="blue" />}
    </MapContainer>
     </div>
  )
}

export default MyMap