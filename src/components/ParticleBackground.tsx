export function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 24 }).map((_, idx) => (
        <span
          key={idx}
          className="particle absolute h-2 w-2 rounded-full bg-cyan-300/40"
          style={{
            left: `${(idx * 17) % 100}%`,
            animationDelay: `${idx * 0.4}s`,
            animationDuration: `${9 + (idx % 7)}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.2),_transparent_45%)]" />
    </div>
  );
}
