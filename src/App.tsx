import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import GlobalStyles from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <OurServices />
    </>
  );
};

export default App;
