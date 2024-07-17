import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NewsBoard from './components/NewsBoard';

function App() {
  const [category, setCategory] = useState("technology")
  return (
    <div className="App">
      <NavBar setCategory={setCategory}/>
      <NewsBoard  category={category}/>
    </div>
  );
}

export default App;
