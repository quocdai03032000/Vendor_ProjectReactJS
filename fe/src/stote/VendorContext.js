import { useState, createContext } from 'react'

const VendorContext = createContext();


function VendorProvider({ children }) {
    const [vendor, setVendor] = useState([])

    const value = {
        vendor,
        setVendor,
    }
    return (
        <VendorContext.Provider value={value}>
            {children}
        </VendorContext.Provider>
    )
}

export { VendorContext, VendorProvider }