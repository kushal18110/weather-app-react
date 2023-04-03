import React, { useState, useEffect } from "react";

import axios from "axios";
import { data } from "autoprefixer";

const Main = () => {
  const [location, setLocation] = useState("");
  const [apiData, setApiData] = useState({});
  const [time, setTime] = useState("");

  useEffect(() => {
    const day = new Date();
    const dayName = { weekday: "long" };
    const weekday = day.toLocaleDateString("en-US", dayName);
    setTime(weekday);
    console.log(time);
  });

  const searchLocationHandler = (event) => {
    event.preventDefault();
    axios.get(url).then((response) => {
      setApiData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };
   let backStyle = {};
  // if (apiData.weather ? apiData.weather[0].description === "clear sky" : null) {
  //   backStyle = {
  //     backgroundImage:
  //       "url(https://img.freepik.com/free-photo/beautiful-mountain-blue-sky-rice-fields-foreground-nakhon-sawan-province-north-thailand_1150-15412.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais)",
  //   };
  // } else if (
  //   apiData.weather ? apiData.weather[0].description === "smoke" : null
  // ) {
  //   backStyle = {
  //     backgroundImage:
  //       "url(https://img.freepik.com/free-photo/landscape-mountains_198169-244.jpg?w=740&t=st=1680455033~exp=1680455633~hmac=3f72ee9960d2ba5e526ee004537288a7083ef4897b9bade95fa39435d5246244)",
  //   };
  // } else if (
  //   apiData.weather ? apiData.weather[0].description === "haze" : null
  // ) {
  //   backStyle = {
  //     backgroundImage:
  //       "url(https://img.freepik.com/free-photo/landscape-mountains_198169-244.jpg?w=740&t=st=1680455033~exp=1680455633~hmac=3f72ee9960d2ba5e526ee004537288a7083ef4897b9bade95fa39435d5246244)",
  //   };
  // } else if (
  //   apiData.weather ? apiData.weather[0].description === "rain" : null
  // ) {
  //   backStyle = {
  //     backgroundImage:
  //       "url(https://img.freepik.com/free-photo/rain-effect-nature-background_23-2148099046.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais)",
  //   };
  // } else if (
  //   apiData.weather ? apiData.weather[0].description === "snow" : null
  // ) {
  //   backStyle = {
  //     backgroundImage:
  //       "url(https://img.freepik.com/free-photo/beautiful-shot-amazing-scenery-snow-covered-countryside-pennsylvania_181624-4894.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais)",
  //   };
  // } else if (
  //   apiData.weather ? apiData.weather[0].description === "mist" : null
  // ) {
  //   backStyle = {
  //     backgroundImage:
  //       "url(https://img.freepik.com/free-photo/vertical-shot-dried-grass-ground-cloudy-sky_181624-18592.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.2.1322900918.1679057571&semt=ais)",
  //   };
  // } else if (
  //   apiData.weather ? apiData.weather[0].description === "thunderstrom" : null
  // ) {
  //   backStyle = {
  //     backgroundImage:
  //       "url(https://img.freepik.com/free-photo/weather-effects-composition_23-2149853310.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais)",
  //   };
  // } else {
  //   backStyle = {
  //     backgroundImage:"url(./images/back-default.jpg)"
  //   }
  // }
  let iconImage = {};

  if (apiData.weather ? apiData.weather[0].description === "clear sky" : null) {
    iconImage = {
      url: "./images/clear-sky.png",
    };
  } else if (
    apiData.weather ? apiData.weather[0].description === "rain" : null
  ) {
    iconImage = {
      url: "./images/rain.png",
    };
  } else if (
    apiData.weather ? apiData.weather[0].description === "snow" : null
  ) {
    iconImage = {
      url: "./images/snow.png",
    };
  } else if (
    apiData.weather ? apiData.weather[0].description === "thunderstrom" : null
  ) {
    iconImage = {
      url: "./images/storm.png",
    };
  } else if (
    apiData.weather ? apiData.weather[0].description === "smoke" : null
  ) {
    iconImage = {
      url: "./images/smoke.png",
    };
  } else {
    iconImage = {
      url: "./images/clouds.png",
    }
  }

  let windIcon = {
    url: "./images/wind.png",
  };
  let humidityIcon = {
    url: "./images/drop.png",
  };
  let tempIcon = {};
  if(apiData.main ? apiData.main.temp <= 5 : null){
    backStyle={
      backgroundImage:"url(./images/cold-back-vector.jpg)"
    }
    tempIcon={
      url: "./images/temperature.png",
    }
    
  }else if(apiData.main ? apiData.main.temp >= 5 : null){
    backStyle={
      backgroundImage:"url(./images/red-back-vector.jpg)"
    }
    tempIcon={
      url: "./images/high-temperature.png",
    }

  }else if(apiData.weather ? apiData.weather[0].description === 'rain' :null){
    backStyle={
      backgroundImage:"url(./images/rain-back-vector.jpg)"
    }

  }
  else {
    backStyle={
      backgroundImage:"url(./images/default-vector.jpg)"
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=79aea58432fcfc27ddfb1943d84a29e8`;

  return (
    <div>
      <div
        className="  pr-3 pl-3 bg-cover max-w-[450px] mt-2 mb-2 h-[100vh]  mx-auto "
        style={backStyle}
      >
        <form
          action=""
          onSubmit={searchLocationHandler}
          className="flex justify-center pt-6"
        >
          <input
            type="text "
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            className="  bg-slate-200 rounded-[20px] text-sm p-2   placeholder:p-2 shadow-lg placeholder:text-sm "
            placeholder="Enter Location"
          />
        </form>

        <div className=" text-center pt-2 text-sm">
          {apiData.main ? <h2 className="text-white ">{time}</h2> : null}
        </div>
        <div className="flex flex-col gap-[200px]  pt-10">
          <div className=" flex flex-col gap-2 pt-5   ">
            {apiData ? (
              <h1 className=" text-2xl text-white">{apiData.name}</h1>
            ) : null}
            {apiData.main ? (
              <div>
                <p className="text-7xl font-bold text-white">
                  {apiData.main.temp} C
                </p>
              </div>
            ) : null}
            {apiData.weather ? (
              <div className="flex gap-3 pt-5">
                <p className="text-2xl text-white">
                  {apiData.weather[0].description}
                </p>
                <p>
                  <img className="w-9 h-9" src={iconImage.url} alt="" />
                </p>
              </div>
            ) : null}
          </div>
          {apiData.main ? (
            <div className="flex p-2 items-center border-2 max-w-[450px] bg-[rgba(255,255,255,.3)] justify-around rounded-lg">
              <div className=" border-r-2 pr-5 text-center">
                {apiData.wind ? (
                  <div className="flex flex-col items-center  gap-">
                    <img className="w-7 h-7" src={windIcon.url} alt="" />
                    <p className="text-lg font-bold text-gray-600">
                      {apiData.wind.speed} MPH
                    </p>
                    <p>Wind speed</p>
                  </div>
                ) : null}
              </div>
              <div className="">
                {apiData.main ? (
                  <div className="text-center items-center flex flex-col  ">
                    <img className="w-7 h-7 " src={humidityIcon.url} alt="" />
                    <p className="text-lg font-bold text-gray-600">
                      {apiData.main.humidity} %
                    </p>
                    <p>Humidity</p>
                  </div>
                ) : null}
              </div>
              <div className=" text-center border-l-2 pl-5">
                {apiData.main ? (
                  <div className="flex flex-col items-center">
                    <img className="w-7 h-7" src={tempIcon.url} alt="" />
                    <p className="text-lg font-bold text-gray-600">
                      {apiData.main.temp_min} C
                    </p>{" "}
                    <div>Min</div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Main;
