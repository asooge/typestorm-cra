import type { TypeStormResults } from 'lib/utils';

interface ContentProps {
  currentIndex: number;
  currentTime: number;
  isFinished: boolean;
  inputValue: string;
  results: TypeStormResults;
  userWords: string[];
  wordBank: string[];
  handleUserInput: (e: React.FormEvent<HTMLInputElement>) => void;
  tryAgain: () => void;
}
export const Content: React.FC<ContentProps> = ({
  currentIndex,
  currentTime,
  isFinished,
  inputValue,
  results,
  userWords,
  wordBank,
  handleUserInput,
  tryAgain,
}) => {
  const {
    correctWordCount = 0,
    rawCPM,
    rawWPM,
    trueCPM,
    trueWPM,
    wordCount = 0,
  } = results ?? {};
  return isFinished ? (
    <>
      <p className={'description'}>
        Here are your results: {trueCPM} CPM = {trueWPM} WPM
      </p>
      <button onClick={tryAgain} className={'button'}>
        Try Again!
      </button>
      <p>Number of correct words: {correctWordCount}</p>
      <p>Number of incorrect words: {wordCount - correctWordCount}</p>
      <p>Raw CPM including incorrect words: {rawCPM}</p>
      <p>Raw WPM including incorrect words: {rawWPM}</p>

      <h2>Here are the words you typed correctly and incorrectly: </h2>
      {wordBank.slice(0, userWords.length).map((word, i) => {
        if (word === userWords[i]) {
          return <span key={word}>{word + ' ✅ '}</span>;
        } else {
          return (
            <span key={word}>
              {word + ' ❌ ' + 'you typed: ' + userWords[i]}
            </span>
          );
        }
      })}
    </>
  ) : (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <p className={'description'}>
          60 second timer will start on your first keystroke
        </p>
        <img
          height={50}
          width={50}
          src={'/storm-icon.png'}
          alt={'storm cloud'}
          style={{
            margin: '8px',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          height={32}
          width={32}
          src={'/hourglass.png'}
          alt={'hourglass'}
        />
        <label style={{ margin: '8px' }}>{`Timer: ${currentTime} / 60`}</label>
        <progress
          value={currentTime}
          max={60}
          style={{
            height: '32px',
          }}
        ></progress>
      </div>
      <input
        autoFocus
        type={'text'}
        disabled={isFinished}
        value={inputValue}
        onChange={handleUserInput}
        placeholder={currentIndex ? '' : 'start typing to begin'}
        style={{
          borderRadius: '6px',
          height: '42px',
          width: '240px',
          padding: '12px',
          margin: '8px',
          fontSize: '18px',
        }}
      />
      <div style={{ maxWidth: '900px', fontSize: '18px', margin: '24px' }}>
        {wordBank.map((word, i) => (
          <span key={word} style={i === currentIndex ? { color: 'blue' } : {}}>
            {word}{' '}
          </span>
        ))}
      </div>
    </>
  );
};
