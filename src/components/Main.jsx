import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=79aea58432fcfc27ddfb1943d84a29e8`;

  return (
    <div>
      <div className=" bg-[url('https://img.freepik.com/free-photo/beautiful-mountains_181624-389.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais')] pr-3 pl-3 bg-cover max-w-[450px] mt-2 mb-2 h-[100vh]  mx-auto "  >
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
            {apiData ? <h1 className=" text-2xl text-white">{apiData.name}</h1> : null}
            {apiData.main ? (
              <p className="text-7xl font-bold text-white">{apiData.main.temp} C</p>
            ) : null}
            {apiData.weather ? (
              <p className="text-2xl text-white">{apiData.weather[0].description}</p>
            ) : null}
          </div>
          {apiData.main ? (
            <div className="flex p-2 items-center border-2 max-w-[450px] bg-[rgba(255,255,255,.3)] justify-around rounded-lg">
              <div className=" border-r-2 pr-5 text-center">
                {apiData.wind ? (
                  <div className="flex flex-col  gap-2">
                    <p className="text-lg font-bold text-white">{apiData.wind.speed} MPH</p>
                    <p>Wind speed</p>
                  </div>
                ) : null}
              </div>
              <div className="">
                {apiData.main ? (
                  <div className="text-center flex flex-col  gap-2">
                    <p  className="text-lg font-bold text-white">{apiData.main.humidity} %</p>
                    <p>Humidity</p>
                  </div>
                ) : null}
              </div>
              <div className=" text-center border-l-2 pl-5">
                {apiData.main ? (
                  <div className="flex flex-col  gap-2">
                    <p  className="text-lg font-bold text-white">{apiData.main.temp_min} C</p> <div>Min</div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Main;
