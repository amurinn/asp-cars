import React from "react";
import style from "./Contact.module.scss";
import Image from "next/image";
import phone from "../../public/images/phone_red.svg";
import mail from "../../public/images/mail_red.svg";
import maps from "../../public/images/maps_red.svg";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import classNames from "classnames";

function Contact() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCW8KcnORlGRwb2olXf71nl-MFaxzLzQm4",
  });

  const center = {
    lat: 50.35358,
    lng: 14.49959,
  };

  const position = { lat: 50.3546169667637, lng: 14.499545598180866 };

  const divStyle = {
    background: `white`,
    padding: 5,
    color: 'black',
    fontWeight: '600'
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.row}>
          <div className={style.col}>
            <h2>JITKA NOVÁKOVÁ</h2>
            <div className={style.info}>
              <div className={style.phone}>
                <Image src={phone} alt="phone" />
                +420 605 398 869
              </div>
              <div className={style.mail}>
                <Image src={mail} alt="mail" />
                asppujcovna@gmail.com
              </div>
              <div className={style.maps}>
                <Image src={maps} alt="maps" />
                Nebeského 2876,
                <br />
                Mělník, 276 01
                <br />
              </div>
              <span>IČO: 11284340</span>
            </div>
          </div>
          <div className={classNames(style.col, style.map)}>
            {isLoaded && (
              <GoogleMap
                center={center}
                zoom={15}
                options={{ styles: mapStyle }}
                mapContainerStyle={{ width: "100%", height: "500px" }}
              >
                <Marker position={{ lat: 50.35358, lng: 14.49959 }} />
                <InfoWindow position={position}>
                <div style={divStyle}>
                    <div>ASP Autopůjčovna</div>
                </div>
                </InfoWindow>
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

const mapStyle = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#505050",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C22C28",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#252525",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 10,
      },
    ],
  },
];
