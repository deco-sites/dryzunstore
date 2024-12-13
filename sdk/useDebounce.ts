import { useRef } from "preact/hooks";

// deno-lint-ignore no-explicit-any
export default function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 300,
): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<number | undefined>(undefined);

  const debouncedFunction = (...args: Parameters<T>) => {
    // Limpa o timeout anterior
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
    }

    // Define um novo timeout
    timeoutRef.current = globalThis.setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
}
