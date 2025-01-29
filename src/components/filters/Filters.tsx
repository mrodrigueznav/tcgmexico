import { memo } from 'react';
import { Calendar, Store as StoreIcon, DicesIcon } from 'lucide-react';
import { FilterSelect } from './FilterSelect';
import { Store } from '../../data/stores';

interface FiltersProps {
  selectedEstado: string;
  selectedStore: string;
  selectedGame: string;
  selectedDay: string;
  estados: string[];
  storesInEstado: Store[];
  daysOrder: string[];
  onEstadoChange: (value: string) => void;
  onStoreChange: (value: string) => void;
  onGameChange: (value: string) => void;
  onDayChange: (value: string) => void;
}

export const Filters = memo(({ 
  selectedEstado,
  selectedStore,
  selectedGame,
  selectedDay,
  estados,
  storesInEstado,
  daysOrder,
  onEstadoChange,
  onStoreChange,
  onGameChange,
  onDayChange
}: FiltersProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-indigo-100 dark:border-gray-700 p-4 mb-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <FilterSelect
        label="Estado"
        value={selectedEstado}
        onChange={onEstadoChange}
        Icon={Calendar}
        options={estados.map(estado => ({ value: estado, label: estado }))}
      />
      <FilterSelect
        label="Tienda"
        value={selectedStore}
        onChange={onStoreChange}
        Icon={StoreIcon}
        options={[
          { value: 'all', label: 'Todas las tiendas' },
          ...storesInEstado.map(store => ({ value: store.id, label: store.name }))
        ]}
      />
      <FilterSelect
        label="Juego"
        value={selectedGame}
        onChange={onGameChange}
        Icon={DicesIcon}
        options={[
          { value: 'all', label: 'Todos los juegos' },
          { value: 'Pokemon', label: 'Pokemon' },
          { value: 'Lorcana', label: 'Lorcana' }
        ]}
      />
      <FilterSelect
        label="Día"
        value={selectedDay}
        onChange={onDayChange}
        Icon={Calendar}
        options={[
          { value: 'all', label: 'Todos los días' },
          ...daysOrder.map(day => ({ value: day, label: day }))
        ]}
      />
    </div>
  </div>
));