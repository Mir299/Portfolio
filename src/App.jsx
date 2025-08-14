
import Header from "./widgets/header/Header";
import NavBar from "./widgets/NavBar/NavBar";
import AboutMe from "./widgets/Main/AboutMe/AboutMe";

const App = () => {
  return (
    <>
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