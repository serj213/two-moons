import { render, screen } from '@testing-library/react'

import { Button, EButtonTheme } from './Button'

describe('Button test', () => {
  test('Button in document', () => {
    render(<Button>fgfg</Button>)

    const button = screen.getByText('fgfg')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(EButtonTheme.clear)
  })

  test('button props theme', () => {
    render(<Button theme={EButtonTheme.default}>fgfg</Button>)
    const button = screen.getByText('fgfg')
    expect(button).toHaveClass(EButtonTheme.default)
  })

  test('button props fullWidht', () => {
    render(<Button fullWidth>fgfg</Button>)
    const button = screen.getByText('fgfg')
    expect(button).toHaveClass('fullWidth')
  })
})
