import defaultsDeep from 'lodash.defaultsdeep'

export const pie = configuration => defaultsDeep(configuration, {
  hole: 0.75,
  textposition: 'none',
  marker: {
    colors: ['#4285f4', '#45a5f5', '#93d5ed', '#93d5ed']
  }
})
