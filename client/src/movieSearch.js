import axios from 'axios';

var search = (target, callback) => {
  let movieArray = [];
  let result = [];
  let count = 0;
  let noMovies = [
    {
      title: 'No Movies Found'
    }
  ];
  target = target.toUpperCase();

  axios.get('/movies')
    .then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].title.toUpperCase().includes(target)) {
          result.push(res.data[i]);
          count++;
        }
      }
      if (count === 0) {
        callback(noMovies);
      } else {
        callback(result);
      }
    })
    .catch((err) => {console.log(err)});

}

export default search;