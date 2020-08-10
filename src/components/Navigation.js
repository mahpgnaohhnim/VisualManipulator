import React from 'react';
import ThemeToggle from "./ThemeToggle";

const Navigation = props => {
    return (
        <nav>
            <div className="nav-left">
                <div className="logo">Visual Manipulator</div>
                <div className="navigation">nav</div>
            </div>
            <div className="nav-right">
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navigation;
