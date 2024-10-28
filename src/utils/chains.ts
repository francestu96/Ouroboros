export interface IChain {
    name: string;
    exchangeRouterAddress: string;
    readerAddress: string;
    orderVaultAddress: string;
    dataStoreAddress: string;
    apiUrl: string, 
    rpc: string;
}

export const chains: IChain[] = [
    {
        "name": "arbitrum",
        "exchangeRouterAddress": "0x69C527fC77291722b52649E45c838e41be8Bf5d5",
        "readerAddress": "0x5Ca84c34a381434786738735265b9f3FD814b824",
        "dataStoreAddress": "0xFD70de6b91282D8017aA4E741e9Ae325CAb992d8",
        "orderVaultAddress": "0x31eF83a530Fde1B38EE9A18093A333D8Bbbc40D5",
        "apiUrl": "https://arbitrum-api.gmxinfra.io/tokens",
        "rpc": "https://arbitrum.meowrpc.com"
    },
    {
        "name": "avalanche",
        "exchangeRouterAddress": "0x2F0b22339414ADeD7D5F06f9D604c7fF5b2fe3f6",
        "readerAddress": "0x5Ca84c34a381434786738735265b9f3FD814b824",
        "dataStoreAddress": "0xFD70de6b91282D8017aA4E741e9Ae325CAb992d8",
        "orderVaultAddress": "0xD3D60D22d415aD43b7e64b510D86A30f19B1B12C",
        "apiUrl": "https://avalanche-api.gmxinfra.io/tokens",
        "rpc": "https://avax.meowrpc.com"
    },
    {
        "name": "fuji",
        "exchangeRouterAddress": "0xEA1BFb4Ea9A412dCCd63454AbC127431eBB0F0d4" ,
        "readerAddress": "0x5Ca84c34a381434786738735265b9f3FD814b824",
        "dataStoreAddress": "0xFD70de6b91282D8017aA4E741e9Ae325CAb992d8",
        "orderVaultAddress": "0x25D23e8E655727F2687CC808BB9589525A6F599B",
        "apiUrl": "",
        "rpc": "https://rpc.ankr.com/avalanche_fuji"
    }
]