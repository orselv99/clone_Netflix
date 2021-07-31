// const fetch = (language?: string): any => {
//   // tmdb 에서 제공하는 API 를 사용
//   // https://developers.themoviedb.org/3/getting-started/introduction
//   const API_KEY = "d8bead3967d226604e175cad5d8de29d";

//   return {
//     trending: `/trending/all/week?api_key=${API_KEY}&language=${language ?? "en"}`
//   };
// }
const API_KEY = "d8bead3967d226604e175cad5d8de29d";
const fetch = {
  trending: `/trending/all/week?api_key=${API_KEY}&language="ko"`,
  topRated: `/trending/all/week?api_key=${API_KEY}&language="ko"`,
  // genres
  horror: `/trending/all/week?api_key=${API_KEY}&with_genres=27&language="ko"`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28&language="ko"`,
  comedy: `/trending/all/week?api_key=${API_KEY}&with_genres=35&language="ko"`,
  romance: `/trending/all/week?api_key=${API_KEY}&with_genres=10749&language="ko"`,

};

export default fetch;