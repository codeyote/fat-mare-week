import { fetchConfig } from "../lib/data";
import { updateConfig } from "../lib/actions";

export default async function Page() {
  const adminConfig = await Promise.resolve(fetchConfig())
  return (
    <main className="flex h-dvh flex-col">
      <form action={updateConfig}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Stream Url*/}
          <div className="mb-4">
            <label
              htmlFor="streamUrl"
              className="mb-2 block text-sm font-medium"
            >
              Enter stream url
            </label>
            <input
              id="streamUrl"
              name="streamUrl"
              defaultValue={adminConfig.streamUrl}
              type="url"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>

          {/* Alert Number */}
          <div className="mb-4">
            <label
              htmlFor="alertNumber"
              className="mb-2 block text-sm font-medium"
            >
              Enter phone number for SMS alerts
            </label>
            <input
              id="alertNumber"
              name="alertNumber"
              defaultValue={adminConfig.alertNumber}
              type="tel"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          {/* Alert Consent */}
          <div className="mb-4">
            <label
              htmlFor="alertConsent"
              className="mb-2 block text-sm font-medium"
            >
              I agree to receive SMS alerts at this number
            </label>
            <input
              id="alertConsent"
              name="alertConsent"
              type="checkbox"
              className="justify-start peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-start gap-4 ml-2">
          <button
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}
