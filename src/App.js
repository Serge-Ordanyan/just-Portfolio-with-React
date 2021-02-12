import {Route,Switch} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import Home from './components/homePage/Home'
import DocLists from './components/pages/documentations/DocLists'
import Navbar from './components/homePage/Navbar';
import Footer from './components/footer/Footer'
import Docinfo from './components/pages/documentations/DocInfo'


function App() {
  return (
    <>
     <Navbar/>
          <Switch>
       
             <Route exact path="/" component={Home}/> 
             <Route path="/doc-list" component={DocLists}/> 
             <Route path="/doc/info/:id"  children={<Docinfo/>}/>
        
         </Switch>    
    <Footer/>     
    </>  
  );
}

export default App;
