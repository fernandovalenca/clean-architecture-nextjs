export interface Storage {
  set<T>(key: string, value: T): Promise<void>;
  get<T>(ket: string): Promise<T>;
  remove(key: string): Promise<void>;
}
