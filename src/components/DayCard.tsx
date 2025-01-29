import { memo, useMemo } from 'react';
import { Store } from '../data/stores';
import { Calendar, MapPin, Clock, Store as StoreIcon, ExternalLink } from 'lucide-react';

interface DayCardProps {
  day: string;
  stores: Array<{
    store: Store;
    events: Store['events'];
  }>;
}

// Memoized store logo component
const StoreLogo = memo(({ logo, name }: { logo?: string; name: string }) => {
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

// Memoized game logo component
const GameLogo = memo(({ game }: { game: 'Pokemon' | 'Lorcana' }) => {
  const logoProps = {
    Lorcana: {
      src: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoicmF2ZW5zYnVyZ2VyXC9maWxlXC9GaktkdlNiazd6ZmlQSFFTa29TQS5wbmcifQ:ravensburger:CI9y36GukozcewofnTAnqP4CMPhkz9mXNnuNfTgtbfQ?width=2400",
      alt: "Lorcana"
    },
    Pokemon: {
      src: "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png",
      alt: "Pokemon"
    }
  };

  const { src, alt } = logoProps[game];
  
  return (
    <img
      src={src}
      alt={alt}
      className="h-7 w-auto"
      loading="lazy"
    />
  );
});

GameLogo.displayName = 'GameLogo';

// Memoized store header component
const StoreHeader = memo(({ store, getStoreUrl, getGoogleMapsUrl }: { 
  store: Store; 
  getStoreUrl: (store: Store) => string | undefined;
  getGoogleMapsUrl: (store: Store) => string;
}) => (
  <div className="p-4 border-b border-gray-50 dark:border-gray-700">
    <div className="flex items-start gap-3">
      <StoreLogo logo={store.logo} name={store.name} />
      <div className="min-w-0">
        {getStoreUrl(store) ? (
          <a
            href={getStoreUrl(store)}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" title={store.name}>
              {store.name}
            </h3>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 group-hover/link:text-indigo-500 dark:group-hover/link:text-indigo-400 transition-colors" />
          </a>
        ) : (
          <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate" title={store.name}>
            {store.name}
          </h3>
        )}
        
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

StoreHeader.displayName = 'StoreHeader';

// Memoized event card component
const EventCard = memo(({ event }: { event: Store['events'][0] }) => (
  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-700 rounded-lg p-2.5 border border-gray-100 dark:border-gray-600">
    <div className="flex items-center gap-2 mb-1.5">
      <Clock className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{event.time}</span>
      <div className="ml-auto">
        <GameLogo game={event.game} />
      </div>
    </div>
    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 pl-5.5" title={event.description}>
      {event.description}
    </p>
  </div>
));

EventCard.displayName = 'EventCard';

// Main DayCard component
export function DayCard({ day, stores }: DayCardProps) {
  // Memoize URL generation functions
  const getGoogleMapsUrl = useMemo(() => (store: Store) => {
    const query = encodeURIComponent(`${store.name} ${store.address}, México`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }, []);

  const getStoreUrl = useMemo(() => (store: Store) => {
    return store.contact.website || store.contact.facebook || store.contact.instagram;
  }, []);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-indigo-100 dark:border-gray-700 py-4 px-2">
        <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
        <div className="[writing-mode:vertical-lr] rotate-180 text-xl font-bold text-gray-900 dark:text-white">
          {day}
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {stores.map(({ store, events }) => (
          <div key={store.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300">
            <StoreHeader 
              store={store} 
              getStoreUrl={getStoreUrl} 
              getGoogleMapsUrl={getGoogleMapsUrl} 
            />
            <div className="p-3 space-y-2">
              {events.map((event, idx) => (
                <EventCard key={`${store.id}-${idx}`} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}