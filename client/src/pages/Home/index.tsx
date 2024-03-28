import { useLocation } from "react-router-dom";
import "./index.css";
function Home() {
  const { pathname: path } = useLocation();
  console.log(path);
  return <div>Home</div>;
}

export default Home;
