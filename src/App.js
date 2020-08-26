import React, {useState} from 'react';
import Navigation from "./components/Navigation";

function App() {
    const [theme, setTheme] = useState('dark');

    return (
        <div className={`app ${theme}`}>
            <Navigation changeTheme={setTheme}/>
        </div>
    );
}

export default App;
