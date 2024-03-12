import { SxStyles } from 'types/SxStyles'

const styles: SxStyles = {
  outer: {
    pos: 'relative',
    w: '100%',
    overflow: 'hidden'
  },
  inner: {
    pos: 'relative',
    p: '0 2rem .5rem 0',
    zIndex: 1,
    overflow: 'auto'
  },
  gradient: {
    pos: 'absolute',
    inset: 0,
    left: 'auto',
    width: '2rem',
    bgGradient: 'linear(to-l, #fff, transparent)',
    zIndex: 2
  }
}

export default styles
