import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  viewBanner: string = 'banner-1';

  banners: string[] = [
    "banner-1",
    "banner-2",
    "banner-3",
    "banner-4",
    "banner-5"
  ]

  changeBanner(event: any) {
    this.viewBanner = event.target.value;
  }

}
