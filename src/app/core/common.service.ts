import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../core/utility.service';
import { CryptoDirective } from '../custom/crypto.directive';
import { Authentication as authenticate } from '../_models/authenticate';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  serverUrl = '';
  contentType = authenticate.conntentType;
  applicationJson = authenticate.applicationJson;
  xServicePath = authenticate.xSevicePath;

  authToken;
  startTime;
  decryptedAuthToken

  constructor(
    private readonly cryptoDirective: CryptoDirective,
    private readonly httpClient: HttpClient,
    public readonly utilityService: UtilityService
  ) {
    this.serverUrl = environment.serverUrl;
  }

  clearAllInterval() {
    for (let i = 1; i < this.utilityService.interval; i++) {
      window.clearInterval(i);
    }
    clearInterval(this.utilityService.interval);
    this.utilityService.interval = 0;

  }
/************** HTTP get service call **************/
  httpGetCall(url) {
    let optionHeader = new HttpHeaders();
    optionHeader = optionHeader.append(this.contentType, this.applicationJson);
    const httpOptions = {
      headers: optionHeader
    }
    this.setIdleRemainTimeInSessionStorage();
    return this.httpClient.get(url, httpOptions);
  }

  httpPostCall(url, data){
    let optionHeader = new HttpHeaders();
    optionHeader = optionHeader.append(this.contentType, this.applicationJson);
    if(sessionStorage.getItem(authenticate.status) === authenticate.loggedIn){
      if(environment.authFlag){
        this.authToken = sessionStorage.getItem(authenticate.auth);
        this.decryptedAuthToken = this.cryptoDirective.decrypt(this.authToken, authenticate.accessToken).toString(CryptoJS.enc.Utf8);

      }

    }
  }

  setIdleRemainTimeInSessionStorage() {
    this.clearAllInterval();
    this.startTime = Date.now();
    if (sessionStorage.getItem(authenticate.loggedAs)) {
      this.utilityService.interval = setInterval(() => {
        const elapsedTime = (Date.now() - this.startTime) / 1000;
        this.checkStatus(elapsedTime);
      }, 1000);
    } else {
      this.clearAllInterval();
    }
  }
  checkStatus(elapsedTime: Number): void {
    if (elapsedTime > 780) {

    }
  }
}
