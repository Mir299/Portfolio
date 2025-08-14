
import Header from "./widgets/Header/Header";
import NavBar from "./widgets/NavBar/NavBar";
import AboutMe from "./widgets/Main/AboutMe/AboutMe";
import Loader from "./widgets/Loader/Loader";

const App = () => {
  return (
    <>
    <Loader />
    <header>
      <NavBar />
      <Header />
      </header>
      <main>
        <AboutMe />
      </main>
       
    </>
  )
};

export default App;