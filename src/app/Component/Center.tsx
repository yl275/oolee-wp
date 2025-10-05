export default function Center({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div className="xl:w-3/5 w-4/5 mx-auto">{children}</div>
    </div>
  );
}
