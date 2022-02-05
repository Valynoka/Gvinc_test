import './App.css';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import {Outlet, Route, Routes} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import SecondInput from "./components/SecondInput/SecondInput";
import ThirdInput from "./components/ThirdInput/ThirdInput";



function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<StartPage/>}/>
              <Route path={'SecondInput'} element={<SecondInput/>}/>
              <Route path={'ThirdInput'} element={<ThirdInput/>}/>
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
            <Footer/>
        </div>
    )
}

export default App;
