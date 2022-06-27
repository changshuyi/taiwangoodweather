import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import axios from 'axios';

const Week = () => {
  const [locationWeatherElement, setLocationWeatherElement] = useState();
  const [weatherCurrentElement, setWeatherCurrentElement] = useState();
  const [locationName, setLocationName] = useState('臺北市');

  useEffect(() => {
    const getApiResponse = () => {
      axios({
        method: 'GET',
        url:
          'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-18B21A55-8309-4060-AD1E-3E4798E51B42&locationName=' +
          locationName,
        config: {
          headers: { 'Content-Type': 'application/json' },
        },
      })
        .then((response) => {
          setLocationWeatherElement(
            response?.data?.records?.locations[0]?.location[0].weatherElement
          );
        })
        .catch((_, textStatus, thrownError) => {
          console.log('errorStatus:', textStatus);
          console.log('Error:', thrownError);
        });
    };

    getApiResponse();
  }, [locationName]);

  useEffect(() => {
    const currentForecast = () => {
      axios({
        method: 'GET',
        url:
          'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-18B21A55-8309-4060-AD1E-3E4798E51B42&locationName=' +
          locationName,
        config: {
          headers: { 'Content-Type': 'application/json' },
        },
      })
        .then((response) => {
          setWeatherCurrentElement(
            response?.data?.records?.location[0].weatherElement
          );
        })
        .catch((_, textStatus, thrownError) => {
          console.log('errorStatus:', textStatus);
          console.log('Error:', thrownError);
        });
    };
    currentForecast();
  }, [locationName]);

  return (
    <div className="bg-[#100E1D] flex flex-col lg:flex-row">
      {weatherCurrentElement ? (
        <SideBar
          locationName={locationName}
          setLocationName={setLocationName}
          weatherCurrentElement={weatherCurrentElement}
        />
      ) : (
        ''
      )}
      {locationWeatherElement ? (
        <MainContent locationWeatherElement={locationWeatherElement} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Week;
