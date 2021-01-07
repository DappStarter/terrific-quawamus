require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind concert gesture roast forget tunnel'; 
let testAccounts = [
"0xbcd8fca58a0ba6a39a157026a41e11daa630157338fb8aa132bcda6c0631a57e",
"0xb8eb34ae343fe0a976b913306de2d1554ff71042fe54fede6d6c72f0333ce4c1",
"0x5162b19ba55a1efac81f029eca1f0481f924bb78814cc369f70c1b537d088cd7",
"0x5691f687027c4088ec215545ab57687b141c2e811cba22344f18be9a4dc8ae1e",
"0xa494e9c8d848636e573fe953196cc532d7672869f1d404870755c51361af89ee",
"0x3b6e3674cd42eacc2e01e20f53f3bd6488c3b080b0da05039afe6bdf4d571d44",
"0x87e84fcc315086306e6b5e49bbaa13b0d53fbf505a8a487d69bd081c7e191f88",
"0x09ebaf28acfc4525684defcee24335b6bfcaa02d9e7be12588261d78d3347592",
"0xc313d9f4ccec1d790d462b60624483c9733c624b1067c4fa526ab6e30b655105",
"0x1129382461aa966d40c79b474442d824d14923ae36e602aec74e921182d72588"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
