import { Magic } from "magic-sdk";
import { RPC, CHAIN_ID } from "./constants";

export const makeMagic = () => {
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_KEY, {
        network: {
            rpcUrl: RPC,
            chainId: CHAIN_ID,
        },
    });

    return magic;
};
