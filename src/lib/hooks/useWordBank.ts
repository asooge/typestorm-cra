import { useState, useEffect } from 'react';
import { wordList } from '../constants';
import { sortRandom } from '../utils';

export const useWordBank = () => {
  const [words, setWords] = useState<string[]>([]);
  useEffect(() => {
    if (!words.length) {
      setWords(sortRandom(wordList))
    }
  }, [])

  const reset = () => setWords(sortRandom(wordList));
  return {
    wordBank: words,
    reset,
  };
};
