import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'

function App() {

  const cards = data.map(({id, title, description, price, coverImg, stats, location}) => 
    <Card 
      id={id}
      title={title}
      description={description}
      price={price}
      coverImg={coverImg}
      stats={stats}
      location={location}
    />
  )
  
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      {cards}
      
    </div>
  );
}

export default App;
