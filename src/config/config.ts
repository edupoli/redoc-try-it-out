/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class Config<T extends object> {
  protected readonly options: T;

  public constructor(options: T) {
    this.options = options;

    for (const key of Object.keys(options) as Array<keyof T>) {
      const option = key in this ? key : (`_${String(key)}` as keyof this);
      if (option in this) {
        (this as any)[option] = options[key];
      }
    }
  }

  protected get cdnUrl(): string {
    return "https://cdn.jsdelivr.net/npm/";
  }
}
