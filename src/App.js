import './App.css';
import Chatbox from './components/Chatbox';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
     <div className="app-body">
        <Sidebar />
        <Chatbox />
     </div>
    </div>
  );
}

export default App;
