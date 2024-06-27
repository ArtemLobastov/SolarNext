import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOff } from 'lucide-react';

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="flex gap-2 items-center">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={className}
          {...props}
        />
        {showPassword ? (
          <EyeOff onClick={() => setShowPassword(false)} />
        ) : (
          <EyeIcon onClick={() => setShowPassword(true)} />
        )}
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
