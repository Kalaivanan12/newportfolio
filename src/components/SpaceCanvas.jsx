import { useEffect, useRef } from 'react'

export default function SpaceCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle Setup
    const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 100)
    const particles = []
    
    const colors = [
      'rgba(96, 165, 250, ',  // blue
      'rgba(167, 139, 250, ', // purple
      'rgba(244, 63, 94, ',   // pink/red
      'rgba(52, 211, 153, '   // green
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    // Mouse interaction
    const mouse = { x: null, y: null, radius: 150 }
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background gradient
      ctx.fillStyle = '#06050c'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const W = canvas.width
      const H = canvas.height

      // Update and Draw Particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Boundary collision
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1

        // Mouse push effect
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            const angle = Math.atan2(dy, dx)
            p.x += Math.cos(angle) * force * 2
            p.y += Math.sin(angle) * force * 2
          }
        }

        // Draw particle dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color + '0.7)'
        ctx.fill()
      })

      // Draw Connection Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            const alpha = (110 - dist) / 110 * 0.15
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            // Use gradient connecting line
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            grad.addColorStop(0, p1.color + alpha + ')')
            grad.addColorStop(1, p2.color + alpha + ')')
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw line to mouse
      if (mouse.x !== null && mouse.y !== null) {
        particles.forEach((p) => {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const alpha = (mouse.radius - dist) / mouse.radius * 0.2
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="space-canvas"
      aria-hidden="true"
    />
  )
}
