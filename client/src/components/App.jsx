import React from 'react';
// import movieList from '../movies.js';
import Movies from './Movies.jsx';
import search from '../movieSearch.js';
import axios from 'axios';

const movieList = [];

const style = {
  border: '1px solid black',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 'auto',
  width: '300px',
  height: 'auto',
  backgroundColor: 'grey'
}

const headStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',
  textAlign: 'center'
}

const formStyle = {
  textAlign: 'center'
}

const addStyle = {
  backgroundColor: 'green'
}
// style="border:1px solid black;margin-left:auto;margin-right:auto;margin-top:250px;width:250px;height:250px" frame="void" rules="rows"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      search: '',
      add: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    axios.get('/movies')
      .then((res) => {
        this.setState({
          movies: res.data
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSearch(e) {
    e.preventDefault();
    search(this.state.search, (searched) => {
      this.setState({
        movies: searched,
        search: ''
      });
    });
  }

  handleInput(e) {
    e.preventDefault();
    let newMovie = {
      title: this.state.add
    };
    axios.post('/movies', newMovie)
      .then(() => {
        console.log('successful post');
      })
      .catch((err) => {
        throw err;
      });
    axios.get('/movies')
      .then((res) => {
        this.setState({
          movies: res.data,
          add: ''
        });
      })
      .catch((err) => {console.log(err)});
  }

  render() {
    return (
      <div>
        <h1 style={headStyle}>Movies</h1>
        <div>
          <form style={formStyle} onSubmit={this.handleInput}>
            <input type="text" name="add" value={this.state.add} onChange={this.handleChange} />
            <button style={addStyle}>Add New Movie</button>
          </form>
        </div>
        <span>
          <form style={formStyle} onSubmit={this.handleSearch}>
            <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
            <button>Search</button>
          </form>
          <table style={style} frame={"void"} rules={"rows"} >
              <Movies movies={this.state.movies} />
          </table>
        </span>
      </div>
    )
  }
}

export default App;