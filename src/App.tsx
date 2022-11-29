import { Content, Footer } from './components';
import { useWordBank, useTimer, useTypeStorm } from './lib/hooks';
import { getResults } from './lib/utils';
import type { TypeStormResults } from './lib/utils';
import './App.css'

const App: React.FC = () => {
  const { wordBank, reset: resetWordbank } = useWordBank();
  console.log({ wordBank })
  const {
    index,
    inputValue,
    userWords,
    handleInput,
    reset: resetTypeStorm,
  } = useTypeStorm();
  const { currentTime, isFinished, init, reset: resetTimer } = useTimer(60);

  const handleUserInput = (event: React.FormEvent<HTMLInputElement>) => {
    if (!userWords[0]) {
      init();
    }
    handleInput(event);
  };

  const tryAgain = () => {
    resetWordbank();
    resetTypeStorm();
    resetTimer();
  };

  const results = isFinished
    ? getResults(userWords, wordBank)
    : ({} as TypeStormResults);

  return (
    <div className={'container'}>
      <main className={'main'}>
        <h1 className={'title'}>Welcome to TypeStorm</h1>

        <Content
          currentIndex={index}
          currentTime={currentTime}
          isFinished={isFinished}
          inputValue={inputValue}
          results={results}
          userWords={userWords}
          wordBank={wordBank}
          handleUserInput={handleUserInput}
          tryAgain={tryAgain}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;

