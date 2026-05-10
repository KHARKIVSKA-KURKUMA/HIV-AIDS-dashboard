import { Link } from "react-router-dom";
import { Container } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      Home
      <Link to={"/charts"}>Link to Example</Link>
    </Container>
  );
};

export default Home;
