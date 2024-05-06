import { useEffect, useState } from "react";

const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_7NtMMPbn6MlD45zlkgP2b89iMPZExOac2AEJzxV8&base_currency=PLN";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        status: "loading",
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
                    status: "success",
                    data,
                    meta,
                });

            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);

    }, []);

    return ratesData;
};