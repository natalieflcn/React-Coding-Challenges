import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function Test() {
//   const [movieState, setMovieState] = useState(0);

//   return (
//     <div>
//       <StarRating
//         messages={["Terrible", "Eh", "Okay", "Good", "Amazing"]}
//         onSetRating={setMovieState}
//       />
//       <p>This movie has {movieState} stars</p>
//     </div>
//   );
// }
