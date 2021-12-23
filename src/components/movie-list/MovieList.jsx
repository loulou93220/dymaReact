import React, { Component } from "react";
import MovieElement from "./MovieElement";
export default class MovieList extends React.Component {
  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap align-content-strat">
        <MovieElement
          movie={this.props.movies[0]}
          updateSelectedMovie={this.props.updateSelectedMovie}
        />
        <MovieElement
          movie={this.props.movies[1]}
          updateSelectedMovie={this.props.updateSelectedMovie}
        />
        <MovieElement
          movie={this.props.movies[2]}
          updateSelectedMovie={this.props.updateSelectedMovie}
        />
      </div>
    );
  }
}
