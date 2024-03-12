import { SxStyles } from 'types/SxStyles'

const styles: SxStyles = {
  wrapper: {
    p: {
      base: '1.5rem 2rem',
      md: '1rem 1.5rem'
    },
    bg: '#333',
    pos: {
      base: 'relative',
      md: 'fixed'
    },
    color: '#fff',
    display: {
      sm: 'flex'
    },
    inset: {
      md: '0'
    },
    bottom: {
      md: 'auto'
    },
    zIndex: '9',
    alignItems: {
      sm: 'flex-start',
      md: 'center'
    },
    overflow: 'hidden'
  },
  buttonWrapper: {
    ml: {
      sm: 'auto'
    },
    mb: {
      base: '1.5rem',
      sm: 0
    },
    order: {
      sm: 2
    },
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    justifyContent: {
      base: 'space-between'
    }
  },
  button: {
    flexShrink: 0,
    mr: '1rem'
  },
  avatar: {
    flexShrink: 0,
    m: '-.25rem 0'
  },
  textWrapper: {
    display: {
      md: 'flex'
    },
    order: {
      sm: 1
    },
    mr: {
      sm: '2rem'
    },
    alignItems: {
      md: 'center'
    }
  },
  heading: {
    mr: {
      md: '2rem'
    },
    mb: {
      base: '1rem',
      md: '0'
    },
    fontSize: {
      base: '2xl',
      md: '3xl',
      xl: '4xl'
    },
    flexShrink: {
      md: 0
    }
  },
  text: {
    fontSize: {
      md: 'lg',
      xl: 'xl'
    },
    overflow: { md: 'hidden' },
    textWrap: { md: 'nowrap' },
    textOverflow: { md: 'ellipsis' }
  }
}

export default styles
