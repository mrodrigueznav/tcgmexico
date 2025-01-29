import { useMemo } from 'react';
import { Store, stores } from './data/stores';
import { DayCard } from './components/day/DayCard';
import { Header } from './components/layout/Header';
import { Filters } from './components/filters/Filters';
import { NoResults } from './components/NoResults';
import { useFilters } from './hooks/useFilters';
import { useTheme } from './hooks/useTheme';
import { useTimeFormat } from './hooks/useTimeFormat';
import { getCurrentDayOrder } from './utils/dates';

const estados = Array.from(new Set(stores.map(store => store.estado))).sort();
const daysOrder = getCurrentDayOrder();

function App() {
  const { isDark, toggleTheme } = useTheme();
  const { is24Hour, toggleTimeFormat, formatTime } = useTimeFormat();
  const {
    selectedEstado,
    selectedGame,
    selectedDay,
    selectedStore,
    filteredStores,
    storesInEstado,
    setSelectedGame,
    setSelectedDay,
    setSelectedStore,
    handleEstadoChange
  } = useFilters();

  const eventsByDay = useMemo(() => {
    return daysOrder.reduce((acc, day) => {
      if (selectedDay !== 'all' && day !== selectedDay) {
        return acc;
      }

      const storesWithEvents = filteredStores
        .map(store => ({
          store,
          events: store.events.filter(event => 
            event.day === day && 
            (selectedGame === 'all' || event.game === selectedGame)
          )
        }))
        .filter(({ events }) => events.length > 0);

      if (storesWithEvents.length > 0) {
        acc[day] = storesWithEvents;
      }
      return acc;
    }, {} as Record<string, Array<{ store: Store; events: Store['events'] }>>);
  }, [filteredStores, selectedDay, selectedGame]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
      <Header 
        isDark={isDark} 
        is24Hour={is24Hour}
        onToggleTheme={toggleTheme}
        onToggleTimeFormat={toggleTimeFormat}
      />

      <main className="max-w-[1600px] mx-auto px-4 py-8">
        <Filters
          selectedEstado={selectedEstado}
          selectedStore={selectedStore}
          selectedGame={selectedGame}
          selectedDay={selectedDay}
          estados={estados}
          storesInEstado={storesInEstado}
          daysOrder={daysOrder}
          onEstadoChange={handleEstadoChange}
          onStoreChange={setSelectedStore}
          onGameChange={setSelectedGame}
          onDayChange={setSelectedDay}
        />

        <div className="space-y-6">
          {Object.entries(eventsByDay).map(([day, stores]) => (
            <DayCard 
              key={day} 
              day={day} 
              stores={stores}
              formatTime={formatTime}
            />
          ))}
        </div>

        {Object.keys(eventsByDay).length === 0 && <NoResults />}
      </main>
    </div>
  );
}

export default App;