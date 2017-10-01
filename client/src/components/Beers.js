import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Image, Divider } from 'semantic-ui-react';

let { id, name, images = {} } = brewery;

class Beers extends React.Component {
  state = brewery_db.beers.all
  // write call beers function
  componentDidMount() {
    axios.get('/api/all_beers')
      .then (res => {this.setState({ beers: res.data })}
    )
      .catch( error => {
        console.log(error.response);
    });
  }

  show = () => {
    <div>
      {this.state.beers.map( b =>
        <div> key={b.id}>
          <Link to={`beers/${b.id}`}>
            {b.name}
            {' '}
          </Link>
        </div>
      )}
    </div>
  }

  render() {
    const { showForm } = this.state;
    let { beers } = this.state;
    
    return(
      <div>
        {this.state.all_beers.map( b =>
        <div> key={b.id}>
            {b.name}
            {' '}
        </div>
      )}
      </div>
    )
  }
}

export default Beers;