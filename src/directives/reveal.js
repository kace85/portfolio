let observer
const observedElements = new Set()
const revealTimers = new Map()

const disconnectObserverIfIdle = () => {
  if (observedElements.size === 0) {
    observer?.disconnect()
    observer = undefined
  }
}

const revealElement = (element) => {
  const timer = revealTimers.get(element)
  if (timer) {
    window.clearTimeout(timer)
    revealTimers.delete(element)
  }

  element.style.removeProperty('--reveal-delay')
  element.classList.remove('reveal-pending')
  element.classList.add('reveal-visible')
  observedElements.delete(element)
  disconnectObserverIfIdle()
}

const createObserver = () => {
  if (observer || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return observer
  }

  try {
    observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeObserver.unobserve(entry.target)

          const delay = Number.parseInt(entry.target.style.getPropertyValue('--reveal-delay'), 10) || 0
          if (delay > 0) {
            revealTimers.set(entry.target, window.setTimeout(() => revealElement(entry.target), delay))
          } else {
            revealElement(entry.target)
          }
        }
      })
    }, {
      rootMargin: '0px 0px 80px 0px',
      threshold: 0.12
    })
  } catch (error) {
    console.error('Unable to initialize scroll reveal animations.', error)
  }

  return observer
}

export const revealDirective = {
  mounted(element, binding) {
    if (typeof window === 'undefined' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const activeObserver = createObserver()
    if (!activeObserver) {
      return
    }

    if (typeof binding.value === 'number' && Number.isFinite(binding.value)) {
      const delay = Math.max(0, Math.min(binding.value, 400))
      element.style.setProperty('--reveal-delay', `${delay}ms`)
    }

    element.classList.add('reveal-element', 'reveal-pending')
    observedElements.add(element)

    try {
      activeObserver.observe(element)
    } catch (error) {
      element.classList.remove('reveal-element', 'reveal-pending')
      element.style.removeProperty('--reveal-delay')
      observedElements.delete(element)
      disconnectObserverIfIdle()
      console.error('Unable to observe an element for scroll reveal.', error)
    }
  },

  unmounted(element) {
    const timer = revealTimers.get(element)
    if (timer) {
      window.clearTimeout(timer)
      revealTimers.delete(element)
    }

    if (!observedElements.has(element)) {
      return
    }

    observer?.unobserve(element)
    observedElements.delete(element)
    element.style.removeProperty('--reveal-delay')
    disconnectObserverIfIdle()
  }
}
