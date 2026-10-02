import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-6xl font-bold mb-4 tracking-tight">404</h2>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        Return to Home
      </Link>
    </div>
  );
}