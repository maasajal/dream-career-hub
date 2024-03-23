import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ErrorPage = () => {
  return (
    <div className="text-center mt-10">
      <Header></Header>
      <h2>This page is not available</h2>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};
export default ErrorPage;
