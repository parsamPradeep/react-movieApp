import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from '../common/likes';
import TableHeader from '../common/tableHeader';
import TableBody from '../common/tableBody';
class MoviesTable extends Component {
  render() {
    const { movies, numOfMovies } = this.props;
    const columnHeader = [
      {
        label: 'Title',
        path: 'name',
        content: movie => <Link to={`/movies/${movie._id}`}>{movie.name}</Link>
      },
      { label: 'Genre', path: 'genre.name' },
      { label: 'Price', path: 'price' },
      { label: 'Rate', path: 'rate' },
      {
        key: 'like',
        content: movie => (
          <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        )
      },
      {
        key: 'delete',
        content: movie => (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        )
      }
    ];
    return (
      <div>
        <p>Showing {numOfMovies} movies from database</p>
        <table className="table">
          <TableHeader
            columnHeader={columnHeader}
            sortColumn={this.props.sortColumn}
            onSort={this.props.onSort}
          />
          <TableBody data={movies} columns={columnHeader} />
        </table>
      </div>
    );
  }
}

export default MoviesTable;
