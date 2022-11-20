import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,800;1,400&display=swap" rel="stylesheet"/> 
            </Head>
            <Body>
                <Main />
                <NextScript />
            </Body>
        </Html>
    );
}

