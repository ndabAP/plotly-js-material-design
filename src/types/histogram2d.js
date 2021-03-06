import defaultsDeep from 'lodash.defaultsdeep'

export const histogram2d = configuration => defaultsDeep(configuration, {
  colorscale: [['0', '#4285f4'], ['1', '#93d5ed']],

  colorbar: {
    len: 1,
    outlinewidth: 0,

    tickfont: {
      color: '#757575'
    }
  }
})
