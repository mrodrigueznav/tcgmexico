import { memo } from 'react';
import { Clock } from 'lucide-react';
import { Store } from '../../data/stores';
import { GameLogo } from '../logos/GameLogo';

interface EventCardProps {
  event: Store['events'][0];
  formatTime: (time: string) => string;
}

const gameStyles = {
  Pokemon: {
    gradient: 'from-yellow-50 via-blue-50/30 to-white dark:from-blue-950/30 dark:via-yellow-900/20 dark:to-gray-800',
    border: 'border-yellow-200/50 dark:border-yellow-700/30',
    hover: 'hover:border-blue-300 dark:hover:border-blue-700/50',
    timeText: 'text-blue-600 dark:text-yellow-400',
    iconColor: 'text-yellow-500 dark:text-yellow-400'
  },
  Lorcana: {
    gradient: 'from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-800',
    border: 'border-indigo-100 dark:border-indigo-900/30',
    hover: 'hover:border-indigo-200 dark:hover:border-indigo-800/30',
    timeText: 'text-indigo-700 dark:text-indigo-400',
    iconColor: 'text-indigo-400 dark:text-indigo-500'
  }
} as const;

export const EventCard = memo(({ event, formatTime }: EventCardProps) => {
  const styles = gameStyles[event.game];

  return (
    <div 
      className={`bg-gradient-to-br ${styles.gradient} rounded-lg p-2.5 border ${styles.border} ${styles.hover} transition-colors group/event`}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <Clock className={`w-3.5 h-3.5 ${styles.iconColor} group-hover/event:scale-110 transition-transform`} />
        <span className={`text-sm font-medium ${styles.timeText}`}>{formatTime(event.time)}</span>
        <div className="ml-auto">
          <GameLogo game={event.game} />
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 pl-5.5" title={event.description}>
        {event.description}
      </p>
    </div>
  );
});