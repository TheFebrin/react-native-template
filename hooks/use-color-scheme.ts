import { useColorScheme as useReactNativeColorScheme } from "react-native";

export type AppColorScheme = "light" | "dark";

export function useColorScheme(): AppColorScheme {
  const scheme = useReactNativeColorScheme();
  return scheme === "dark" ? "dark" : "light";
}
