import './App.css';
import Header from "./components/Header/Header";

import Contacts from './components/Contacts/Contacts'

import {Outlet, Route, Routes} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";



function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<StartPage/>}/>
              <Route path={'Contacts'} element={<Contacts/>}/>
          </Route>
      </Routes>
  );
}

function Layout() {
    return (
        <div className='App'>
            <Header/>
            <main className={'content'}>
                <Outlet/>
            </main>
        </div>
    )
}

export default App;
