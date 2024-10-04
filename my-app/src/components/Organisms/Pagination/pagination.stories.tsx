import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta = {
  title: 'Example/Organisms/Pagination',
  component: Pagination,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: StoryFn = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};
