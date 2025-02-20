import { ReactNode } from 'react';

interface FormFieldProps {
  error?: string;
  children?: ReactNode;
  divProps?: React.HTMLAttributes<HTMLDivElement>;
}

export default function FormField({ error, children, divProps }: Readonly<FormFieldProps>) {
  return (
    <div className="flex w-full flex-col gap-1 " {...divProps}>
      {children}
      <small className="text-error text-[9px] font-medium h-[16px] truncate">{error}</small>
    </div>
  );
}
