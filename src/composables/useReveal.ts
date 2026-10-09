import { onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'

/**
 * Adds `.is-visible` to every `.reveal` element as it scrolls into view.
 * Re-scans after navigation so lazily mounted views are covered.
 *
 * Mount once, in App.vue.
 */
export function useReveal() {
  let observer: IntersectionObserver | null = null
  const router = useRouter()

  function scan() {
    if (!observer) return
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
      observer!.observe(el)
    })
  }

  onMounted(() => {
    // Without IntersectionObserver, show everything rather than nothing.
    if (!('IntersectionObserver' in window)) {
      document
        .querySelectorAll('.reveal')
        .forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    scan()

    router.afterEach(() => {
      // Let the incoming view mount before scanning for new nodes.
      requestAnimationFrame(() => requestAnimationFrame(scan))
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })
}
