import './App.css';
import Card from "./Card";
import {lorem, pic} from "./constans";

function App() {
  return (
    <div className="App">
        <Card img={pic} title={'Title'} content={lorem} ok={'http://google.com'}/>
    </div>
  );
}

export default App;
