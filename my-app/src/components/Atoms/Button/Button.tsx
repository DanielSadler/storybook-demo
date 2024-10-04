import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  id?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  id,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      id={id}
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        `focus:outline-offset-4`,
        mode,
      ].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
