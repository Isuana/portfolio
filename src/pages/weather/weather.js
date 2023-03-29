import './weather.css';

const Weather = () => {

  const availableCities = [
    { city: "warszawa", latitude: 52.23, longitude: 21.01 },
    { city: "kraków", latitude: 50.06, longitude: 19.94 },
    { city: "poznań", latitude: 52.41, longitude: 16.93 },
    { city: "gdańsk", latitude: 54.35, longitude: 18.65 },
    { city: "szczecin", latitude: 53.43, longitude: 14.55 },
  ]

  fetch('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&hourly=temperature_2m&current_weather=true')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div >

      <div className='position'>
        <label>Miasto</label>
        <select>
          <option>Warszawa</option>
          <option>Kraków</option>
          <option>Poznań</option>
          <option>Gdańsk</option>
          <option>Szczecin</option>
        </select>

        <div>
          <input type='button' value='Sprawdź' onClick={Weather} />
        </div>
      </div>

    </div>
  );
}

export default Weather;
