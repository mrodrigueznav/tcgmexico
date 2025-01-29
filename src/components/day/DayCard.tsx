import { useMemo } from 'react';
import { Store } from '../../data/stores';
import { DayLabel } from './DayLabel';
import { StoreCard } from '../store/StoreCard';

interface DayCardProps {
  day: string;
  stores: Array<{
    store: Store;
    events: Store['events'];
  }>;
  formatTime: (time: string) => string;
}

export function DayCard({ day, stores, formatTime }: DayCardProps) {
  const getGoogleMapsUrl = useMemo(() => (store: Store) => {
    const query = encodeURIComponent(`${store.name} ${store.address}, México`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }, []);

  return (
    <div className="flex gap-4">
      <DayLabel day={day} />
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {stores.map(({ store, events }) => (
          <StoreCard
            key={store.id}
            store={store}
            events={events}
            getGoogleMapsUrl={getGoogleMapsUrl}
            formatTime={formatTime}
          />
        ))}
      </div>
    </div>
  );
}