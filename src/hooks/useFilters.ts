import { useState, useCallback, useMemo } from 'react';
import { Store, stores } from '../data/stores';

export function useFilters() {
  const [selectedEstado, setSelectedEstado] = useState<string>('Ciudad de México');
  const [selectedGame, setSelectedGame] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const [selectedStore, setSelectedStore] = useState<string>('all');

  const handleEstadoChange = useCallback((value: string) => {
    setSelectedEstado(value);
    setSelectedStore('all');
  }, []);

  const filteredStores = useMemo(() => stores.filter(store => {
    const matchesEstado = store.estado === selectedEstado;
    const matchesStore = selectedStore === 'all' || store.id === selectedStore;
    return matchesEstado && matchesStore;
  }), [selectedEstado, selectedStore]);

  const storesInEstado = useMemo(() => 
    stores
      .filter(store => store.estado === selectedEstado)
      .sort((a, b) => a.name.localeCompare(b.name)),
    [selectedEstado]
  );

  return {
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
  };
}