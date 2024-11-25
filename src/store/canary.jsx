import { createContext, useState } from "react";

import axios from "axios";

export const CanaryContext = createContext({
    canary: [],
    getCanary: () => {},
});

export default function CanaryContextProvider({children}) {
    const [canaryList, setCanaryList] = useState([]);

    async function getAllCanary() {
        await axios.get('https://canary-db-default-rtdb.europe-west1.firebasedatabase.app/birds.json')
        .then((response) => setCanaryList(Object.values(response.data)));
    }

const ctxValue = {
    canary: canaryList,
    getCanary: getAllCanary,
}
return <CanaryContext.Provider value={ctxValue}>
    {children}
</CanaryContext.Provider>
}

