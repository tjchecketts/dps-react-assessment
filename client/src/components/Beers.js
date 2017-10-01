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
    fetch('http://api.brewerydb.com/v2/?results=50')
    .then (results => {
      return results.json();
    })
    .then(data => {
      let beers = data.results.map((beers) => {
        return(
          <div key={beers.results}>
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