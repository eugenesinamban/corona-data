import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

function CountryForm(props) {

  const {register, handleSubmit} = useForm();
  const onSubmit = data => props.onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="country" placeholder="Enter country name" ref={register} />
      <input type="submit"/>
    </form>
  );
}

function Main(props) {
  if (undefined !== props.data) {
    const data = props.data;
    return (
      <main>
        <CountryForm data={props} onSubmit={(event) => props.onSubmit(event)} />
        <h3><span className="capitalize">{props.data.country}</span> as of {data.lastUpdate}</h3>
        <ul>
          <li>{"Confirmed cases: " + data.confirmed.toLocaleString()}</li>
          <li>{"Critical condition: " + data.critical.toLocaleString()}</li>
          <li>{"Number of deaths: " + data.deaths.toLocaleString()}</li>
          <li>{"Number of recovered patients: " + data.recovered.toLocaleString()}</li>
        </ul>
      </main>
    )
  }
  return (
    <main>
      <CountryForm data={props} onSubmit={(event) => props.onSubmit(event)} />
      <p>No Data Given</p>
    </main>
  );
  
}

export default Main;