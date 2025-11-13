import BgCofe from './assets/bg-cafe.jpg';
import Home from './Components/Home';

function App() {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center'>
      <img src={BgCofe} alt='Cofe shop'  className='w-full'/>
      <Home />
    </div>
  );
}

export default App;
