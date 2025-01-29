import { memo } from 'react';
import { Calendar } from 'lucide-react';

interface DayLabelProps {
  day: string;
}

export const DayLabel = memo(({ day }: DayLabelProps) => (
  <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-indigo-100 dark:border-gray-700 py-4 px-2">
    <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
    <div className="[writing-mode:vertical-lr] rotate-180 text-xl font-bold text-gray-900 dark:text-white">
      {day}
    </div>
  </div>
));

DayLabel.displayName = 'DayLabel';