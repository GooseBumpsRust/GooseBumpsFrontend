import {ChangeDetectorRef, Component} from '@angular/core';
import Web3 from 'web3';
import {Signer, utils, providers, Wallet, Contract, Event} from 'ethers';
import {environment} from "../environments/environment";
import * as contractAbi from './utils/contractABI.json';
import {CoreService} from "./core.service";

declare let window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goosebumps-app';
  contractAbiObj = (contractAbi as any)

  CONTRACT_ADDRESS = environment.CONTRACT_ADDRESS;
  networkChainId = environment.networkChainId;
  account: string= '';
  isInGoodNetwork: boolean = false;
  value: any;
  waves: any[] = [];

  constructor(private cdr: ChangeDetectorRef, private coreService: CoreService) {
    window.ethereum.on('accountsChange', (accounts: any) => {
      console.log(accounts);
    })
    window.ethereum.on('chainChanged', (id: any) => {
      console.log(id);
    })
    window.ethereum.on("NewEpicNFTMinted", (from:any, tokenId:any) => {
      console.log(from, tokenId.toNumber())
      alert(`Hey there! We've minted your NFT. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: <https://testnets.opensea.io/assets/${this.CONTRACT_ADDRESS}/${tokenId.toNumber()}>`)
    });
  }

  async loadWeb3() {
    // this.provider = await detectEthereumProvider();
    await this.checkIfWalletIsConnected()
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum.currentProvider);
      let accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      this.account = accounts[0]
      this.coreService.account = this.account;
      this.coreService.createUser(this.account).subscribe((res: any) => {
        console.log(res)
        this.coreService.userId = res.userId
      });
      console.log('account', accounts[0])
      this.checkIfWalletIsConnected();

    } else if (window.web3) {

      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
    }
  }

  async checkIfWalletIsConnected() {
    const chainId = await window.ethereum.request({method: 'eth_chainId'});
    console.log('network :', chainId)
    if (chainId === this.networkChainId) {
      this.isInGoodNetwork = true;
    } else {
      this.isInGoodNetwork = false;

    }
    this.cdr.detectChanges()


  }

  switchNetwork() {
    window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{chainId: this.networkChainId}], // Check networks.js for hexadecimal network ids
    }).then((res: any) => {
      console.log(res)
      this.isInGoodNetwork = true
    });
  }

  disconnectWeb3() {
    window.ethereum.request({
      method: "eth_requestAccounts",
      params: [{eth_accounts: {}}]
    }).then(() => {
      this.account = '';
      this.isInGoodNetwork = false;
    })
  }


  async mintNFT() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new Contract(this.CONTRACT_ADDRESS, this.contractAbiObj.abi, signer);
        connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
          console.log(from, this.account, tokenId.toNumber(), from ==  this.account)

          if(from.toLowerCase() ==  this.account?.toLowerCase()){
            alert(`${from} / ${this.account}. Here's the link: <https://testnets.opensea.io/assets/${this.CONTRACT_ADDRESS}/${tokenId.toNumber()}>`)
          }
        });

        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await connectedContract['makeAnEpicNFT']();

        console.log("Mining...please wait.")
        await nftTxn.wait();

        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }
}
