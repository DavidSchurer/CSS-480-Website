import React, { useState, useEffect } from 'react';
import {focusOnThingsToReadLink } from './NavigationBar';
import './ThingsToRead.css';

function ThingsToReadPage() {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const links = [
        { label: 'Google', url: 'https://www.google.com/' },
        { label: 'Youtube', url: 'https://www.youtube.com/' },
        { label: 'Discord', url: 'https://discord.com/' },
        { label: 'Amazon', url: 'https://www.amazon.com/' },
        { label: 'Netflix', url: 'https://www.netflix.com/browse' },
        { label: 'HBO Max', url: 'https://play.max.com/' },
        { label: 'Steam', url: 'https://store.steampowered.com/' },
        { label: 'Spotify', url: 'https://open.spotify.com/' },
        { label: 'AMC Theaters', url: 'https://www.amctheatres.com/' },
        { label: 'Emerald City Athletics', url: 'https://emeraldcityathletics.com/' }
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
        <div className="ThingsToReadContainer">
            <h1 className="ThingsToReadTitle">Things To Read</h1>

            <ul className="ThingsToReadList">
                <div className="ThingsToReadListContainer"> 
                {links.map((link, index) => (
                    <li className="ThingsToReadList" key={index}>
                        <a href={link.url} className={index === selectedIndex ? 'selected' : ''} onClick={() => handleLinkClick(index)}>{link.label}</a>
                    </li>
                ))}
                </div>
            </ul>
        </div>
    );
}

export default ThingsToReadPage;