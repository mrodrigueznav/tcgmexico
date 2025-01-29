import { memo } from 'react';
import { MapPin } from 'lucide-react';
import { Store } from '../../data/stores';
import { StoreLogo } from '../logos/StoreLogo';
import { SocialLinks } from './SocialLinks';

interface StoreHeaderProps {
  store: Store;
  getGoogleMapsUrl: (store: Store) => string;
}

export const StoreHeader = memo(({ store, getGoogleMapsUrl }: StoreHeaderProps) => (
  <div className="p-4 border-b border-gray-50 dark:border-gray-700">
    <div className="flex items-start gap-3">
      <StoreLogo logo={store.logo} name={store.name} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate" title={store.name}>
            {store.name}
          </h3>
          <SocialLinks contact={store.contact} />
        </div>
        
        <a 
          href={getGoogleMapsUrl(store)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-1.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mt-1 group/address"
        >
          <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-400 dark:text-gray-500 group-hover/address:text-indigo-500 dark:group-hover/address:text-indigo-400" />
          <p className="text-xs line-clamp-2" title={store.address}>{store.address}</p>
        </a>
      </div>
    </div>
  </div>
));