import { Link } from "react-router-dom";
import Form from "./Form";

export default function Landingpage() {
  return (
    <>
      <h1>Welcome to the Bookworld</h1>
      <button>
        <Link to="/books">explore books</Link>
      </button>
      <Form />
    </>
  );
}
