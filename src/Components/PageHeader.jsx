export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <div className="mt-3 h-1 w-16 bg-gold" />
        {subtitle && <p className="mt-4 max-w-2xl text-white/80">{subtitle}</p>}
      </div>
    </div>
  );
}
