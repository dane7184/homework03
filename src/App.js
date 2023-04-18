import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <NavBar />
      <Project/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
