import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <Button to={-1}>Go back</Button>
    </div>
  );
}

export default Error;
