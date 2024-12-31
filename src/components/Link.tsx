interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-600 transition-colors hover:text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}