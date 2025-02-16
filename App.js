// import logo from './logo.svg';
// import './App.css';



// import React, { Component } from 'react'
// import Navbar from './component/Navbar';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar/>
//       </div>
//     )
//   }
// }
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import React, { Component } from 'react';
// import Navbar from './component/Navbar';
// import News from './component/news';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <Navbar />
        
//         <Routes>
//           <Route path="/"><News setProgress={this.setProgress}  Pagesize={5} country='us' category='Health'/> </Route>
//           <Route path="/Business"><News setProgress={this.setProgress}  Pagesize={5} country='us' category='Business'/> </Route>
//           <Route path="/Entertainment"><News setProgress={this.setProgress}  Pagesize={5} country='us' category='Entertainment'/> </Route>
//           <Route path="/General"><News setProgress={this.setProgress}  Pagesize={5} country='us' category='General'/> </Route>
//           <Route path="/Sports"><News setProgress={this.setProgress}  Pagesize={5} country='us' category='Sports'/> </Route>
//           <Route path="/"><News setProgress={this.setProgress}  Pagesize={5} country='us' category='Health'/> </Route>
//           <Route path="/Technology"><News setProgress={this.setProgress}  Pagesize={5} country='us' category='Technology'/> </Route>
       
//         </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/news';
import {
  
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        height={2}
        margin-top
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Navbar />
          <Routes>
            <Route exact path="/Health" element={<News setProgress={this.setProgress}  key="Health" Pagesize={5} country="us" category="Health" />} />
            <Route exact  path="/Business" element={<News setProgress={this.setProgress}  key="Business" Pagesize={5} country="us" category="Business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress}  key="Entertainment" Pagesize={5} country="us" category="Entertainment" />} />
            <Route exact path="/General" element={<News setProgress={this.setProgress}  key="General" Pagesize={5} country="us" category="General" />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress}  key="Sports" Pagesize={5} country="us" category="Sports" />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress}  key="Technology" Pagesize={5} country="us" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}


