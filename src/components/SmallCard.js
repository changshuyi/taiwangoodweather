import moment from 'moment';

const SmallCard = (props) => {
  const { dayTitle, img, min, max, temp } = props;

  let imgFolder = 'day';
  // if (moment().hours() > 18 && moment().hours() <= 24) {
  //   imgFolder = 'night';
  // }
  return (
    <div className="bg-darkblue py-4 px-5 flex flex-col items-center space-y-4">
      <p>{dayTitle}</p>
      <img
        src={require(`../images/${imgFolder}/${img}.png`)}
        alt="weather-icon"
        className="max-h-16"
      />

      <div className="flex justify-between space-x-5">
        <p>
          {max}&deg;{temp}
        </p>
        <p className="text-gray-250">
          {min}&deg;{temp}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
