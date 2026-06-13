import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const buttonClassName = className
    ? `${styles.button} ${styles[variant]} ${className}`
    : `${styles.button} ${styles[variant]}`;

  return (
    <a className={buttonClassName} {...props}>
      {children}
    </a>
  );
}
