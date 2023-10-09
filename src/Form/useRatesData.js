import { useEffect, useState } from "react";

export const useRatesData = () => {

    const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_7NtMMPbn6MlD45zlkgP2b89iMPZExOac2AEJzxV8";

    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { meta, data } = await response.json();

                setRatesData({
                    state: "success",
                    data,
                    meta,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);

    }, []);

    return ratesData;
};