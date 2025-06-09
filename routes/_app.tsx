import GlobalTags from "$store/components/GlobalTags.tsx";
import Theme from "$store/sections/Theme/Theme.tsx";

import { defineApp } from "$fresh/server.ts";

const sw = () =>
  addEventListener("load", () => {
    if (navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  });

export default defineApp((_req, ctx) => {
  console.log("rodei");
  return (
    <html lang="pt-BR">
      {/* Include default fonts and css vars */}
      <Theme />

      {/* Include Icons and manifest */}
      <GlobalTags />

      {/* Rest of Preact tree */}
      <ctx.Component />

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
    </html>
  );
});
