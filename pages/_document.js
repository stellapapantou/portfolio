import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
  const profile = {
    url: "https://www.stellapapantou.com",
    title: "Stella Papantou Personal Portfolio",
    description: "Hey there, I am Stella Papantou and I build digital products",
    imagePath: "/images/preview-img.png"
  }
  return (
    <Html lang="en">
      <Head>
        <title key={"site-title"}>{profile.title}</title>
        <meta key={"site-desc"} name="description" content={profile.description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/images/favicon-light.png" type='image/png' media="(prefers-color-scheme: light)"/>
        <link rel="icon" href="/images/favicon-dark.png" type='image/png' media="(prefers-color-scheme: dark)"/>

        <meta name="image" content={profile.imagePath}/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={profile.url}/>
        <meta property="og:title" content={profile.title}/>
        <meta property="og:description" content={profile.description}/>
        <meta property="og:image" content={profile.imagePath}/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={profile.url}/>
        <meta property="twitter:title" content={profile.title}/>
        <meta property="twitter:description" content={profile.description}/>
        <meta property="twitter:image" content={profile.imagePath}/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
