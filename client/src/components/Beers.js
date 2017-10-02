import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Image, Divider } from 'semantic-ui-react';

class Beers extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    }}

  // bring in data from api
  componentDidMount() {
    // error message: "No 'Access-Control-Allow-Origin'"
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://api.brewerydb.com/v2/?results=50'
    fetch(proxyUrl + targetUrl)
      .then(results => {
        return results.json();
      }).then(data => {
        let beers = data.results.map((beer) => {
          return(
            <div key={beer.results}>
            </div>
        )
      })
      .catch( e => console.log(e.response.data.errors))
      this.setState({ beers: beers });
      console.log("state", this.state.beers);
    })
  };

  // show = () => {
  //   <div>
  //     {/* {this.state.beers.map( b =>
  //       <div> key={b.id}>
  //         <Link to={`beers/${b.id}`}>
  //           {b.name}
  //           {' '}
  //         </Link>
  //       </div>
  //     )} */}
  //   </div>
  // }

  render() {
    return(
      <div>
        Beers component
        {this.state.beers}
      </div>
    )}
}

export default Beers;