import { useState } from 'react';

export function useTimeFormat() {
  const [is24Hour, setIs24Hour] = useState(true);

  const toggleTimeFormat = () => {
    setIs24Hour(!is24Hour);
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);

    if (is24Hour) {
      return time;
    }

    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${period}`;
  };

  return { is24Hour, toggleTimeFormat, formatTime };
}