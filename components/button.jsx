export function Button({ children, className }) {
  return <button className={`py-2 px-4 rounded-xl font-semibold ${className}`}>{children}</button>;
}
