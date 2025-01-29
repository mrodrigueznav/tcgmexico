import { memo } from 'react';
import { DicesIcon, Sun, Moon, Clock } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  is24Hour: boolean;
  onToggleTheme: () => void;
  onToggleTimeFormat: () => void;
}

export const Header = memo(({ isDark, is24Hour, onToggleTheme, onToggleTimeFormat }: HeaderProps) => (
  <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-indigo-100 dark:border-gray-700">
    <div className="max-w-[1600px] mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 dark:bg-indigo-500 p-2 rounded-lg">
            <DicesIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            TCG México
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTimeFormat}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle time format"
          >
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {is24Hour ? '24h' : '12h'}
              </span>
            </div>
          </button>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  </header>
));