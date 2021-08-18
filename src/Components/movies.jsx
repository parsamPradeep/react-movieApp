import React, { Component } from 'react';
import MoviesTable from '../Components/moviesTable';
import Pagination from '../common/pagination';
import paginate from '../utils/paginate.js';
import ListGroup from '../common/listGroup';
import _ from 'lodash';
class Movies extends Component {
  state = {
    movies: [
      {
        _id: 1,
        name: 'Avengers',
        genre: { _id: 1, name: 'Action' },
        price: 2.5,
        rate: 4.4,
        liked: true
      },
      {
        _id: 2,
        name: 'Mission-Impossible',
        genre: { _id: 2, name: 'Comedy' },
        price: 3.5,
        rate: 4.5,
        liked: true
      },
      {
        _id: 3,
        name: 'Gravity',
        genre: { _id: 3, name: 'Horror' },
        price: 4.5,
        rate: 4.6,
        liked: false
      },
      {
        _id: 4,
        name: 'Expandables',
        genre: { _id: 4, name: 'Drama' },
        price: 2.6,
        rate: 3.4,
        liked: false
      },
      {
        _id: 5,
        name: 'Krish',
        genre: { _id: 1, name: 'Action' },
        price: 3.6,
        rate: 2.4,
        liked: true
      },
      {
        _id: 6,
        name: 'Dhoom',
        genre: { _id: 3, name: 'Horror' },
        price: 4.6,
        rate: 3.5,
        liked: true
      },
      {
        _id: 7,
        name: 'Star war',
        genre: { _id: 4, name: 'Drama' },
        price: 2.7,
        rate: 4.2,
        liked: true
      }
    ],
    genres: [
      { _id: '', name: 'All Genres' },
      { _id: 1, name: 'Action' },
      { _id: 2, name: 'Comedy' },
      { _id: 3, name: 'Horror' },
      { _id: 4, name: 'Drama' }
    ],
    pageSize: 4,
    countPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };

  render() {
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            m => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;
    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    const movies = paginate(sorted, this.state.countPage, this.state.pageSize);

    if (this.state.movies.length === 0)
      return <p>There are no movies in the database</p>;
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleOnGenresSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            numOfMovies={filtered.length}
            onSort={this.handleSorting}
            sortColumn={this.state.sortColumn}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            countPage={this.state.countPage}
          />
        </div>
      </div>
    );
  }
  handleDelete = movie => {
    let movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handlePageChange = page => {
    this.setState({ countPage: page });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleOnGenresSelect = genre => {
    this.setState({ selectedGenre: genre, countPage: 1 });
  };
  handleSorting = sortColumn => {
    this.setState({ sortColumn });
  };
}

export default Movies;
