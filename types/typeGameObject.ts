export interface TypeGameObject {
  title: string;
  provider: string;
  collections: Record<string, number>;
  real: Record<string, { id: number; jackpot?: number }>;
  demo?: string;
  key?: string;
  [key: string]: any;
}
