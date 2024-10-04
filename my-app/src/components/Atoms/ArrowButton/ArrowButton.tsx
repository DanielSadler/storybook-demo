import { SVGProps } from 'react';

import './arrowbutton.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'left' | 'right';
}

export default function ArrowButton({ variant = 'left', ...props }: Props) {
  return (
    <button className="arrow-button" {...props}>
      <div className="border border-gray-400 rounded-full">
        {variant === 'left' && <ChevronLeftIcon height={24} />}
        {variant === 'right' && <ChevronRightIcon height={24} />}
      </div>
    </button>
  );
}
