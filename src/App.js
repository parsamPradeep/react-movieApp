import React, { Component } from 'react';
import './App.css';
import Counters from './Components/counters';
import NavBar from './Components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Customers from './Components/customer';
import MovieForm from './Components/movieForm';
import Movies from './Components/movies';
import NotFound from './Components/notFound';
import Rentals from './Components/rentals';
import LoginForm from './Components/login';
import Register from './Components/register';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = id => {
    console.log(id);
    const counters = this.state.counters.filter(m => m.id !== id);
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          countersCount={this.state.counters.filter(c => c.value !== 0).length}
        />
        <main className="container">
          {/* <Counters 
        onDelete={this.handleDelete} 
        onIncrement={this.handleIncrement}
        onReset={this.handleReset} 
        onDecrement={this.handleDecrement}
        counters={this.state.counters}/> */}
          <Switch>
            <Route path="/customers" component={Customers} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={Register} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/movies" component={Movies} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
