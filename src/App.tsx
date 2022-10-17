import { Button } from './components/Button';
import './styles/global.css';

export function App() {
  
  return (
    <>
      <h1 className='font-bold text-xl cyan-500'>Hello World</h1>
      <button className='bg-cyan-500'>enviar</button>
      <Button children='teste'/>
    </>
    
  )
}