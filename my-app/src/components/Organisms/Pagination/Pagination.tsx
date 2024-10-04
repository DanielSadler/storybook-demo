import ArrowButton from '@/components/Atoms/ArrowButton/ArrowButton';
import PaginationNumber from '@/components/Atoms/PaginationNumber/PaginationNumber';

import './pagination.css';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) =>
    (i + 1).toString()
  );

  console.log(pages);

  const handlePageChange = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (currentPage === 1) return;
      onPageChange(currentPage - 1);
    } else {
      if (currentPage === totalPages) return;
      onPageChange(currentPage + 1);
    }
  };

  const getPagesArray = (): string[] => {
    const lastNumber = Number(pages[pages.length - 1]);
    const pagesMaxLength = 5;
    const test = lastNumber - currentPage;
    console.log(test);
    if (pages.length > pagesMaxLength) {
      if (lastNumber - currentPage <= 4) {
        return pages.slice(Number(pages[pages.length - 6]), lastNumber);
      }
      return [
        ...pages.slice(currentPage - 1, currentPage + 4),
        '...',
        pages[pages.length - 1],
      ];
    }
  };

  return (
    <div className="pagination-wrapper">
      <ArrowButton variant="left" onClick={() => handlePageChange('left')} />

      <li className="numbers-wrapper">
        {getPagesArray().map((page) => (
          <ul key={page} className="numbers">
            <PaginationNumber
              value={page}
              isSelected={Number(page) === currentPage}
              onNumberClick={(val) => onPageChange(Number(val))}
            />
          </ul>
        ))}
      </li>
      <ArrowButton variant="right" onClick={() => handlePageChange('right')} />
    </div>
  );
};
