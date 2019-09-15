import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export class FilmDetails extends Component {
  state = {
    film: {},
    moreDetails: {},
    error: false
  };
  componentDidMount = () => {
    const { params } = this.props.match;
    axios
      .get(`https://swapi.co/api/films/${params.episode_id}`)
      .then(response => {
        return response;
      })
      .then(response => {
        let data = {};
        ["characters", "planets", "starships", "vehicles", "species"].forEach(
          keyName => {
            data[keyName] = [];
            response.data[keyName].forEach(row => {
              axios
                .get(row)
                .then(response => {
                  data[keyName].push(response.data);
                })
                .catch(error => {
                  console.log("ERROR", error);
                });
            });
          }
        );
        this.setState({
          film: response.data,
          moreDetails: data
        });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  };

  render() {
    const { error, film } = this.state;
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
                  {/* characters */}
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>characters</h4>
                      <ul>
                        <li>{JSON.stringify(this.state.moreDetails)}</li>
                        <li>1</li>
                        <li>1</li>
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
