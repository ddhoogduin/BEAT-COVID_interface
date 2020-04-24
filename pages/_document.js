import Document, { Head, Main, NextScript } from 'next/document'

class CovidDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
            <Head>
                <link
                    href="../assets/semantic-ui/dist/semantic.css"
                    rel="stylesheet"
                />
            </Head>
            <body className="custom_class">
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
export default CovidDocument;