import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Grocery from './grocery/grocery';
import Lorem from './lorem/lorem';
import Slider from './slider/slider'
import Tabs from "./tabs/tabs"
function App() {


  const url = 'https://course-api.com/react-tabs-project'
  return (

    <Router>

    <div className="app">
      
      <Switch>

        <Route exact path ="/tabs">
          <Tabs url ={url}/>
        </Route>
        <Route exact path ="/slider">
          <Slider/>
        </Route>
        <Route exact path ="/lorem">
          <Lorem/>
        </Route>
        <Route exact path ="/grocery">
          <Grocery/>
        </Route>








      </Switch>
      





    </div>


    </Router>



  );
}

export default App;
