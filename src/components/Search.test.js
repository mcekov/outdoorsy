import { render, screen } from '@testing-library/react'
import Search from './Search'

test('on initial render, the search input is empty', () => {
  render(<Search />)

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug()
})
