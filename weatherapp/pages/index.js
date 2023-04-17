// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import React, { useState, useEffect } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [delhi, setDelhi] = useState();
  const [newYork, setNewYork] = useState();
  const [london, setLondon] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (query) => {
    let weather = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=0435c30116644e0aa1f164717231504&q=" +
        query
    );
    let response = await weather.json();
    if (Object.keys(response).includes("error")) {
    }
    return response;
  };
  useEffect(() => {
    async function fetchData() {
      let delhi = await fetchWeather("New delhi");
      setDelhi(delhi);
      let newYork = await fetchWeather("New York");
      setNewYork(newYork);
      let london = await fetchWeather("London");
      setLondon(london);
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="bg-blue-200  text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            {weather && query.length > 0 && (
              <div className="mb-4">
                The weather of {query} is {weather && weather.current.temp_c}{" "}
                &#8451; and the wind speed is {weather.current.wind_mph} mph
              </div>
            )}
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEo0r_wo8KarZgzQekA72XQNBGgLNK9Zn2bWn1MTIfkQ&usqp=CAU&ec=48600112"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Delhi ({delhi && delhi.current.temp_c} &#8451;)
              </h2>
              <div className="text-base leading-relaxed mt-2">
                {delhi && (
                  <div>
                    The Weather in New Delhi is and the wind speed is
                    {delhi.current.wind_mph} mph
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://www.thetrainline.com/cms/media/1376/uk-london-tower-bridge-river-thames.jpg?mode=crop&width=800&height=800&quality=70"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                London ({london && london.current.temp_c}&#8451;)
              </h2>
              <div className="text-base leading-relaxed mt-2">
                {london && (
                  <div>
                    The Weather in London is and the wind speed is{" "}
                    {london.current.wind_mph} mph
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                New York ( {newYork && newYork.current.temp_c}&#8451;)
              </h2>
              <div className="text-base leading-relaxed mt-2">
                {newYork && (
                  <div>
                    The Weather in New York is and the wind speed is
                    {newYork.current.wind_mph}mph
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Elon_Musk_Brazil_2022.png/1200px-Elon_Musk_Brazil_2022.png"
                    alt="elon musk"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Elon Musk
                  </h2>
                  <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    "Since using this weather app, I've never been caught off
                    guard by the elements again. The accuracy and reliability of
                    its forecasts are unmatched, and the user interface is
                    simple and easy to navigate. Highly recommended for anyone
                    looking to stay informed about the weather."
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  This weather app is the perfect tool for anyone who wants to
                  stay informed about weather conditions. With its accuracy and
                  reliability, you can trust the forecasts it provides for your
                  location and other areas of interest. The app features current
                  weather conditions, as well as hourly and daily forecasts, so
                  you can plan your day accordingly. You can also view radar and
                  satellite maps to get a better understanding of what the
                  weather will be like in your area. One of the standout
                  features of this app is its ability to provide severe weather
                  alerts. These alerts are critical during extreme weather
                  events, and the app ensures you have access to the latest
                  information to keep you safe and informed. In addition to its
                  functionality, the app has a user-friendly interface that
                  makes it easy to navigate. You can customize your settings,
                  such as temperature units and language preferences, to tailor
                  your experience to your needs. Overall, this weather app is a
                  must-have for anyone who wants to stay ahead of the weather.
                  Whether you're planning a day out or need to be aware of any
                  potential weather hazards, this app has you covered. Its
                  combination of accuracy, reliability, and user-friendliness
                  makes it one of the best weather apps on the market. Download
                  it today to experience its many benefits for yourself.
                </p>
                {/* <a className="text-blue-500 inline-flex items-center">
                  Learn More */}
                {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg> */}
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
