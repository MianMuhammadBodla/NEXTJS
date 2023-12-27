import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} passHref >
      <div >{children}</div>
      Button  
    </Link>
  );
}

export default Button;
