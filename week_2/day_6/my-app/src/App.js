
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Demo from './components/Demo';

function App() {

  function action(){
    console.log("lights camera action");
  }
  return (
    <div>
      <Demo action={action}/>
      <Demo action={action}/>
      <Demo action={action}/>
      <Demo action={action}/>
      <Demo action={action}/>
      <Demo action={action}/>

    </div>

  );
}

export default App;
