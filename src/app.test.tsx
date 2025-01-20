import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the dashboard title', () => {
    render(<App />);
    expect(screen.getByText('DevOps Dashboard')).toBeDefined();
  });

  it('renders all status cards', () => {
    render(<App />);
    expect(screen.getByText('Tests Passing')).toBeDefined();
    expect(screen.getByText('Deployment Status')).toBeDefined();
    expect(screen.getByText('Performance')).toBeDefined();
  });
});
