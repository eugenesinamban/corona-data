import React from 'react';
// import Header from './Header';
import Main from './Main';
// import Footer from './Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country : '',
      date : '',
      formValue : ''
    }
  }

  componentDidMount() {
    fetch("https://covid-19-data.p.rapidapi.com/country?format=json&name=" + this.state.country, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "6773226ebamsh91f290dfb4363d2p1362eajsn616f5bb09e42"
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleSubmit(event){
    fetch("https://covid-19-data.p.rapidapi.com/country?format=json&name=" + event.country, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "6773226ebamsh91f290dfb4363d2p1362eajsn616f5bb09e42"
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data[0],
        country: event.country
      });
    })
    .catch(err => {
      console.log(err);
    });
    this.setState({
      country: event.country
    });
    
    console.log('success fuckers');
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        {/* <Header></Header> */}
        <Main
        data={this.state.data} formValue={this.state.formValue} onSubmit={(event) => this.handleSubmit(event)} />
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
