import { Link } from "react-router-dom";
import { Container } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      Home
      <Link to={"/charts"}>Link to Charts</Link>
      <Link to={"/map"}>Link to Map</Link>
    </Container>
  );
};

export default Home;
