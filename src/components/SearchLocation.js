import React, { useState } from 'react';

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

const SearchLocation = (props) => {
  const { onClose, onSetLocationName, currentLocationName } = props;
  const [locationName, setlocationName] = useState(currentLocationName);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleCityClick = (option) => {
    setlocationName(option);
    setIsSelectOpen(false);
  };

  const handleCitySelect = () => {
    onSetLocationName(locationName);
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
                key={option}
                value={option}
                onClick={() => handleCityClick(option)}
              >
                {option}
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
          搜尋
        </button>
      </div>

      <div className="mt-20">
        <button className="hover:border border-gray-250 px-4 py-6 w-full flex justify-between">
          <p>臺北市</p>
          <i className="fas fa-chevron-right text-gray-350"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchLocation;
