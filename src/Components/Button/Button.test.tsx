import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('button componente', () => {
  test('loads and displays greeting', async () => {
    // ARRANGE
    render(<Button>
        test
    </Button>)

    // ACT
    // await userEvent.click(screen.getByText('Load Greeting'))
    // await screen.findByRole('heading')

    // ASSERT
    expect(screen.getByText('test')).toBeInTheDocument()
  })
});
