export async function fetchHelper<T>(url: string): Promise<T | null> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.error(`Fetch error: ${response.status} ${response.statusText}`);
        return null;
      }

      const data = (await response.json()) as T;
      console.log(data);
      return data;
    } catch (error) {
      console.error('Fetch failed:', error);
      return null;
    }
  }
