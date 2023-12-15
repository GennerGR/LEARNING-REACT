import './App.css';
import ContainerCard from './components/ContainerCard';
import ContainerImg from './components/GaleriaImg/ContainerImg';
import ContainerTitle from './components/Information/ContainerTitle';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <ContainerTitle />
      <NavigationBar />
      <ContainerCard />
      <ContainerImg />
    </div>
  );
}

export default App;
