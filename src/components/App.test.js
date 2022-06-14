import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

const component = renderer.create(<App />)

test('App snapshot test', () => {
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
