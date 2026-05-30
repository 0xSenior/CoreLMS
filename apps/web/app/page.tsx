const metrics = [
  { label: "Protected modules", value: "128" },
  { label: "Active sessions", value: "24K" },
  { label: "Signed HLS window", value: "45s" }
];

const courses = [
  "Zero Trust Cloud Architecture",
  "Advanced Threat Modeling",
  "Secure Video Delivery Systems"
];

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-aqua-300/30 bg-white/8 px-4 py-2 text-sm text-aqua-300 shadow-neon-cyan backdrop-blur-xl">
            Secure LMS architecture initialized
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">
              Futuristic learning, guarded like a command center.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-platinum-300">
              CoreLMS starts with cyber-glassmorphism, SSR-safe GSAP motion, and
              a backend boundary designed for signed streaming, RBAC, and hardened sessions.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#course-grid"
              className="magnetic-button rounded-full px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.28em] text-white"
            >
              Enter Command Deck
            </a>
            <a
              href="/api/health"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.28em] text-platinum-100 backdrop-blur-xl transition hover:border-aqua-300/45 hover:text-aqua-300"
            >
              API Status
            </a>
          </div>
        </div>

        <div className="glass-panel glass-card neon-border p-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-cyber-void/55 p-5">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="font-cyber-mono text-xs uppercase tracking-[0.36em] text-aqua-300">
                  Core Signal
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Security Telemetry</h2>
              </div>
              <div className="h-3 w-3 rounded-full bg-neon-lime shadow-[0_0_24px_rgb(200_255_77_/_0.85)]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/7 p-4">
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-platinum-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div id="course-grid" data-course-grid className="mt-6 grid gap-4">
              {courses.map((course, index) => (
                <article
                  key={course}
                  data-course-card
                  className="glass-card rounded-3xl border border-white/10 bg-white/7 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-cyber-mono text-xs text-aqua-300">
                        MODULE {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{course}</h3>
                    </div>
                    <span className="rounded-full border border-aqua-300/30 px-3 py-1 text-xs text-aqua-300">
                      armed
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
