import React, {useState} from 'react';

const ThemeToggle = props => {

    const [active, setActive] = useState(false);

    const setToggle = () => {
        const newActiveState = active !== 'active' ? 'active' : 'inactive';
        console.log('newActiveState',newActiveState);
        setActive(newActiveState)
    }

    return (
        <div className="theme-toggle" onClick={setToggle}>
            <div className={`toggle-circle ${active}`} />
        </div>
    );
};

export default ThemeToggle;
