import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';

const Contact = () => {
  const [locationReponse, setLocationReponse] = useState();

  const weatherElement = (element) => {
    return element?.map((elementItem, _) => {
      return elementItem?.time?.map((timeItem, _) => {
        const nowDateTime = moment(new Date(), 'YYYY-MM-DD HH:mm:ss');
        const startDateTime = moment(
          timeItem?.startTime,
          'YYYY-MM-DD HH:mm:ss'
        );
        const endDateTime = moment(timeItem?.endTime, 'YYYY-MM-DD HH:mm:ss');
        if (nowDateTime.isBetween(startDateTime, endDateTime)) {
          if (elementItem?.elementName === 'Wx') {
            return (
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {timeItem?.parameter?.parameterName}
                </Typography>
              </CardBody>
            );
          }
          if (elementItem?.elementName === 'PoP') {
            return (
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small">降雨機率</Typography>
                <Typography variant="small">
                  {timeItem?.parameter?.parameterName + '%'}
                </Typography>
                <Typography
                  variant="small"
                  color="grey"
                  className="flex gap-1"
                ></Typography>
              </CardFooter>
            );
          }
          if (elementItem?.elementName === 'MaxT') {
            return (
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small">最高溫度</Typography>
                <Typography variant="small">
                  {timeItem?.parameter?.parameterName + '度'}
                </Typography>
                <Typography
                  variant="small"
                  color="grey"
                  className="flex gap-1"
                ></Typography>
              </CardFooter>
            );
          }
          if (elementItem?.elementName === 'MinT') {
            return (
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small">最低溫度</Typography>
                <Typography variant="small">
                  {timeItem?.parameter?.parameterName + '度'}
                </Typography>
                <Typography
                  variant="small"
                  color="grey"
                  className="flex gap-1"
                ></Typography>
              </CardFooter>
            );
          }
          if (elementItem?.elementName === 'CI') {
            return (
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small">舒適度</Typography>
                <Typography variant="small">
                  {timeItem?.parameter?.parameterName + '度'}
                </Typography>
                <Typography
                  variant="small"
                  color="grey"
                  className="flex gap-1"
                ></Typography>
              </CardFooter>
            );
          }
        }
        return '';
      });
    });
  };

  const GetApiResponse = () => {
    axios({
      method: 'GET',
      url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-18B21A55-8309-4060-AD1E-3E4798E51B42',
      data: JSON.stringify({
        Authorization: 'CWB-18B21A55-8309-4060-AD1E-3E4798E51B42',
      }),
      config: {
        headers: { 'Content-Type': 'application/json' },
      },
    })
      .then((response) => {
        console.log(response?.data);
        setLocationReponse(response?.data?.records?.location);
      })
      .catch((_, textStatus, thrownError) => {
        console.log('errorStatus:', textStatus);
        console.log('Error:', thrownError);
      });
  };

  useEffect(() => {
    GetApiResponse();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {locationReponse &&
          locationReponse?.map((item, index) => {
            return (
              // Wx(天氣現象)、MaxT(最高溫度)、MinT(最低溫度)、CI(舒適度)、PoP(降雨機率)
              <Card
                className="w-96 m-10 py-6 px-3 font-mono"
                key={'location_' + index}
              >
                <CardHeader className="relative h-56 text-5xl bg-grey-700 text-blue-grey-50 p-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {item?.locationName}
                </CardHeader>
                {weatherElement(item?.weatherElement)}
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default Contact;
