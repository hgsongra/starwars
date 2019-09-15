import React, { Component } from "react";
import axios from "axios";
import ReactTooltip from "react-tooltip";

export class ItemFilm extends Component {
  state = { chars: "" };
  fetchCharactersBio = () => {
    let data = [];
    this.props.film.characters.forEach(row => {
      axios
        .get(row)
        .then(response => {
          data.push(response.data.name);
          this.setState({
            chars: data.join(",")
          });
        })
        .catch(error => {
          console.log("ERROR", error);
        });
    });
    console.log(data.join(","));
    console.log(this.state.chars);
  };

  componentDidMount = () => {
    this.fetchCharactersBio();
  };

  render() {
    const { film, favFilmsHandler } = this.props;
    let btnClass = `ml-2 btn btn-${film.isFav ? "danger" : "primary"}`,
      ttid = `TT-${film.episode_id}`;
    return (
      <>
        <li
          data-tip=''
          data-for={ttid}
          className='list-group-item p-3'
          key={film.episode_id}>
          <a href={`/films/${film.episode_id}`}>{film.title}</a>
          <ReactTooltip id={ttid} place='top' type='dark' effect='solid'>
            {this.state.chars || "Loading..."}
          </ReactTooltip>

          <button
            type='button'
            className={btnClass}
            onClick={() => favFilmsHandler(film.episode_id)}>
            {film.isFav ? "UnFavorite" : "Favorite"}
          </button>
        </li>
      </>
    );
  }
}

export default ItemFilm;
