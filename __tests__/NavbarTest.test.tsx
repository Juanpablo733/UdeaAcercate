import { render, screen, fireEvent } from '@testing-library/react';
import {Navbar} from '@/components/navbar/Navbar';
import { signOut } from 'next-auth/react'; // Importar signOut aquí

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signOut: jest.fn(),
}));

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar><div>Children Content</div></Navbar>);

    // Add specific assertions based on your component's structure
    expect(screen.getByText('Cerrar sesión')).toBeInTheDocument();
    expect(screen.getByAltText('udea-texto')).toBeInTheDocument();
    expect(screen.getByAltText('cercate-texto')).toBeInTheDocument();
    expect(screen.getByText('Children Content')).toBeInTheDocument();
  });

  test('calls signOut when "Cerrar sesión" button is clicked', () => {
    render(<Navbar><div>Children Content</div></Navbar>);

    fireEvent.click(screen.getByText('Cerrar sesión'));

    // Ensure that signOut has been called with the correct arguments
    expect(signOut).toHaveBeenCalledWith({ callbackUrl: '/' });
  });

  // Add more tests as needed for your specific component behavior
});
