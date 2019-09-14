import React, { Component } from "react";
import axios from "axios";

export class Film extends Component {
  state = {
    films: [],
    displayFilms: []
  };

  fetchFilms = () => {
    return axios.get("https://swapi.co/api/films/").then(response => {
      this.setState({
        films: response.data.results,
        displayFilms: response.data.results
      });
    });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  searchHandler = event => {
    let searcjQery = event.target.value.toLowerCase(),
      displayFilms = this.state.films.filter(el => {
        let searchValue = el.title.toLowerCase();
        return searchValue.indexOf(searcjQery) !== -1;
      });
    this.setState({
      displayFilms: displayFilms
    });
  };

  render() {
    return (
      <div>
        <div className='row mt-3'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            onChange={this.searchHandler}
          />
        </div>
        <div className='row mt-3'>
          <ul className='list-group'>
            {this.state.displayFilms.map(film => {
              return (
                <li className='list-group-item p-3' key={film.episode_id}>
                  {film.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Film;
