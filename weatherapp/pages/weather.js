import React, { useState, useEffect } from "react";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [delhi, setDelhi] = useState();
  const [newYork, setNewYork] = useState();
  const [london, setLondon] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (query) => {
    let weather = await fetch ("http://api.weatherapi.com/v1/current.json?key=0435c30116644e0aa1f164717231504&q="+query)
    let response = await weather.json();
    if (Object.keys(response).includes("error")){

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

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length<=0 ) {
        setWeather(undefined)
    }
  };

  const handleClick = async (e) => {
    let w = await fetchWeather(query);
    setWeather(w);
   
  };

  return (
    <div className="container mx-auto bg-red-50">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-blue-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Best Weather App Ever
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Search For Location & We Will Fetch Weather For You
              </p>
              <input
                value={query}
                onChange={handleChange}
                className="w-full border rounded-md border-blue-500 border-x py-1 m-2"
                type="text"
                name="search"
                id="search"
              />
              <button
                onClick={handleClick}
                className="flex mx-3 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
              >
                Search weather
              </button>
            </div>
          { (weather && query.length>0) &&  <div className="mb-4">
              The weather of {query} is {weather && weather.current.temp_c} &#8451; and the wind speed is {" "} 
                    {weather.current.wind_mph} mph
            </div>}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weather;
