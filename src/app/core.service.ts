import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  account: string | undefined;
  userId: string | undefined;
  constructor(private http: HttpClient) { }

  createUser(publicId: string) {
    return this.http.post(environment.back_url + '/user/', {
      solanaToken: publicId
    });
  }

  getUser(publicId: string) {
    return this.http.get(environment.back_url + '/user/?user_id=' + publicId);
  }

  postProgress(publicId: string, chalengeId:string, chapterId:string){
    return this.http.post(environment.back_url + '/user/', {
      "userId": publicId,
      "challengeId": chalengeId,
      "chapterId": chapterId
    });
  }

  mintNFT(){
    const Ethaddress = this.account ;
    const chalengeId = 'python';
    return this.http.post(environment.back_url + '/transfer-nft/', {
      "toAddress": Ethaddress,
      "tokenId": 0,
    });
  }

}
