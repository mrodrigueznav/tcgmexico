import { memo } from 'react';
import { Facebook, Instagram, Globe } from 'lucide-react';
import { Store } from '../../data/stores';

interface SocialLinksProps {
  contact: Store['contact'];
}

export const SocialLinks = memo(({ contact }: SocialLinksProps) => {
  const { facebook, instagram, website } = contact;

  return (
    <div className="flex items-center gap-1.5">
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label="Website"
        >
          <Globe className="w-4 h-4" />
        </a>
      )}
      {facebook && (
        <a
          href={facebook.startsWith('http') ? facebook : `https://facebook.com/${facebook}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
      )}
      {instagram && (
        <a
          href={instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
      )}
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';