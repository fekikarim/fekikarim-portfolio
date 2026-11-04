const NotFound = () => {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center p-6">
      <div className="w-full max-w-md border border-rule">
        <div className="p-8">
          <p className="display text-7xl text-foreground">404</p>
          <h1 className="mt-4 text-xl font-semibold text-foreground">This sheet is not in the set</h1>
          <p className="mt-2 text-muted-foreground">The page you requested does not exist or has moved.</p>
          <a
            href="/"
            className="mt-6 inline-flex h-11 items-center bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-foreground hover:text-background"
          >
            Back to the portfolio
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
