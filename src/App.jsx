import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
