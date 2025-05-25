import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import HelloWorld from './HelloWorld'

describe('HelloWorld', () => {
  it('renders name and handles increment', () => {
    render(<HelloWorld name="Vitest" />)

    expect(screen.getByText('Hello Vitest x1!')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }))

    expect(screen.getByText('Hello Vitest x2!')).toBeInTheDocument()
  })
})
