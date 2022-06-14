import classes from './App.module.css';
import NavigationHeader from "./components/NavigationHeader";
import AppBody from "./components/AppBody";

function App() {
  return (
    <div className={classes.App}>
      <NavigationHeader/>
        <AppBody/>
    </div>
  );
}

export default App;



