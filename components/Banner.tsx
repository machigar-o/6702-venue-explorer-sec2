import { ThemedView } from "@/components/ThemedView";
import venueStyles from "./VenueStyles";
import { Image } from "react-native";

export default function Banner()
{
    // return JSX component
    return (
        <ThemedView 
        style={venueStyles.bannerContainer}>
            <Image
            source={require('@/assets/images/cover.jpg')}
            style={venueStyles.bannerImg}
            resizeMode="cover"
            />
        </ThemedView>
    );
}