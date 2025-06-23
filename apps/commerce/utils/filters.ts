export function parseRange(value: string | undefined): { from: number; to: number } | null {
  if (!value) {
    return null;
  }

  const parts = value.split(':');
  
  if (parts.length !== 2) {
    return null;
  }

  const from = parseFloat(parts[0]);
  const to = parseFloat(parts[1]);

  if (isNaN(from) || isNaN(to)) {
    return null;
  }

  return { from, to };
} 