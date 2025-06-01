export function Card({ children, className }) {
  return <div className={`rounded-xl shadow-md ${className}`}>{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
