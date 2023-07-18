const scaleY = {
  initial: { opacity: 1, transform: 'scaleY(0)' },
  animate: { opacity: 1, transform: 'scaleY(1)' },
  transition: { duration: 1 },
}

const opacity = {
  initial: { opacity: 0 },
  animate: custom => ({ opacity: 1, transition: { delay: custom * 0.2 } })
}

const translateFromTR = {
  initial: { opacity: 0, transform: 'translateX(100%) translateY(-100%)' },
  animate: custom => ({ opacity: 1, transform: 'translateX(0) translateY(0)', transition: { delay: custom * 0.2 } })
}

const translateFromTop = {
  initial: { opacity: 0, transform: 'translateY(-100%)' },
  animate: custom => ({ opacity: 1, transform: 'translateY(0)', transition: { delay: custom * 0.2 } }),
}

const translateFromRight = {
  initial: { opacity: 0, transform: 'translateX(100%)' },
  animate: custom => ({ opacity: 1, transform: 'translateX(0)', transition: { delay: custom * 0.2 } }),
}

const translateFromBot = {
  initial: { opacity: 0, transform: 'translateY(100%)' },
  animate: custom => ({ opacity: 1, transform: 'translateY(0)', transition: { delay: custom * 0.2 } }),
}

const translateFromLeft = {
  initial: { opacity: 0, transform: 'translateX(-100%)' },
  animate: custom => ({ opacity: 1, transform: 'translateX(0)', transition: { delay: custom * 0.2 } }),
}


export {
  scaleY, opacity, translateFromTR,
  translateFromTop, translateFromRight, translateFromBot,
  translateFromLeft
}