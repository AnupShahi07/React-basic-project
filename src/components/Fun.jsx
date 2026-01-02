import React, { useState } from "react";
import "./Fun.css";

const funnyQuotes = [
  "I am on a seafood diet. I see food and I eat it.",
  "My bed and I are in a committed relationship.",
  "I put my phone on airplane mode, but it didn’t fly.",
  "I started with nothing, and I still have most of it.",
  "Why don’t we ever see elephants hiding in trees? Because they’re very good at it.",
  "I’m not lazy, I’m on energy-saving mode.",
  "Life is short. Smile while you still have teeth.",
  "My wallet is like an onion. Opening it makes me cry.",
  "I followed my heart, and it led me to the fridge.",
  "I used to think I was indecisive, but now I’m not too sure.",

  "I told my fridge I was on a diet. It cried.",
  "Common sense is like deodorant. The people who need it most never use it.",
  "I talk to myself because sometimes I need expert advice.",
  "My brain has too many tabs open.",
  "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.",
  "I’m on a whiskey diet. I’ve lost three days already.",
  "I used to run. But I kept losing my balance, so I stopped.",
  "I don’t rise and shine, I caffeinate and hope for the best.",
  "My phone battery lasts longer than most relationships.",
  "I’m not superstitious, but I am a little stitious.",

  "I put my alarm clock on snooze so many times it’s starting to take it personally.",
  "I don’t need anger management. I need people to stop annoying me.",
  "I tried being normal once. Worst two minutes of my life.",
  "I finally cleaned my room… now I can’t find anything.",
  "I used to think I was lazy. Turns out, I was just tired.",
  "I don’t have a bad handwriting. I have my own font.",
  "I’m not arguing, I’m just explaining why I’m right.",
  "I went outside today. The graphics weren’t great.",
  "I have a lot of jokes about unemployed people, but none of them work.",
  "I eat cake because it’s somebody’s birthday somewhere.",
];

function Fun() {
  const [quote, setQuote] = useState(funnyQuotes[0]);

  const getRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * funnyQuotes.length);
    } while (funnyQuotes[randomIndex] === quote);

    setQuote(funnyQuotes[randomIndex]);
  };

  return (
    <div className="fun-container">
      <h1 className="fun-title">Just for Laughs 😄</h1>

      <p className="fun-quote">"{quote}"</p>

      <button className="fun-btn" onClick={getRandomQuote}>
        Make Me Laugh
      </button>
    </div>
  );
}

export default Fun;
