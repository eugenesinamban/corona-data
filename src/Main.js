import React from 'react';
import { useForm } from 'react-hook-form';

function CountryForm(props) {

  const {register, handleSubmit} = useForm();
  const onSubmit = data => props.onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="country" placeholder="Enter country name" ref={register} className="input" />
      <input className="button" type="submit"/>
    </form>
  );
}

function Main(props) {
  console.log(props);
  let result = 'Please enter proper country name';
  if (undefined !== props.data) {
    const data = props.data;
    result = (
      <div>
        <h3 id="result-title"><span className="capitalize">{data.country ?? 'World Totals'}</span></h3>
        <ul>
          <li>{"Confirmed cases: " + data.confirmed.toLocaleString()}</li>
          <li>{"Critical condition: " + data.critical.toLocaleString()}</li>
          <li>{"Number of deaths: " + data.deaths.toLocaleString()}</li>
          <li>{"Number of recovered patients: " + data.recovered.toLocaleString()}</li>
        </ul>
      </div>
    );
  }
  return (
    <main>
      <CountryForm data={props} onSubmit={(event) => props.onSubmit(event)} />
      <div id="search-result">{ result }</div>
      <div id="provider">Api provided by <a href="https://rapidapi.com/Gramzivi/api/covid-19-data" className="link" target="_blank" rel="noopener noreferrer">https://rapidapi.com/Gramzivi/api/covid-19-data</a></div>
    </main>
  );
  
}

export default Main;