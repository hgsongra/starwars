import React, { Component } from "react";
import axios from "axios";
import ls from "local-storage";
export class Film extends Component {
  state = {
    films: [],
    displayFilms: [],
    favFilms: ls.get("favFilmIds") || []
  };

  fetchFilms = () => {
    axios.get("https://swapi.co/api/films/").then(response => {
      this.setState({
        films: response.data.results,
        displayFilms: response.data.results
      });
      if (this.state.favFilms.length > 0) {
        this.state.favFilms.forEach(id => {
          let film = this.state.displayFilms.find(function(f) {
            return f.episode_id === id;
          });
          film.isFav = true;
        });
        this.setState({ displayFilms: this.state.displayFilms });
        this.sortFilmsByFav();
      }
    });
  };

  sortFilmsByFav = () => {
    let sortedFilms = this.state.displayFilms
      .sort(function(film) {
        return film.isFav ? 1 : -1;
      })
      .reverse();
    this.setState({ displayFilms: sortedFilms });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  searchHandler = event => {
    let searhChars = event.target.value.toLowerCase(),
      displayFilms = this.state.films.filter(el => {
        let searchValue = el.title.toLowerCase();
        return searchValue.indexOf(searhChars) !== -1;
      });
    this.setState({
      displayFilms: displayFilms
    });
  };

  favFilmsHandler = id => {
    let film = this.state.displayFilms.find(function(f) {
      return f.episode_id === id;
    });
    film.isFav = !film.isFav;
    if (film.isFav) {
      this.state.favFilms.push(id);
      alert(film.title + "is added to favorite");
    } else {
      this.state.favFilms = this.state.favFilms.filter(fid => fid !== id);
    }
    this.setState({
      displayFilms: this.state.displayFilms,
      favFilms: this.state.favFilms
    });
    ls.set("favFilmIds", this.state.favFilms);
    this.sortFilmsByFav();
  };

  render() {
    return (
      <div>
        <div className='row mt-3'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search by Film name'
            onChange={this.searchHandler}
          />
        </div>
        <div className='row mt-3'>
          <ul className='list-group'>
            {this.state.displayFilms.map(film => {
              let btnClass = `ml-2 btn btn-${
                film.isFav ? "danger" : "primary"
              }`;
              return (
                <li className='list-group-item p-3' key={film.episode_id}>
                  <a href={`/films/${film.episode_id}`}>{film.title}</a>
                  <button
                    type='button'
                    className={btnClass}
                    onClick={() => this.favFilmsHandler(film.episode_id)}>
                    {film.isFav ? "UnFavorite" : "Favorite"}
                  </button>
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
