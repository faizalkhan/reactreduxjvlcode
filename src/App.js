
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import CustomerAdd from './customerAdd';
import CustomerView from './customerView';

function App() {
  return (

    <Provider store={store}>
<div className="App">

<h1> React Redux Customer Example  </h1>
<CustomerAdd />
<CustomerView />
</div>

    </Provider>
    
  );
}

export default App;
