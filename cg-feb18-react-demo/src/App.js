// JSX, component, state, props

import Footer from "./components/Footer";
import Header from "./components/Header";

//// with arrow function 
const App = () => {

  return (

    <div>
      <Header />
      <h1>CG React App</h1>
      <p>Welcome to Capgemini React app.</p>
      <Footer />
    </div>

  );
}
export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
