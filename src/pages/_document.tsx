import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name='description'
          content="Yulei's Homepage. You can find my bio and contact info here, I'll also update my projects and posts here regularly. 小诸的个人主页。这里有我的简介和联系方式，我也会经常在这儿更新自己的文章以及项目。"
        />
        <link rel='icon' href='/images/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe&display=swap'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
