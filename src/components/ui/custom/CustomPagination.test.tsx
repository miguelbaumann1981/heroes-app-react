import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { CustomPagination } from './CustomPagination';
import { MemoryRouter } from 'react-router';
import type React from 'react';
import type { PropsWithChildren } from 'react';

vi.mock('../button', () => ({
  Button: ({ children, ...props }: PropsWithChildren) => (
    <button {...props}>{children}</button>
  ),
}));

const renderWithRouter = (
  component: React.ReactElement,
  initialEntries?: string[],
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>,
  );
};

describe('Custom Pagination', () => {
  test('should render component with default values', () => {
    renderWithRouter(<CustomPagination totalPages={5} />);
    // screen.debug();
    expect(screen.getByText('Previous')).toBeDefined();
    expect(screen.getByText('Next')).toBeDefined();
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('5')).toBeDefined();
  });

  test('should disabled previous button when page is 1', () => {
    renderWithRouter(<CustomPagination totalPages={5} />);
    const previousButton = screen.getByText('Previous');
    // screen.debug();
    expect(previousButton.getAttributeNames()).toContain('disabled');
  });

  test('should disabled next button when page is the last one', () => {
    renderWithRouter(<CustomPagination totalPages={5} />, ['/?page=5']);
    const nextButton = screen.getByText('Next');
    screen.debug();
    expect(nextButton.getAttributeNames()).toContain('disabled');
  });

  test('should disabled button 3 when page is 3', () => {
    renderWithRouter(<CustomPagination totalPages={10} />, ['/?page=3']);
    const button2 = screen.getByText('2');
    const button3 = screen.getByText('3');
    // screen.debug();
    expect(button2.getAttribute('variant')).toContain('outline');
    expect(button3.getAttribute('variant')).toContain('default');
  });

  test('should change page when click on number button', () => {
    renderWithRouter(<CustomPagination totalPages={5} />, ['/?page=3']);
    const button2 = screen.getByText('2');
    const button3 = screen.getByText('3');
    expect(button2.getAttribute('variant')).toContain('outline');
    expect(button3.getAttribute('variant')).toContain('default');

    fireEvent.click(button2);
    screen.debug();
    expect(button2.getAttribute('variant')).toContain('default');
    expect(button3.getAttribute('variant')).toContain('outline');
  });
});
