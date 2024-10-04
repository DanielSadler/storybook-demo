import './paginationnumber.css';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  value: string;
  onNumberClick: (value: string) => void;
}

export default function PaginationNumber({
  value = '1',
  isSelected,
  onNumberClick,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`button`}
      onClick={() => onNumberClick(value)}
    >
      <p
        className={`pagination-number ${isSelected && `pagination-number-selected`}`}
      >
        {value}
      </p>
      <div
        className={`pagination-circle ${isSelected && `pagination-circle-selected`}`}
      />
    </button>
  );
}
