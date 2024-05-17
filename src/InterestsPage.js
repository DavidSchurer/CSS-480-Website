import React, { useState, useEffect } from 'react';
import {focusOnThingsToReadLink } from './NavigationBar';
import GameOfThronesPic from './gameOfThrones.jpg';
import TheWalkingDeadPic from './theWalkingDeadPic.jpg';
import BreakingBadPic from './breakingBadPic.jpg';
import './InterestsPage.css';

function InterestsPage() {
    return (
       <div className="favorite-tv-shows">
            <h1 className="main-title">My Favorite TV Shows</h1>

            <div className="tv-show">
                <h2 className="subheader">Game of Thrones</h2>
                <div className="show-content">
                    <a href="https://en.wikipedia.org/wiki/Game_of_Thrones" target="_blank" rel="">
                        <img src={GameOfThronesPic} alt="Game of Thrones Image" style={{ width: '200px', height: '285px', border: 'solid'}} className="show-image" />
                    </a>
                    <p className="show-description">Game of Thrones is an American fantasy drama series that ran on HBO from 2011–2019. The show is set on the fictional continents of Westeros and Essos, and follows several noble families as they fight for control of the Seven Kingdoms, including the Iron Throne.</p>
                </div>
            </div>

            <div className="tv-show">
                <h2 className="subheader">The Walking Dead</h2>
                <div className="show-content">
                <a href="https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)" target="_blank" rel="">
                    <img src={TheWalkingDeadPic} alt="The Walking Dead Image" style={{ width: '200px', height: '285px', border: 'solid'}} className="show-image" />
                </a>
                    <p className="show-description">The Walking Dead is a TV drama series that ran from 2010–2022 on AMC and is based on the comic book series by Robert Kirkman. The show is about a group of survivors, led by sheriff deputy Rick Grimes, who must stay alive after waking up from a coma to find the world overrun by zombies, known as "walkers". The survivors travel in search of safety and security, but face many obstacles, danger, and interpersonal conflicts, including the fear of the other survivors.</p>
                </div>
            </div>

            <div className="tv-show">
                <h2 className="subheader">Breaking Bad</h2>
                <div className="show-content">
                <a href="https://en.wikipedia.org/wiki/Breaking_Bad" target="_blank" rel="">
                    <img src={BreakingBadPic} alt="Breaking Bad Image" style={{ width: '200px', height: '285px', border: 'solid'}} className="show-image" />
                </a>
                    <p className="show-description">Breaking Bad is an American crime drama series that ran from 2008-2013 on AMC. The show follows Walter White (Bryan Cranston), a high school chemistry teacher who turns to manufacturing and selling methamphetamine to support his family after being diagnosed with terminal lung cancer.</p>
                </div>
            </div>

       </div>
    );
}

export default InterestsPage;