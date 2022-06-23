import LargeCard from './LargeCard';
import SmallCard from './SmallCard';
import moment from 'moment';

const MainContent = (props) => {
  const { locationWeatherElement } = props;
  let fiveDays = [];
  let fiveDaysMaxT = [];
  let fiveDaysMinT = [];
  console.log('locationWeatherElement = ', locationWeatherElement);

  const locationWeatherEle = locationWeatherElement.reduce(
    (neededElements, item) => {
      if (
        ['PoP12h', 'T', 'RH', 'WS', 'MaxAT', 'MinAT', 'UVI', 'WD'].includes(
          item.elementName
        )
      ) {
        neededElements[item.elementName] = item.time[0].elementValue;
      }

      return neededElements;
    },
    {}
  );

  const locatioFiveDaysWeatherEle = locationWeatherElement.reduce(
    (neededElements, item) => {
      if (['MaxT', 'MinT'].includes(item.elementName)) {
        neededElements[item.elementName] = item.time;
      }

      return neededElements;
    },
    {}
  );

  for (let i = 0; i < locatioFiveDaysWeatherEle.MaxT.length; i += 2) {
    fiveDaysMaxT.push(locatioFiveDaysWeatherEle.MaxT[i]);
  }
  for (let i = 0; i < locatioFiveDaysWeatherEle.MinT.length; i += 2) {
    fiveDaysMinT.push(locatioFiveDaysWeatherEle.MinT[i]);
  }

  const showFiveDays = () => {
    for (let i = 1; i < 6; i++) {
      fiveDays.push(
        <SmallCard
          dayTitle={moment(fiveDaysMaxT[i].startTime).format('MM-DD')}
          img="Shower"
          max={fiveDaysMaxT[i].elementValue[0].value}
          min={fiveDaysMinT[i].elementValue[0].value}
          temp="C"
        />
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-5 gap-10 justify-center">
        {fiveDays}
      </div>
    );
  };

  return (
    <div className="text-gray-150 p-10 flex-grow">
      <div className="space-x-3 text-right">
        <button className="bg-gray-150 rounded-full w-10 h-10 text-darkblue font-bold text-xl">
          &deg;C
        </button>
        <button className="bg-[#585676] rounded-full w-10 h-10 text-gray-150 font-bold text-xl">
          &deg;F
        </button>
      </div>

      {showFiveDays()}

      <div className="my-10">
        <h3 className="text-2xl font-bold mb-5">Today's Highlights</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
          <LargeCard
            title="紫外線指數"
            num={locationWeatherEle.UVI[0].value}
            desc=""
          >
            <div className="flex justify-between space-x-5 items-center">
              <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i className="fa-solid fa-umbrella-beach"></i>
              </div>
              <p className="text-gray-150 text-sm">
                {locationWeatherEle.UVI[1].value +
                  locationWeatherEle.UVI[1].measures}
              </p>
            </div>
          </LargeCard>

          <LargeCard
            title="12小時降雨機率"
            num={locationWeatherEle.PoP12h[0].value}
            desc="%"
          >
            <div className="self-stretch text-gray-250 text-xs space-y-1">
              <div className="flex justify-between space-x-5 items-center px-1">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div
                  className="bg-[#1c92d2] h-2"
                  style={{ width: locationWeatherEle.PoP12h[0].value + '%' }}
                ></div>
              </div>
              <p className="text-right">
                <i class="fa-solid fa-umbrella"></i>
              </p>
            </div>
          </LargeCard>

          <LargeCard
            title="平均相對濕度"
            num={locationWeatherEle.RH[0].value}
            desc=" %"
          >
            <div className="flex justify-between space-x-5 items-center">
              <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i class="fa-solid fa-droplet"></i>
              </div>
              <p className="text-gray-150 text-sm"></p>
            </div>
          </LargeCard>

          <LargeCard
            title="平均溫度"
            num={locationWeatherEle.T[0].value}
            desc=" &deg;C"
          >
            <div className="flex justify-between space-x-5 items-center">
              <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i class="fa-solid fa-gauge-simple"></i>
              </div>
            </div>
          </LargeCard>

          <LargeCard
            title="最高體感溫度"
            num={locationWeatherEle.MaxAT[0].value}
            desc="&deg;C"
          >
            <div className="flex justify-between space-x-5 items-center">
              <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i class="fa-solid fa-temperature-high"></i>
              </div>
            </div>
          </LargeCard>

          <LargeCard
            title="最低體感溫度"
            num={locationWeatherEle.MinAT[0].value}
            desc="&deg;C"
          >
            <div className="flex justify-between space-x-5 items-center">
              <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i class="fa-solid fa-temperature-low"></i>
              </div>
            </div>
          </LargeCard>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
