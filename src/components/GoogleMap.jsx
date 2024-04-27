import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function GoogleMap() {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [infoWindow, setInfoWindow] = useState(null);
  
    // console.log('infoWindow',infoWindow)
  
    useEffect(() => {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_APIKEY,
        version: 'weekly',
        // process.env.REACT_APP_APIKEY
      });
  
      loader.load().then(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setCurrentPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
  
              const google = window.google;
              const mapInstance = new google.maps.Map(document.getElementById('map'), {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 15,
              });
              setMap(mapInstance);
  
             
  
              const markerInstance = new google.maps.Marker({
                position: { lat: position.coords.latitude, lng: position.coords.longitude },
                map: mapInstance,
                title: 'My Location',
                // icon: {
                //   url: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-1/431403523_3657596567812919_1168612133943379337_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IVG9FPQ7dB0AX-mQy81&_nc_ht=scontent.fkul15-1.fna&oh=00_AfD4J19-wH6F_xEdTdHJRq0i8eq2IWYB7d_cwNgsH5A-oQ&oe=660D7BCA',
                //   scaledSize: new google.maps.Size(50, 50),
                // },
              });
              setMarker(markerInstance);
  
  
              const infoWindowInstance = new google.maps.InfoWindow();
              setInfoWindow(infoWindowInstance);
  
              markerInstance.addListener('click', () => {
                // console.log('position.coords',position)
                infoWindowInstance.setContent('<div><h3>Your Current Location</h3><p>Latitude: ' + position.coords.latitude + '</p><p>Longitude: ' + position.coords.longitude + '</p></div>');
                infoWindowInstance.open(mapInstance, markerInstance);
              });
  
              mapInstance.panTo({ lat: position.coords.latitude, lng: position.coords.longitude });
            },
            (error) => {
              console.error('Error getting geolocation:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      });
    }, []);
  
    return (

        <div className='dark:bg-slate-500 flex  justify-center items-center '>
        <div className=' h-[450px] w-screen flex lg:flex-row flex-col justify-center items-center'>
         
                <div id="map" style={{ height: '100%', width: '100%' }} ></div>


          
        </div>
      </div>
    );
}

export default GoogleMap
