import React, { useState, useEffect } from 'react';
import axios from 'axios';

const city = [
  '基隆市',
  '臺北市',
  '新北市',
  '桃園縣',
  '新竹市',
  '新竹縣',
  '苗栗縣',
  '臺中市',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '嘉義市',
  '嘉義縣',
  '臺南市',
  '高雄市',
  '屏東縣',
  '臺東縣',
  '花蓮縣',
  '宜蘭縣',
  '澎湖縣',
  '金門縣',
  '連江縣',
];

// 應該要在pages中呼叫api再丟到component的，之後再來調整
const WeekItem = () => {
  const [locationWeatherElement, setLocationWeatherElement] = useState();
  const [locationName, setlocationName] = useState('臺北市');

  useEffect(() => {
    const getApiResponse = () => {
      console.log('locationName = ', locationName);
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
          console.log(response?.data);
          // 可能可以用座標位置加入地圖api
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

  return (
    <>
      <div className="flow-root">
        <select
          onChange={(e) => {
            setlocationName(e.target.value);
          }}
          value={locationName}
        >
          {city.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default WeekItem;
