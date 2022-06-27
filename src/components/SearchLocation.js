import React, { useState } from 'react';

const city = [
  { area: 'north', city: '臺北市' },
  { area: 'north', city: '新北市' },
  { area: 'north', city: '基隆市' },
  { area: 'north', city: '桃園市' },
  { area: 'north', city: '新竹市' },
  { area: 'north', city: '新竹縣' },
  { area: 'north', city: '宜蘭縣' },
  { area: 'central', city: '苗栗縣' },
  { area: 'central', city: '臺中市' },
  { area: 'central', city: '彰化縣' },
  { area: 'central', city: '南投縣' },
  { area: 'central', city: '雲林縣' },
  { area: 'south', city: '嘉義市' },
  { area: 'south', city: '嘉義縣' },
  { area: 'south', city: '臺南市' },
  { area: 'south', city: '高雄市' },
  { area: 'south', city: '屏東縣' },
  { area: 'south', city: '澎湖縣' },
  { area: 'east', city: '花蓮縣' },
  { area: 'east', city: '臺東縣' },
  { area: 'islands', city: '金門縣' },
  { area: 'islands', city: '連江縣' },
];

const SearchLocation = (props) => {
  const { onClose, onSetLocationName, currentLocationName } = props;
  const [locationName, setlocationName] = useState(currentLocationName);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isAreaSelectOpen, setIsAreaSelectOpen] = useState();

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleAreaSelectClick = (area) => {
    setIsAreaSelectOpen(area);
  };

  const handleCityClick = (option) => {
    setlocationName(option);
    setIsSelectOpen(false);
  };

  const handleCitySelect = () => {
    onSetLocationName(locationName);
    onClose();
  };

  const handleSelectSubarea = (area) => {
    return (
      <ul
        className="border border-gray-150 bg-transparent p-3 flex-grow z-10"
        placeholder="search location"
        onChange={(e) => {
          setlocationName(e.target.value);
        }}
        value={locationName}
      >
        {city.map((option) => {
          if (option.area === area) {
            return (
              <li
                className="py-2 px-2 hover:bg-[#3C47E9]/70 cursor-pointer"
                key={option.city}
                value={option.city}
                onClick={() => handleSelectSubareaClick(option.city)}
              >
                {option.city}
              </li>
            );
          }
          return '';
        })}
      </ul>
    );
  };

  const handleSelectSubareaClick = (name) => {
    onSetLocationName(name);
    onClose();
  };

  return (
    <div className="text-gray-150">
      <div className="text-right">
        <button className="text-2xl" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="flex justify-between my-5 space-x-4">
        <button
          type="button"
          className={
            !isSelectOpen
              ? 'border border-gray-150 bg-transparent p-3 flex-grow'
              : 'hidden'
          }
          onClick={() => handleSelectClick()}
        >
          {locationName}
          <i class="fa fa-caret-down" style={{ float: 'right' }}></i>
        </button>
        {isSelectOpen ? (
          <ul
            className="border border-gray-150 bg-transparent p-3 flex-grow z-10"
            placeholder="search location"
            onChange={(e) => {
              setlocationName(e.target.value);
            }}
            value={locationName}
          >
            {city.map((option) => (
              <li
                className="py-2 px-2 hover:bg-[#3C47E9]/70 cursor-pointer"
                key={option.city}
                value={option.city}
                onClick={() => handleCityClick(option.city)}
              >
                {option.city}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
        <button
          className={
            !isSelectOpen
              ? 'bg-[#3C47E9] py-3 px-5 hover:bg-[#3C47E9]/70'
              : 'hidden'
          }
          onClick={() => handleCitySelect()}
        >
          選擇
        </button>
      </div>

      <div className="mt-20">
        <button
          className={
            isAreaSelectOpen === ''
              ? 'hidden'
              : 'hover:border border-gray-250 px-4 py-6 w-full flex justify-between'
          }
          onClick={() => handleAreaSelectClick('north')}
        >
          <p>北部</p>
          <i className="fas fa-chevron-right text-gray-350"></i>
        </button>
        {isAreaSelectOpen === 'north' ? handleSelectSubarea('north') : ''}
        <button
          className={
            isAreaSelectOpen === ''
              ? 'hidden'
              : 'hover:border border-gray-250 px-4 py-6 w-full flex justify-between'
          }
          onClick={() => handleAreaSelectClick('central')}
        >
          <p>中部</p>
          <i className="fas fa-chevron-right text-gray-350"></i>
        </button>
        {isAreaSelectOpen === 'central' ? handleSelectSubarea('central') : ''}
        <button
          className={
            isAreaSelectOpen === ''
              ? 'hidden'
              : 'hover:border border-gray-250 px-4 py-6 w-full flex justify-between'
          }
          onClick={() => handleAreaSelectClick('south')}
        >
          <p>南部</p>
          <i className="fas fa-chevron-right text-gray-350"></i>
        </button>
        {isAreaSelectOpen === 'south' ? handleSelectSubarea('south') : ''}
        <button
          className={
            isAreaSelectOpen === ''
              ? 'hidden'
              : 'hover:border border-gray-250 px-4 py-6 w-full flex justify-between'
          }
          onClick={() => handleAreaSelectClick('east')}
        >
          <p>東部</p>
          <i className="fas fa-chevron-right text-gray-350"></i>
        </button>
        {isAreaSelectOpen === 'east' ? handleSelectSubarea('east') : ''}
        <button
          className={
            isAreaSelectOpen === ''
              ? 'hidden'
              : 'hover:border border-gray-250 px-4 py-6 w-full flex justify-between'
          }
          onClick={() => handleAreaSelectClick('islands')}
        >
          <p>外島</p>
          <i className="fas fa-chevron-right text-gray-350"></i>
        </button>
        {isAreaSelectOpen === 'islands' ? handleSelectSubarea('islands') : ''}
      </div>
    </div>
  );
};

export default SearchLocation;
