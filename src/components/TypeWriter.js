import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

// With thanks to letsbuildui.dev for the awesome guide, saving me a lot of time!

const FORWARD = 'forward';
const BACKWARD = 'backward';

export const useTypingText = (
    words,
    keySpeed = 1000,
    maxPauseAmount = 10,
) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[wordIndex].split(''));

    const direction = useRef(BACKWARD);
    const typingInterval = useRef();
    const letterIndex = useRef();

    useEffect(() => {
        let pauseCounter = 0;

        const typeLetter = () => {
            if (letterIndex.current >= words[wordIndex].length) {
                direction.current = BACKWARD;

                // Begin pause by setting the maxPauseAmount prop equal to the counter
                pauseCounter = maxPauseAmount;
                return;
            }

            const segment = words[wordIndex].split('');
            setCurrentWord(currentWord.concat(segment[letterIndex.current]));
            letterIndex.current = letterIndex.current + 1;
        }

        const backspace = () => {
            if (letterIndex.current === 0) {
                const isOnLastWord = wordIndex === words.length - 1;

                setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
                direction.current = FORWARD;

                return;
            }

            const segment = currentWord.slice(0, currentWord.length - 1);
            setCurrentWord(segment);
            letterIndex.current = currentWord.length - 1;
        }

        typingInterval.current = setInterval(() => {
            // Wait until counter hits 0 to do any further action
            if (pauseCounter > 0) {
                pauseCounter = pauseCounter - 1;
                return;
            }

            if (direction.current === FORWARD) {
                typeLetter();
            } else {
                backspace();
            }
        }, keySpeed);

        return () => {
            clearInterval(typingInterval.current);
        }
    }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount]);


    return {
        word: (
            <TypingText className={`word ${currentWord.length ? 'full' : 'empty'}`}>
                <span>{currentWord.length ? currentWord.join('') : '0'}</span>
            </TypingText>
        ),
    };
}

const TypingText = styled.span`
    >span {
        color: var(--lightGreen);
        position: relative;
    }

    >span::after {
    content: '';
        width: 3px;
        height: 100%;
        background: var(--lightGreen);
        display: block;
        position: absolute;
        right: -4px;
        top: 0;
        animation: blink 0.4s ease infinite alternate-reverse;
    }

    @keyframes blink {
    from {
        opacity: 100%;
    }

    to {
        opacity: 0%;
    }
    }

    &.empty {
        visibility: hidden;
    }

    &.empty span::after {
        visibility: visible;
        right: 0;
    }
    
`;

export default function TypeWriter({ words }) {
    const { word } = useTypingText(words, 100, 8);

    return word
}