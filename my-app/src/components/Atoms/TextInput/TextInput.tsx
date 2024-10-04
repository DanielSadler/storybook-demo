import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string;
  correct?: boolean;
}

export const TextInput = ({ label, error, correct, ...props }: Props) => {
  return (
    <div className="relative w-full">
      <div
        className={`flex flex-col focus-within:border-indigo-500  space-y-1 relative border border-black p-1 rounded-md ${
          error && !correct && `border-red-600`
        } ${correct && `border-green-500`} `}
      >
        <label className="text-sm -top-3 left-3 px-2 bg-white absolute text-gray-500">
          {label}
        </label>
        <input
          {...props}
          className="rounded-md select-none outline-none  pl-1 py-1"
        />
      </div>
      {error && (
        <p className=" absolute pt-[2px] text-red-600 text-xs">{error}</p>
      )}
    </div>
  );
};
