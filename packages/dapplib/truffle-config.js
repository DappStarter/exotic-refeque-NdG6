require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy rice night smile imitate private equal gate'; 
let testAccounts = [
"0x6584c4f35f9b17ca51138f81be72656fa3bc701ee0a1e1d6a03a09b46251368d",
"0x9035d1e5d542d6b85bf2563d1df536bf2537809ef7c390043c23551941fd7f87",
"0xa4bb1d3db873ea5dca18255563e577eb724aa368a86ae31941b157c78489b683",
"0x6885de67886a36226a00f0a8a43a45ae475afa26d7be1c36dc804f1cb4194c22",
"0x42077baf12f06d81127d9b8fb6b9da7db0798d91bb91d350173e1799bd7ce1ed",
"0x108ea24e16c2ad0fc03094647f1186756c9f97bad8a47265008c119bc016de0f",
"0x7c1ab5542a5f17179755396d5bf67441489f22b8057f8c0f9f483fc9502e7b3a",
"0x82ecdccb1d2b8bdf9d87e4aba59a125a3100b9f1c179da18c148e6573344db54",
"0x9b4d07e068ec8f13027615110861d1fba9763bc6bde498e772f1999094178948",
"0x86a6f544a938e3864a7d7d2d4cd03592a0d459fd1ee64d055c79011b3650d018"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

