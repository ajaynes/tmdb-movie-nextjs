// const mediaType = 'movie' // options: movie, tv, person, all
//   const timeWindow = 'day' // options: day, week

//   // endpoints
// //   const trending = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${process.env.NEXT_API_KEY}`

  export const fetchHelper = (url: string | URL | Request) => {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log((data)));
  }
