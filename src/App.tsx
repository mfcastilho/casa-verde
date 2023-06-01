import './App.css';
import HomePage from './pages/HomePage';
import Menu from './components/menu/Menu';

function App() {
 

  return (
     <body className='App'>
          <img className='mancha' src="../public/mancha-fundo-amarela.svg" alt="" />
          <Menu />
          <HomePage />
     </body>
  )
}

export default App
