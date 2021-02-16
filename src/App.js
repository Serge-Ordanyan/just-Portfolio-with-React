import {Route,Switch} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import Home from './components/homePage/Home'
import DocLists from './components/pages/documentations/DocLists'
import Navbar from './components/homePage/Navbar';
// import Footer from './components/footer/Footer'
import Docinfo from './components/pages/documentations/DocInfo'
import Works from  './components/pages/works/Works'
import Contact from './components/pages/contact/Contact'
import NotFoundPage from './components/NotFoundPage'


function App() {
  return (
    <>
     <Navbar/>
          <Switch>
       
             <Route exact path="/" component={Home}/> 
             <Route path="/doc-list" component={DocLists}/> 
             <Route path="/doc/info/:id"  children={<Docinfo/>}/>
             <Route path="/works" component={Works}/>
             
             <Route path="/contact" component={Contact}/>
             <Route component={NotFoundPage}/>
             
        
         </Switch>    
   
    </>  
  );
}

export default App;
