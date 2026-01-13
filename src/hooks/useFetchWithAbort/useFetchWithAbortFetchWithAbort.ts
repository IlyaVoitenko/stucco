import { ICategory } from "@/types";
import { useEffect, useState } from "react";

export function useFetchWithAbort({ url }: { url: string }) {
  const [data, setData] = useState<ICategory[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let mounted = true; // флаг, чтобы не вызывать setState после анмаунта

    const loadData = async () => {
      try {
        if (!mounted) return;
        setLoading(true);
        const res = await fetch(url, { signal });
        console.log("res.", res);
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        if (mounted && !signal.aborted) {
          setData(json);
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        if (mounted) setError(err as Error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadData();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
