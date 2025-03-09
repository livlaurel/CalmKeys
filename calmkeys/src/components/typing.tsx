import React, { useState, useEffect, useRef } from "react";
import { RANDOM_WORDS } from "./words_array";
import { ZEN_WORDS } from "./zen_array";
import { QUOTES } from "./quotes_array";
import { RiPlantFill, RiLetterSpacing2 } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa";

const TypingTest: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [quote, setQuote] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [mode, setMode] = useState<"words" | "zen" | "quote">("words");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadWords(RANDOM_WORDS, 10);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const loadWords = (wordList: string[], count: number) => {
    const newWords = Array.from({ length: count }, () =>
      wordList[Math.floor(Math.random() * wordList.length)]
    );
    resetGame(newWords, null);
  };

  const loadQuote = () => {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    resetGame(randomQuote.split(" "), randomQuote);
  };

  const resetGame = (newWords: string[], newQuote: string | null) => {
    setWords(newWords);
    setQuote(newQuote);
    setCurrentIndex(0);
    setCorrectCount(0);
    setStartTime(null);
    setInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && input.trim() !== "") {
      e.preventDefault();

      if (input.trim() === words[currentIndex]) {
        setCorrectCount(correctCount + 1);  
        setInput(""); 
      }

      if (input.trim() === words[currentIndex]) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;

          if (mode === "quote" && nextIndex >= words.length) {
            loadQuote();
            return 0;
          }
  
          return nextIndex;
        });
      }
    }

    if (!startTime) {
      setStartTime(new Date());
    }
  };
  

  const calculateWPM = () => {
    if (!startTime) return 0;
    const now = new Date();
    const minutes = (now.getTime() - startTime.getTime()) / 60000;
    return Math.round(correctCount / minutes) || 0;
  };

  return (
    <>
      <div className="box box-content flex justify-between rounded-sm items-center p-4 bg-[#fff9f0] mb-4">
        <button className="flex items-center mr-10" onClick={() => {
            setMode("zen");
            loadWords(ZEN_WORDS, 10);
          }}
        >
          <RiPlantFill className="mr-1" /> Zen
        </button>
        
        <button className="flex items-center mr-10 ml-10" onClick={() => {
            setMode("quote");
            loadQuote();
          }}
        >
          <FaQuoteLeft className="mr-1" /> Quote
        </button>

        <button className="flex items-center ml-10" onClick={() => {
            setMode("words");
            loadWords(RANDOM_WORDS, 10);
          }}
        >
          <RiLetterSpacing2 className="mr-1" /> Words
        </button>
      </div>

      <div className="flex flex-col items-center justify-center rounded-sm h-93 bg-[#fff9f0] text-black p-4">
        <h1 className="text-3xl font-bold mb-4">Calm Keys</h1>
        <h2 className="text-lg mb-6">WPM: {calculateWPM()}</h2>

        <div className="text-xl flex flex-wrap max-w-3xl gap-2">
          {words.map((word, index) => (
            <span
              key={index}
              className={
                index < currentIndex
                  ? "text-gray-400"
                  : index === currentIndex
                  ? "text-yellow-400 underline"
                  : "text-gray-600" 
              }
            >
              {word}
            </span>
          ))}
        </div>

        <input className="mt-6 p-3 w-full max-w-3xl text-lg border-b-2 rounded-sm border-yellow-400 focus:outline-none"
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default TypingTest;
