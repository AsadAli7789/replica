import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/footer'
import Navbar from './component/nav-bar'
import Example from './component/nav-bar'
import Sec1 from './component/sec1'
import Asad from './component/Datepicker'
import Sec2 from './component/sec2'
import Sec3 from './component/sec3'
import Sec4 from './component/sec4'
import Sec5 from './component/sec5'
import Sec6 from './component/sec6'
import Dropdown from './component/dropdown'
import Sllider from './component/slider'
import Sort from './component/sort'
import Card from './component/card'
import Image_galery from './component/image_gallery'
import Input from './component/input'
import Card_2 from './component/card_2'
import Card_2_part_1 from './component/card_2part_1'
import Card_2_part_2 from './component/card_2_part2'
import Moddal from './component/modal'
import Last_sec from './component/last_sec'
import Example2 from './component/nav-bar-2'







import Page5 from './pages/page5'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
 function  App() {
 
const user = useContext(AuthContext)







  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Page1/>} ></Route>
  <Route path='/page2' element={<Page2/>} ></Route>

</Routes>
</BrowserRouter>

  
 
  
    </>
  )
}

export default App
