import { memo } from 'react';
import { Store as StoreIcon } from 'lucide-react';

interface StoreLogoProps {
  logo?: string;
  name: string;
}

export const StoreLogo = memo(({ logo, name }: StoreLogoProps) => {
  if (logo) {
    return (
      <img 
        src={logo}
        alt={`${name} Logo`}
        className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
        loading="lazy"
      />
    );
  }
  
  return (
    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
      <StoreIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
    </div>
  );
});

StoreLogo.displayName = 'StoreLogo';