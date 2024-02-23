import './App.css';
import Ambassadors from './components/Ambassadors/Ambassadors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ambasadors } from './data/ambasadors';

function App() {
  return (
    <div className='app__landingpage'>
      <Header />
      <Ambassadors ambasador={ambasadors} />
      <Footer />
    </div>
  );
}

export default App;
