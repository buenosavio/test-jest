import data from '../../data/courses.json'

//Tests examples

//igualdade numeros

const numItems = data.length

describe('Number test', () => {
  test('number of items = 12', () => {
    expect(numItems).toBe(12)
  })
  test('number of items to be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12)
  })
})

// conter algo ou texto

const dataTest = data[0].title

describe('String test', () => {
  test('there is JS in this title', () => {
    expect(dataTest).toMatch(/JS/)
  })
  test('The title contains React', () => {
    expect(dataTest).toContain('React')
  })
})

//Arrays

const data2 = ['React Native', 'React']

describe('Array or object test', () => {
  test('The list contains react and native', () => {
    expect(['React', 'React Native', 'MeteorJS']).toEqual(
      expect.arrayContaining(data2)
    )
  })

  //Objects

  test('First course to have a proprierty title', () => {
    expect(data[0]).toHaveProperty('title')
  })

  test('First course to have a proprierty title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266')
  })
})
