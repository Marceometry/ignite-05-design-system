import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '@/styles'

export const VIEWPORT_PADDING = 24

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  margin: 0,
  padding: VIEWPORT_PADDING,
  maxWidth: '100vw',
  width: 360,
  zIndex: 1000,
  listStyle: 'none',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  display: 'grid',
  gridTemplateColumns: 'auto min-content',
  columnGap: '$2',
  rowGap: '$3',
  padding: '$4',
  fontFamily: '$default',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  height: 'fit-content',
  color: '$gray200',
  cursor: 'pointer',
  transition: 'opacity 0.2s',
  fontSize: 0,

  svg: {
    width: '$5',
    height: '$5',
  },

  '&:hover': {
    opacity: 0.6
  }
})
