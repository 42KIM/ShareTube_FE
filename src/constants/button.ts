const BUTTON_SIZE = {
  lg: {
    width: '100px',
    height: '30px'
  },
  md: {
    width: '50px',
    height: '20px'
  },
  sm: {
    width: '30px',
    height: '10px'
  }
} as const;

const BUTTON_COLOR = {
  TRANSPARENT: 'transparent',
  RED: 'red',
  BLUE: 'blue',
  WHITE: 'white'
} as const;

export { BUTTON_SIZE, BUTTON_COLOR };
