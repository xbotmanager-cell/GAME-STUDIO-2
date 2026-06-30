'use client';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen bg-black text-white transition-colors duration-300">
        {children}
      </div>
    </>
  );
}
