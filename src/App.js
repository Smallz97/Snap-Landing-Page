import NavigationBar from './Components/navBar';
import HeroContent from './Components/heroContent';
import './App.css';

function App() {
  return (
    <>
      <section className='hero-section flex-box col-box'>
        <header>
          <NavigationBar />
        </header>
        <main className='main-content flex-box'> 
          <HeroContent />
        </main>
      </section>
    </>
  );
}

export default App;