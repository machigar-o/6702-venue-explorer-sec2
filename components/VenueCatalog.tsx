import { useEffect, useState } from "react"
import { ThemedText } from "./ThemedText"

export default function VenueCatalog()
{
    const [venueData, setVenueData] = useState<VenueItem[]>([])
    useEffect(()=>{
        // to fetch data from API
        fetchVenues()
    }, [])

    const fetchVenues = async() => {
        try {
            const response = await fetch("https://0ec6-34-75-120-134.ngrok-free.app/get_venues", {
                method: 'GET',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json'
                }
            })
            if(response.ok) {
                const json:VenueJson = await response.json()
                setVenueData(json.all_venues)
            }
        }
        catch (error) {
            console.log("Error fetching data: ", error)
        }
    }

    return(
        <ThemedText>There are {venueData.length} venues.</ThemedText>
    )
}