import { memo } from 'react';
import { Store } from '../../data/stores';
import { StoreHeader } from './StoreHeader';
import { EventCard } from '../event/EventCard';

interface StoreCardProps {
  store: Store;
  events: Store['events'];
  getGoogleMapsUrl: (store: Store) => string;
  formatTime: (time: string) => string;
}

export const StoreCard = memo(({ store, events, getGoogleMapsUrl, formatTime }: StoreCardProps) => (
  <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 flex flex-col h-full">
    <StoreHeader 
      store={store} 
      getGoogleMapsUrl={getGoogleMapsUrl} 
    />
    <div className="p-3 space-y-2 flex-1">
      {events.map((event, idx) => (
        <EventCard 
          key={`${store.id}-${idx}`} 
          event={event}
          formatTime={formatTime}
        />
      ))}
    </div>
  </div>
));

StoreCard.displayName = 'StoreCard';