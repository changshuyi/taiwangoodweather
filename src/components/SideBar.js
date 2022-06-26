import { useState } from 'react';
import moment from 'moment';
import SearchLocation from './SearchLocation';

const SideBar = (props) => {
  const { locationName, setLocationName, weatherCurrentElement } = props;
  const [isOpen, setIsOpen] = useState(false);

  // 當前天氣所以先只取time[0]的部分
  const weatherElements = weatherCurrentElement.reduce(
    (neededElements, item) => {
      if (['Wx', 'PoP', 'CI', 'MaxT', 'MinT'].includes(item.elementName)) {
        neededElements[item.elementName] = item.time[0].parameter;
      }

      return neededElements;
    },
    {}
  );

  let imgFolder = 'day';
  if (moment().hours() > 18 && moment().hours() <= 24) {
    imgFolder = 'night';
  }

  return (
    <div className="flex flex-col min-h-screen bg-darkblue w-full lg:w-1/3 p-7 lg:p-4 xl:p-7 space-y-10 overflow-x-hidden">
      {isOpen ? (
        <SearchLocation
          onClose={() => setIsOpen(false)}
          onSetLocationName={(name) => setLocationName(name)}
          currentLocationName={locationName}
        />
      ) : (
        <>
          <div className="relative flex justify-between mb-10">
            <button
              className="static z-10 px-4 py-2 text bg-[#6E707A] hover:bg-[#6E707A]/70 text-gray-150 shadow-lg"
              onClick={() => setIsOpen(true)}
            >
              選擇其他縣市
            </button>
            <button className="static z-10 px-4 py-2 text bg-[#6E707A] hover:bg-[#6E707A]/70 text-gray-150 rounded-full shadow-lg">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>

          <div className="relative -mx-36 flex justify-center items-center max-h-40">
            <img
              src={require('../images/Cloud-background.png')}
              alt="bg"
              className="opacity-10 absolute max-w-52"
            />
            <img
              src={require(`../images/${imgFolder}/${weatherElements.Wx.parameterValue}.png`)}
              alt="weather"
              className="max-h-48"
            />
          </div>

          <div className="flex flex-col items-center justify-between flex-grow pt-6">
            <h1 className="text-gray-150 text-[144px] font-medium">
              {weatherElements.MaxT.parameterName}
              <span className="text-5xl text-gray-250">&deg;C</span>
            </h1>
            <h3 className="font-semibold text-4xl text-gray-250">
              {weatherElements.Wx.parameterName}
            </h3>
            <h3 className="font-semibold text-4xl text-gray-250">
              {weatherElements.CI.parameterName}
            </h3>
            <div className="flex flex-col items-center text-center text-gray-350 text-lg space-y-5">
              <p>
                今天 &bull;{' '}
                {moment(weatherElements.Wx.startTime).format('YYYY-MM-DD')}
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> {locationName}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
