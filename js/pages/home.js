import EchoIt from "../components/eco-it.js";
import Recato from "../lib/recato.js";

const { div, h1 } = Recato;

const Home = (router) => {
  return div(
    h1("Home"),
    EchoIt("Hello"),
  ).attr("class", "home");
}

export default Home;