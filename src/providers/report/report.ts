import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ReportProvider {
  private url: string = 'http://cgi.uru.ac.th/service';
  private pos: any;

  constructor(
    public http: HttpClient
  ) {
  }

  getReportList() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/tak_show_report.php').subscribe((res: any) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  }

  postMobileReport(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/tak_mobile_report.php', data).subscribe((res: any) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  }

  setLocation(lat: number, lon: number) {
    this.pos = {
      lat: lat,
      lon: lon
    }
  }

  getLocation() {
    return this.pos
  }



}
