export default function Center({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div className="w-3/5 mx-auto">{children}</div>
    </div>
  );
}
