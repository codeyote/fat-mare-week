import { AdminConfig } from "./definitions"

export async function fetchConfig() {
    return <AdminConfig> {
        streamUrl: "https://www.example.com", 
        alertNumber: "18777804236",
        alertConsent: false 
    }
}