import React from 'react';

type CircularProgressBarProps = {
  voteAverage: number | null | undefined;
  maxValue?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
};

function Rating(props: CircularProgressBarProps) {
  const {
    voteAverage,
    maxValue = 10,
    size = 50,
    strokeWidth = 3,
    backgroundColor = '#e0e0e0',
  } = props;


  const safeVoteAverage = typeof voteAverage === 'number' ? voteAverage : 0;
  const percentage = Math.min((safeVoteAverage / maxValue) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  let color = '#16a34a';

  if (percentage < 70 && percentage > 40) {
    color = '#f59e0b';
  } else if(percentage < 40) {
    color = '#dc2626';
  }

  return (
      <div className="relative h-full w-full bg-slate-900 rounded-full">
        <svg
          width={size}
          height={size}
          className='-rotate-90 visible'
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.3s ease',
            }}
          />
        </svg>
        <div
        className="absolute font-bold text-base top-2/4 left-[45%]"
          style={{
            transform: 'translate(-50%, -50%)',
            color,
          }}
        >
          {(safeVoteAverage * 10).toFixed(0)}<span className='text-[10px] absolute -top-1'>%</span>
        </div>
      </div>
  );
}

export default Rating;
