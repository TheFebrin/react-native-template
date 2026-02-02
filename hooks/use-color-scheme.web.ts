import { useEffect, useState } from 'react';
import { useColorScheme as useReactNativeColorScheme } from 'react-native';

import { normalizeColorScheme, type AppColorScheme } from '@/hooks/color-scheme';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme(): AppColorScheme {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = normalizeColorScheme(useReactNativeColorScheme());

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}
