import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const Demo = (props = {}) => {
  const languageOptions = ["python", "c++", "c#", "javascript", "java"];
  const difficultyOptions = ["basic", "moderate", "advanced", "code breaker"];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setTerminalLineData([
      ...terminalLineData,
      <TerminalOutput>
        Selected language: {language}
      </TerminalOutput>,
      ...renderDifficultyOptions(),
    ]);
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setTerminalLineData([
      ...terminalLineData,
      <TerminalOutput>
        Selected difficulty: {difficulty}
      </TerminalOutput>,
    ]);
  };

  const handleUserInput = (terminalInput) => {
    const input = terminalInput.trim().toLowerCase();

    if (!selectedLanguage) {
      if (languageOptions.includes(input)) {
        handleLanguageSelect(input);
      } else {
        setTerminalLineData([
          ...terminalLineData,
          <TerminalOutput>
            Invalid language. Please select a valid language.
          </TerminalOutput>,
          ...renderLanguageOptions(),
        ]);
      }
    } else if (selectedLanguage && !selectedDifficulty) {
      if (difficultyOptions.includes(input)) {
        handleDifficultySelect(input);
      } else {
        setTerminalLineData([
          ...terminalLineData,
          <TerminalOutput>
            Invalid difficulty. Please select a valid difficulty.
          </TerminalOutput>,
          ...renderDifficultyOptions(),
        ]);
      }
    } else {
      setTerminalLineData([
        ...terminalLineData,
        <TerminalOutput>
          Command not recognized. Please follow the instructions.
        </TerminalOutput>,
      ]);
    }
  };

  const renderLanguageOptions = () => {
    return languageOptions.map((language) => (
      <TerminalOutput
        key={language}
        onClick={() => handleLanguageSelect(language)}
      >
        {language}
      </TerminalOutput>
    ));
  };

  const renderDifficultyOptions = () => {
    return difficultyOptions.map((difficulty) => (
      <TerminalOutput
        key={difficulty}
        onClick={() => handleDifficultySelect(difficulty)}
      >
        {difficulty}
      </TerminalOutput>
    ));
  };

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Select language</TerminalOutput>,
    ...renderLanguageOptions(),
  ]);

  return (
    <div style={{ textAlign: "left" }}>
      <Terminal
        name="Codiphy Quiz Demo"
        colorMode={ColorMode.Dark}
        height="1024px"
        onInput={handleUserInput}
        prompt="demo@codiphy.dev:~$"
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default Demo;
