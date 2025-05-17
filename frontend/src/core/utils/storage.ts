class Storage {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  setJSON(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): string | null {
    return localStorage.getItem(key) || null;
  }

  getJSON(key: string): any {
    const json = JSON.parse(localStorage.getItem(key) || "{}");
    if (Object.keys(json).length === 0) return null;
    return json;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export const storage = new Storage();
