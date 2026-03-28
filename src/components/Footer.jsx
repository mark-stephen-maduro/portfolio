export function Footer() {
  return (
    <footer className="bg-void px-8 md:px-16 py-10 border-t border-white/5" data-dark>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">System Operational</span>
        </div>
        <p className="font-mono text-xs text-white/40 tracking-wider">
          © {new Date().getFullYear()} Mark Stephen Maduro · Manila, PH
        </p>
      </div>
    </footer>
  )
}
