import "../styles/globals.css";
import "../styles/624ac5010380c775.css";
import "../styles/d02ea5eb9d440bf8.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {useEffect} from "react";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        if (!window) {
            return;
        }

        (function (w: any, d, x, id) {
            const s = d.createElement("script");
            s.src =
                "https://db08fjupg2abb.cloudfront.net/amazon-connect-chat-interface-client.js";
            s.async = true;
            s.id = id;
            d.getElementsByTagName("head")[0].appendChild(s);
            w[x] =
                w[x] ||
                function () {
                    (w[x].ac = w[x].ac || []).push(arguments);
                };
        })(
            window,
            document,
            "amazon_connect",
            "cb58e805-e425-461b-a737-d6bacbbf5cce"
        );
        (window as any).amazon_connect("styles", {
            openChat: {color: "#ffffff", backgroundColor: "black"},
            closeChat: {color: "#ffffff", backgroundColor: "black"},
        });
        (window as any).amazon_connect(
            "snippetId",
            "QVFJREFIaTVucjV6blZLVmVuUmIvVHpJa0xaVTRpNURvQ3pianQ3R1hoWGhVcmtmTlFHWWlHMFdoelp6SmJnRHd0SSthM1hSQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNbjJtMTJoSWVDQ3J2WCtma0FnRVFnQ3N1OEdoOEpjSnlSSWNsb3I1RjNDbE9kVTBGaHBCazg0ZFJSTSt2ZDhUOWUxb1ZPMWViMTl3TTJkZlA6OnZ3OFdrZHpnd2ltKzlJeTNQT25OdVM0R2ZmM2o0a2ZkZU8zZHBGa01kSEcxSUVYOHhnRld3K01mUTZCYS90R2RwaSt0VVZDNS82TUdzbDYrNkViUGRNRDBrVkQ3ME56dTRScUpsR24wUEh4SWl5aisvZHo2VXNhZktOMVF5MzhKTmQ3amdUUmF0SlNwZllnaUJCaFVGY1ozcFk4N1p4MD0="
        );
        (window as any).amazon_connect("supportedMessagingContentTypes", [
            "text/plain",
            "text/markdown",
        ]);
    }, []);

    return (
        <>
            <Head>
                <title>Talosix | Clinical Trials</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://study.talosix.com/images/favicon-32x32.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
