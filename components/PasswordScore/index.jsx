import React, { useEffect, useState } from 'react';
import zxcvbn from 'zxcvbn';

export default function PasswordScore({ password }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const score = zxcvbn(password || '').score;
    setScore(score);
  }, [password]);

  return (
    <>
      {score ? (
        <div className='mt-2 flex'>
          {Array.from(Array(5).keys()).map((span, i) => (
            <span className='w-1/5 px-1' key={i}>
              <div
                className={`b h-2 rounded-xl ${
                  score <= 2 ? 'bg-red-500' : score < 4 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
              ></div>
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
