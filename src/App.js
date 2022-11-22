
import './App.css'

import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/Sign-up';

function App () {
    return (
        <>
        <Navbar />
        <Login />
        <SignUp></SignUp>
        {/* <SignUp /> */}
        </>
    ); 
}

export default App;