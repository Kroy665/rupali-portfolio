import Header from './pages/header/Header'
import Main from './pages/main/Main'
import Footer from './pages/footer/Footer'
import './App.css';
import { useSelector } from 'react-redux';
function App() {
  const lightDark = useSelector((state) => state.lightDark.value)
  var bgColor = lightDark? "#fff": "#000";
  var color = lightDark? "#000": "#fff";
  var styles={
    main:{
      backgroundColor: bgColor,
      color: color,
    }
  }
  return (
    <div className="App" style={styles.main}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
