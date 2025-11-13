import BgCofe from './assets/bg-cafe.jpg';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <img src={BgCofe} alt='Cofe shop' className='relative' />
      <Home />
    </div>
  );
}

export default App;
