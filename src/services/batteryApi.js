const API_URL = "http://localhost:8000";

/**
 * A helper function to handle fetch responses and errors.
 * @param {string} url - The URL to fetch.
 * @returns {Promise<any>} - The JSON data from the response.
 */
const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error);
    throw error;
  }
};

/**
 * Fetches the high-level summary data for all batteries.
 * @returns {Promise<Array>} - A promise that resolves to the summary data array.
 */
export const fetchSummaryData = () => {
  return fetchJson(`${API_URL}/api/summary/`);
};

/**
 * Fetches the detailed cycle data for a single battery.
 * @param {string} voltageType - 'normal' or 'reduced'.
 * @param {number} batteryNumber - The number of the battery.
 * @returns {Promise<Object>} - A promise that resolves to the detailed battery object.
 */
export const fetchBatteryDetail = (voltageType, batteryNumber) => {
  return fetchJson(`${API_URL}/api/batteries/${voltageType}/${batteryNumber}/`);
};

/**
 * Fetches the list of batteries for a specific voltage type.
 * @param {string} voltageType - 'normal' or 'reduced'.
 * @returns {Promise<Array>} - A promise that resolves to the list of batteries.
 */
export const fetchBatteryList = (voltageType) => {
  return fetchJson(`${API_URL}/api/batteries/${voltageType}/`);
};
