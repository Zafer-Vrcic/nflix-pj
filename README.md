

 <h3> Movie Detail Page </h3>
This project includes a DetailPage component that displays detailed information about a movie, including a video player, production companies, spoken languages, producing countries, budget, revenue, subtitle options, and actors.

 # Features
Banner: Displays the movie's backdrop image and title.
Video Player: Shows a single video related to the movie using ReactPlayer.
Production Companies: Lists production companies associated with the movie.
Spoken Languages: Shows the languages spoken in the movie.
Producing Countries: Lists countries that produced the movie.
Budget and Revenue: Displays the movie's budget and revenue.
Subtitle Options: Shows available subtitle options for the movie.
Actors: Displays a carousel of actors from the movie using Splide.

<h3> Main Page </h3>
This project includes a MainPage component that serves as the homepage of the movie application. It displays a hero section and lists movies categorized by genre. The component fetches popular movies and genre information from the Redux store.

Features
Hero Section: Displays a prominent hero component.
Movie Lists: Shows movies categorized by genres.
Loading and Error States: Handles and displays loading indicators and error messages.

# libraries

- react-router-dom
- axios
- bootstrap
- @splidejs/react-splide
- redu
- react-redux
- redux-thunk
- react-player
 # Redux
 Redux State: Accessed using useSelector to get the current state of genres and loading/error status.
Dispatch Actions: Initiated using useDispatch to fetch popular movies and genres.
Async Operations: Managed by Redux Thunk, allowing action creators to handle asynchronous API requests and dispatch appropriate actions based on the results.

# Sources

-API: https://developer.themoviedb.org/reference/discover-movie

Logo: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg

- for Photo base URL: https://image.tmdb.org/t/p/original

-actors,film detail,videos:https://api.themoviedb.org/3/movie/${id}?append_to_response=credits%2Cvideos&language=en-USx



<h1>Project Gif</h1>

<img src="/public/fg.gif " alt="">