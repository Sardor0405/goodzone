// import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader'
import MiddleHeader from './components/MiddleHeader';
import BottomHeader from './components/BottomHeader';
import Carusel from './components/carusel/Carusel'
import CardCarusel from './components/card/CardCarusel';
// import Card2 from './components/card/Card2';
import CardCarusel2 from './components/card/CardCarusel2';
import RightButtom from './components/card/RightButtom';
import CaruselBrent from './components/carusel/CaruselBrent';
import Past from './components/PastkiQism';
function App() {
  return (
    <div className="App">
      <TopHeader/>
      <MiddleHeader/>
      <BottomHeader/>
      <Carusel/>
       <CardCarusel/>
       <CardCarusel2/>
      <RightButtom/>
      <CaruselBrent/>
      <Past/>
    </div>
  );
}

export default App;
