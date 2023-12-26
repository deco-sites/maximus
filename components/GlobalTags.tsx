import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <meta name="google-site-verification" content="fOuk4oYX2s2kRLnAwkTOYB8CDwt8LeWEOKN0bCzzU6g" />
    </Head>
  );
}

export default GlobalTags;
