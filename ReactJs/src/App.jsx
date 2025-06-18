import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './component/Edit/Edit'
import Direactoryadmin from './component/Admin/Direactory';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/user/:id' element={<Edit />} />
          <Route path = '/' element={<Direactoryadmin/>}/>
          <Route path='/not' element={<h1>User not found</h1>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
