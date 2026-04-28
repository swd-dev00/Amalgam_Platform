import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DashboardPage } from './DashboardPage';

describe('DashboardPage', () => {
  it('renders creator command center heading', () => {
    render(<DashboardPage />);
    expect(screen.getByText(/Creator Command Center/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Go Live/i })).toBeInTheDocument();
  });
});
