import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MiniCard } from '@/components/card/MiniCard'; 

describe('Pruebas unitarias del componente Card', () => {
  beforeEach(() => {
    render(
      <MiniCard
      id= '1'
      nombreAutor='John Doe'
      titulo= 'Event Title'
      asistentes= {10}
      tipo= 'Deportivo'
      fecha= '2023-01-01'
      imagenAutor= 'author-image.jpg'
      idAutor = 'authorId'
      day='01'
      hours='15'
      minutes= '30'
      month= '01'
      year= '2023'
      />
    );
  });

  it('renderiza el titulo del card de manera correcta', () => {
    const renderedText = screen.getByText('Event Title');
    expect(renderedText).toBeInTheDocument();
  });
});