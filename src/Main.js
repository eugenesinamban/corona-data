import React from 'react';
import './style.css';

function CountryForm(props) {
  return (
    <input name="country" placeholder="Enter country name" value={props.data.formValue} onChange={(event) => props.onChange(event.target.value)} />
  );
}

function Main(props) {
  // console.log(props);
  if (undefined !== props.data) {
    const data = props.data;
    return (
      <main>
        <CountryForm onChange={props.handleChange} data={props} />
        <h3><span className="capitalize">{props.data.country}</span> as of {props.data.lastUpdate}</h3>
        <ul>
          <li>{"Confirmed cases: " + props.data.confirmed.toLocaleString()}</li>
          <li>{"Critical condition: " + props.data.critical.toLocaleString()}</li>
          <li>{"Number of deaths: " + props.data.deaths.toLocaleString()}</li>
          <li>{"Number of recovered patients: " + props.data.recovered.toLocaleString()}</li>
        </ul>
      </main>
    )
  }
  console.log(props);
  return (
    <main>
      <CountryForm onChange={(i) => props.onChange(i)} data={props} />
      <p>No Data Given</p>
    </main>
  );
  
}

export default Main;