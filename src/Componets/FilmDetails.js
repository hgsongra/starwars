import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export class FilmDetails extends Component {
  state = {
    film: {},
    characters: [],
    starships: [],
    vehicles: [],
    species: [],
    error: false
  };

  componentDidMount = () => {
    const { params } = this.props.match;
    let data = {};
    axios
      .get(`https://swapi.co/api/films/${params.episode_id}`)
      .then(response => {
        this.setState({
          film: response.data
        });
        return response;
      })
      .then(response => {
        ["characters", "planets", "starships", "vehicles", "species"].forEach(
          keyName => {
            data[keyName] = [];
            response.data[keyName].forEach(row => {
              axios
                .get(row)
                .then(response => {
                  data[keyName].push(response.data);
                  this.setState(data);
                })
                .catch(error => {
                  console.log("ERROR", error);
                });
            });
          }
        );
      })
      .catch(error => {
        this.setState({ error: true });
      });
  };

  render() {
    const {
      error,
      film,
      characters,
      planets,
      starships,
      vehicles,
      species
    } = this.state;
    return (
      <div>
        <Header error={error} film={film} />
        <div className='container'>
          <div className='main'></div>
          {/* <div className='row mt-3'></div> */}
          <div className='row mt-3'>
            {error ? (
              <h1>NOT FOUND</h1>
            ) : (
              <div className='card'>
                <div className='card-body'>
                  <h4 className='card-title'>{film.title}</h4>
                  <h5 className='card-title'>
                    Director: {film.director}, Producer: {film.producer}
                  </h5>
                  <p className='card-text'>{film.opening_crawl}</p>
                  <div className='row'>
                    <div className='col'>
                      <h4 className='card-title'>Characters</h4>
                      <ul className='list-group'>
                        {(characters || []).map(character => {
                          return (
                            <li
                              className='list-group-item p-3'
                              key={character.url}>
                              {character.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className='col'>
                      <h4 className='card-title'>Starships</h4>
                      <ul className='list-group'>
                        {(starships || []).map(starship => {
                          return (
                            <li
                              className='list-group-item p-3'
                              key={starship.url}>
                              {starship.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className='col'>
                      <h4 className='card-title'>Planets</h4>
                      <ul className='list-group'>
                        {(planets || []).map(planet => {
                          return (
                            <li
                              className='list-group-item p-3'
                              key={planet.url}>
                              {planet.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className='col'>
                      <h4 className='card-title'>Vehicles</h4>
                      <ul className='list-group'>
                        {(vehicles || []).map(vehicle => {
                          return (
                            <li
                              className='list-group-item p-3'
                              key={vehicle.url}>
                              {vehicle.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className='col'>
                      <h4 className='card-title'>Species</h4>
                      <ul className='list-group'>
                        {(species || []).map(spec => {
                          return (
                            <li className='list-group-item p-3' key={spec.url}>
                              {spec.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FilmDetails;
