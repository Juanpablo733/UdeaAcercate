import { render, screen } from '@testing-library/react';
import { TagType } from '@/components/tag-type/TagType';

describe('TagType', () => {
  test('renders TagType component with correct label and color', () => {
    render(<TagType type="Deportivo" />);

    const tagElement = screen.getByText('Deportivo');

    // Add specific assertions based on your component's structure
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveStyle({ backgroundColor: 'var(--blue-mid)', color: 'white' });
  });

  // Add more tests as needed for other types
});