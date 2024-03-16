
import './App.css';
import config_router from './routes/config_router';


function App() {
  const routes=config_router();
  return (
    // <div className="App">
    //  Hello
    // </div>
    routes
  );
}

export default App;
