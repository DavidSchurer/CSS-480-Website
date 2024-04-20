import React, { useState, useEffect } from 'react';
import {focusOnThingsToReadLink } from './NavigationBar';

function ThingsToReadPage() {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const links = [
        { label: 'Google', url: 'https://www.google.com/' },
        { label: 'Youtube', url: 'https://www.youtube.com/' },
        { label: 'Discord', url: 'https://discord.com/' },
        { label: 'UW Bothell Canvas', url: 'https://canvas.uw.edu/' },
        { label: 'Link 1', url: '#' },
        { label: 'Link 2', url: '#' },
        { label: 'Link 3', url: '#' },
        { label: 'Link 4', url: '#' },
        { label: 'Link 5', url: '#' },
        { label: 'Link 6', url: '#' }
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    if (selectedIndex === 0) {
                        const thingsToReadButton = document.querySelector('[to="/things-to-read"]');
                        if (thingsToReadButton) {
                            thingsToReadButton.focus();
                            break;
                        }
                    }

                    setSelectedIndex(prevIndex => Math.max(prevIndex - 1, 0));
                    break;
                
                case "ArrowDown":
                    setSelectedIndex(prevIndex => Math.min(prevIndex + 1, links.length - 1));
                    break;
                
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [links.length]);

    useEffect(() => {
        const selectedLink = document.querySelector(`ul > li:nth-child(${selectedIndex + 1}) > a`);
        if (selectedLink) {
            selectedLink.focus();
        }
    }, [selectedIndex]);

    const handleLinkClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <h1>Things To Read</h1>

            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className={index === selectedIndex ? 'selected' : ''} onClick={() => handleLinkClick(index)}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ThingsToReadPage;