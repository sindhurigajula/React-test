import React,{ Component} from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import {configurestore} from './redux/configurestore';
const store = configurestore();

class App extends Component{
  
  render(){
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
