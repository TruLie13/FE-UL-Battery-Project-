import { useState, useEffect } from "react";
import { fetchSummaryData, fetchHealthCheck } from "../services/batteryApi.js";

const CACHE_KEY_DATA = "battery_summary_data";
const CACHE_KEY_TIMESTAMP = "battery_data_timestamp";

export default function useBatteryData() {
  const [batteries, setBatteries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const manageData = async () => {
      try {
        const healthCheck = await fetchHealthCheck();
        const backendTimestamp = healthCheck.last_updated;

        const cachedTimestamp = localStorage.getItem(CACHE_KEY_TIMESTAMP);
        const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY_DATA));

        if (
          backendTimestamp &&
          backendTimestamp === cachedTimestamp &&
          cachedData
        ) {
          setBatteries(cachedData);
        } else {
          const newData = await fetchSummaryData();
          setBatteries(newData);

          localStorage.setItem(CACHE_KEY_DATA, JSON.stringify(newData));
          if (backendTimestamp) {
            localStorage.setItem(CACHE_KEY_TIMESTAMP, backendTimestamp);
          }
        }
      } catch (e) {
        const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY_DATA));
        if (cachedData) {
          setBatteries(cachedData);
        } else {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    manageData();
  }, []);

  return { batteries, isLoading, error };
}
