import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='grid grid-cols-12'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
