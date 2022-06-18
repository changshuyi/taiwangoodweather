import React, { useState, useEffect } from 'react';
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
              <Card className="w-96 mt-6">
                <CardHeader color="blue" className="relative h-56">
                  <img
                    src="/img/blog.jpg"
                    alt="img-blur-shadow"
                    className="w-full h-full"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h5" className="mb-2">
                    {item?.locationName}
                  </Typography>
                  <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Typography variant="small">$899/night</Typography>
                  <Typography
                    variant="small"
                    color="grey"
                    className="flex gap-1"
                  >
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    Barcelona, Spain
                  </Typography>
                </CardFooter>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default Contact;
