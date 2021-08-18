import React, { Component } from 'react';

class TableHeader extends Component {
  renderSortIcon = column => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === 'asc')
      return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort desc" />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columnHeader.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSorting(column.path)}
              style={{ cursor: 'pointer' }}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
  raiseSorting = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };
}

export default TableHeader;
