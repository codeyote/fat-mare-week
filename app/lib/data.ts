import { AdminConfig } from "./definitions"
import { kv } from "@vercel/kv";

export async function fetchConfig() {
    const kvStreamUrl = await kv.get("streamUrl")
    const kvAlertNumber = await kv.get("alertNumber")
    console.log(kvStreamUrl)
    console.log(kvAlertNumber)
    return <AdminConfig> {
        streamUrl: kvStreamUrl, 
        alertNumber: kvAlertNumber,
        alertConsent: false 
    }
}