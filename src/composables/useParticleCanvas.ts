import { onMounted, onUnmounted, type Ref } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export function useParticleCanvas(canvasRef: Ref<HTMLCanvasElement | null>) {
  let animId = 0
  let particles: Particle[] = []
  let mouse = { x: -9999, y: -9999 }
  let width = 0
  let height = 0
  let ctx: CanvasRenderingContext2D | null = null
  let gridOffset = 0

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // ── Particle helpers ──

  function getParticleCount() {
    if (width < 600) return 25
    if (width < 1024) return 40
    return 60
  }

  function randomColor(): string {
    const colors = [
      'rgba(59, 130, 246, 0.7)',   // blue
      'rgba(99, 102, 241, 0.6)',   // indigo
      'rgba(139, 92, 246, 0.6)',   // purple
      'rgba(96, 165, 250, 0.5)',   // light blue
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  function createParticle(): Particle {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      color: randomColor(),
    }
  }

  function initParticles() {
    const count = getParticleCount()
    particles = Array.from({ length: count }, () => createParticle())
  }

  // ── Drawing ──

  function drawGrid() {
    if (!ctx) return

    // Perspective grid: horizontal lines receding into the center-top
    const vanishX = width * 0.5
    const vanishY = height * 0.25
    const lineCount = 14
    const speed = 0.3

    gridOffset = (gridOffset + speed) % (height / lineCount)

    ctx.strokeStyle = 'rgba(59, 130, 246, 0.06)'
    ctx.lineWidth = 1

    // Horizontal lines
    for (let i = 0; i <= lineCount; i++) {
      const ratio = (i / lineCount) + (gridOffset / height)
      const clampedRatio = Math.min(ratio, 1)
      const y = vanishY + (height - vanishY) * clampedRatio * clampedRatio
      const spread = clampedRatio
      const x1 = vanishX - width * 0.6 * spread
      const x2 = vanishX + width * 0.6 * spread

      ctx.globalAlpha = clampedRatio * 0.8
      ctx.beginPath()
      ctx.moveTo(x1, y)
      ctx.lineTo(x2, y)
      ctx.stroke()
    }

    // Vertical converging lines
    const verticalCount = 10
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)'
    for (let i = 0; i <= verticalCount; i++) {
      const ratio = i / verticalCount
      const bottomX = width * ratio
      ctx.globalAlpha = 0.5
      ctx.beginPath()
      ctx.moveTo(vanishX, vanishY)
      ctx.lineTo(bottomX, height)
      ctx.stroke()
    }

    ctx.globalAlpha = 1
  }

  function drawParticles() {
    if (!ctx) return

    // Update + draw particles
    for (const p of particles) {
      // Mouse repulsion
      const dx = p.x - mouse.x
      const dy = p.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 120 && dist > 0) {
        const force = (120 - dist) / 120 * 0.8
        p.vx += (dx / dist) * force
        p.vy += (dy / dist) * force
      }

      // Damping
      p.vx *= 0.99
      p.vy *= 0.99

      p.x += p.vx
      p.y += p.vy

      // Wrap around edges
      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0

      // Draw particle
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.fill()
    }

    // Draw connections
    const connectionDist = 130
    ctx.lineWidth = 0.6
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < connectionDist) {
          const alpha = (1 - dist / connectionDist) * 0.35
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }

  function animate() {
    if (!ctx) return
    ctx.clearRect(0, 0, width, height)
    drawGrid()
    drawParticles()
    animId = requestAnimationFrame(animate)
  }

  // ── Event handlers ──

  function onResize() {
    const canvas = canvasRef.value
    if (!canvas) return
    const rect = canvas.parentElement?.getBoundingClientRect()
    if (!rect) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = rect.width
    height = rect.height
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx?.scale(dpr, dpr)
    initParticles()
  }

  function onMouseMove(e: MouseEvent) {
    const canvas = canvasRef.value
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  }

  function onMouseLeave() {
    mouse.x = -9999
    mouse.y = -9999
  }

  // ── Lifecycle ──

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return

    ctx = canvas.getContext('2d')
    if (!ctx) return

    onResize()

    if (prefersReducedMotion) {
      // Draw a single static frame
      drawGrid()
      drawParticles()
      return
    }

    animate()
    window.addEventListener('resize', onResize)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', onResize)
    const canvas = canvasRef.value
    if (canvas) {
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  })
}
