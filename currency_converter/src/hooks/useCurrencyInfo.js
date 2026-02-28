import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/8425669655aff56c55d30d1d/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;