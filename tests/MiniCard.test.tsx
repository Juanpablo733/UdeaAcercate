import { render, screen } from '@testing-library/react';
import { MiniCard } from '@/components/card/MiniCard';

describe('Pruebas unitarias del componente Card', () => {
  beforeEach(() => {
    render(<></>
    //   <MiniCard
    //     title='Test title'
    //     description='Test description'
    //     buttonText='Test button text'
    //   />
    );
  });

  it('renderiza el titulo del card de manera correcta', () => {
    const renderedText = screen.getByText('Test title');
    expect(renderedText).toBeTruthy();
  });
});