import { memo } from 'react';
import { Search } from 'lucide-react';

export const NoResults = memo(() => (
  <div className="text-center py-12">
    <Search className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
    <p className="text-gray-500 dark:text-gray-400 text-lg">
      No se encontraron eventos con los filtros seleccionados.
    </p>
  </div>
));