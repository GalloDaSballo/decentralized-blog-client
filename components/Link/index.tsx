/* eslint-disable */
import Link from "next/link";
import { useMemo } from "react";
import { resolve } from "url";

const BaseLink = ({ href, ...rest }) => {
    const newAs = useMemo(() => {
        let baseURI_as = href;

        // make absolute url relative
        // when displayed in url bar
        if (baseURI_as.startsWith("/")) {
            //  for static html compilation
            baseURI_as = `.${href}`;
            // <IPFSLink href="/about"> => <a class="jsx-2055897931" href="./about">About</a>

            // on the client
            //   document is unavailable when compiling on the server
            if (typeof document !== "undefined") {
                baseURI_as = resolve(document.baseURI, baseURI_as);
                // => <a href="https://gateway.ipfs.io/ipfs/Qm<hash>/about">About</a>
            }
        }
        return baseURI_as;
    }, [href]);

    return <Link {...rest} href={newAs} />;
};

export default BaseLink;
