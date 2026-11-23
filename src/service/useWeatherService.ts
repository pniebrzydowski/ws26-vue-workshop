export const useWeatherService = () => {
    const getGeoLocationFromName = async (name: string) => {
        const urlParams = `?name=${name}`;
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search${urlParams}`);
        const json = await response.json();
        return json;
    }

    return { getGeoLocationFromName };
}