import React, { useState, useEffect, useRef } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.api-ninjas.com/v1/randomword";

const TypingTest: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchWords(10);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchWords = async (count: number) => {
    let newWords: string[] = [];
    for (let i = 0; i < count; i++) {
      try {
        const response = await fetch(API_URL, {
          headers: { "X-Api-Key": API_KEY },
        });
        const data = await response.json();
        if (data.word) newWords.push(data.word);
      } catch (error) {
        console.error("Error fetching words", error);
        newWords.push("error");
      }
    }
    setWords((prevWords) => [...prevWords, ...newWords]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && input.trim() !== "") {
      e.preventDefault();
      if (input.trim() === words[currentIndex]) {
        setCorrectCount(correctCount + 1);
      }
      setInput("");
      setCurrentIndex(currentIndex + 1);
      if (currentIndex + 1 >= words.length - 5) {
        fetchWords(5);
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
    <div className="flex flex-col items-center justify-center h-95 bg-[#fff9f0] text-black p-5">
      <h1 className="text-3xl font-bold mb-4">Calm Keys</h1>
      <h2 className="text-lg mb-6">WPM: {calculateWPM()}</h2>
      <div className="text-xl flex flex-wrap max-w-3xl gap-2">
        {words.slice(currentIndex, currentIndex + 10).map((word, index) => (
          <span
            key={index}
            className={
              index === 0
                ? "text-yellow-400 underline"
                : "text-gray-400"
            }
          >
            {word}
          </span>
        ))}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="mt-6 p-3 w-full max-w-3xl text-lg border-b-2 rounded-sm border-yellow-400 focus:outline-none"
      />
    </div>
  );
};

export default TypingTest;