import Home from "./components/Home/Home";
import Join from "./components/JoinCommunity/Join";
import Mint from "./components/Mint/Mint";
import Navbar from "./components/Navbar/Navbar";
// import Roadmap from "./components/Roadmap/Roadmap";
function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Mint/>
      {/* <Roadmap/> */}
      <Join/>
    </>
  );
}

export default App;
