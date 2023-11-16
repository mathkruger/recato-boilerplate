import Recato from "../lib/recato.js";
const { p } = Recato;

const EchoIt = (message) => p(`${message}${message}`);

export default EchoIt;