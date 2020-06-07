import React from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country : '',
      date : '',
      formValue : '',
      default : 'totals?format=json'
    }
  }

  fetchData(country = null) {
    const url = 'https://covid-19-data.p.rapidapi.com/';
    const method = 'GET';
    const headers = {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "6773226ebamsh91f290dfb4363d2p1362eajsn616f5bb09e42"
    };
    const defaultQuery = 'totals?format=json';
  
    if (null === country || '' === country) {
      fetch(url + defaultQuery, {
        "method" : method,
        "headers" : headers
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data[0]
        });
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      const query = "country?format=json&name=" + country
  
      fetch(url + query, {
        "method" : method,
        "headers" : headers
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data[0],
          country: country
        });
      })
      .catch(err => {
        console.log(err);
      })
    }
  
  }

  componentDidMount() {
    this.fetchData();
  }

  handleSubmit(event){
    this.fetchData(event.country);
    this.setState({
      country: event.country
    });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main
        data={this.state.data} formValue={this.state.formValue} onSubmit={(event) => this.handleSubmit(event)} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
