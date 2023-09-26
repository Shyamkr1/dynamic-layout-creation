import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import html2canvas, { Options } from 'html2canvas';


export const Template = (`<div class="banner-template-container">
  <div class="banner-template" style="background-image: url('/assets/images/creative-bg-1.png'); id="template-background-image">
    <div class="left-content" id="left-content">
      <img
        class="brand-image"
        id="template-brand-logo"
        src="/assets/images/gopro-logo.png"
      />
      <h1 id="template-heading">ACTION CAMERAS</h1>
      <div class="btn-container" >
      <a id="template-button-text" href="javascript:void(0);" class="button">
        Shop Now</a
      >
    </div>
    </div> <div class="right-content" id = "right-content" >
    <div class="content-block">
      <span id="template-product-title-1" class="upper-title"> HERO11 Black</span>
      <img class="content-image" id = "template-product-image-1" src =
      "/assets/images/hero-11.png" />
      <div class="price-range">
        <span id="product-price-1" class="price-value">₹39,990</span>
        <span id = "product-discounted-price-1" class="price-value line-through"
        > 25000</span>
      </div>
    </div>
      <div class="content-block">
      <span id="template-product-title-2" class="upper-title"> HERO11 White</span>
      <img class="content-image" id = "template-product-image-2" src =
      "/assets/images/hero-11.png" />
      <div class="price-range">
        <span id="product-price-2" class="price-value">₹26,990</span>
        <span id = "product-discounted-price-2" class="price-value line-through"
        > 21700</span>
      </div>
    </div>
    <div id = "badge-title" class="offer-badge" > 22% OFF
   </div>
   </div>
  </div>
</div>`)


export enum Upload {
  BACKGROUND = 'background',
  BRANDLOGO = 'brandlogo',
  PRODUCT_IMG_1 = 'product_img_0',
  PRODUCT_IMG_2 = 'product_img_1',
  PRODUCT_IMG_3 = 'product_img_2',
}

enum TemplateDOMIds {
  capture = 'capture',
  templateBackgroundImage = 'template-background-image',
  templateBrandLogo = 'template-brand-logo',
  templateHeading = 'template-heading',
  templateButtonText = 'template-button-text',
  templateProductTitle = 'template-product-title-' + 'id',
  templateProductImage = 'template-product-image-' + 'id',
  templateProductPrice = 'product-price-' + 'id',
  templateProductDiscountedPrice = 'product-discounted-price-' + 'id',
  templateBadgeTitle = 'badge-title'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'layout-section';
  @ViewChild('htmlContainer', { static: false }) htmlContainer: ElementRef;

  Upload = Upload;
  // templateHtml: SafeHtml;
  capturedImage = "";
  canvas!: HTMLCanvasElement;
  brandLogo = "/assets/images/gopro-logo.png";
  // backgroundImageUrl = "/assets/images/creative-bg-1.png"

  backgroundImage: HTMLDivElement | null;
  productBrandLogo: HTMLImageElement | null;
  heading: HTMLHeadingElement | null;
  buttonText: HTMLAnchorElement | null;
  productTitle: HTMLSpanElement | null;
  productImage: HTMLImageElement | null;
  productPrice: HTMLSpanElement | null;
  productDiscountedPrice: HTMLSpanElement | null;
  badgeTitle: HTMLDivElement | null

  creativeForm = this.formBuilder.group({
    heading: [''],
    backgroundImage: [''],
    backgroundFileUpload: [''],
    productBackgroundFileUpload: [''],
    brandLogo: [''],
    buttonText: [''],
    badgeTitle: [''],
    productList: this.formBuilder.array([])
  })


  get productList() {
    return this.creativeForm.get('productList') as FormArray
  }

  constructor(@Inject(DOCUMENT) private document: Document, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = Template;

    // Extract data and patch into the form group
    this.creativeForm.patchValue({
      heading: tempElement.querySelector('#template-heading').textContent,
      backgroundImage: tempElement.querySelector('#template-background-image'),
      brandLogo: tempElement.querySelector('#template-brand-logo').attributes.getNamedItem('src')?.nodeValue,
      buttonText: tempElement.querySelector('#template-button-text').textContent,

    });

    for (let i = 1; i < 10; i++) { // Assuming you have two products
      const productFormGroup = this.createProductFormGroup(i);
      const productControlArray = this.creativeForm.get('productList') as FormArray;
      productControlArray.push(productFormGroup);
    }
  }

  ngAfterViewInit() {
    // Access the HTML container and set its innerHTML
    const container = this.htmlContainer.nativeElement;
    const htmlString = Template; // Replace with your HTML string
    container.innerHTML = htmlString;
  }

  // Function to create a FormGroup for a product
  createProductFormGroup(index: number): FormGroup {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = Template;
    const productTitle = tempElement.querySelector(`#template-product-title-${index}`).textContent;
    const productImage = tempElement.querySelector(`#template-product-image-${index}`).attributes.getNamedItem('src').nodeName;
    const productPrice = tempElement.querySelector(`#product-price-${index}`).textContent;
    const productDiscountPrice = tempElement.querySelector(`#product-discounted-price-${index}`).textContent;

    if (productTitle || productImage || productPrice || productDiscountPrice) {
      return this.formBuilder.group({
        productTitle,
        productImage,
        productPrice,
        productDiscountPrice
      });
    }

  }


  capture() {
    const options: Partial<Options> = {
      useCORS: true,
      allowTaint: true,
      logging: false,
      removeContainer: false,
      foreignObjectRendering: false,
      windowWidth: window.innerWidth
      // width: 1680, height: 380
    }

    html2canvas(document.querySelector("#capture"), options).then(canvas => {

      canvas.style.width = 'auto';
      canvas.style.height = 'auto';
      //  document.body.appendChild(canvas);

      this.capturedImage = canvas.toDataURL('image/webp', 1);

      this.canvas = canvas;

      canvas.toBlob(function (blob: any) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
      });
    });
  }

  patchImage(event: any, formControl: string) {

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => {
        switch (formControl) {
          case 'background': this.creativeForm.get("backgroundImage")?.patchValue(reader.result);
            break;
          case 'brandlogo': this.creativeForm.get("brandLogo")?.patchValue(reader.result);
            break;
          case 'product_img_0': this.productList.controls[0].get("productImage")?.patchValue(reader.result);
            break;
          case 'product_img_1': this.productList.controls[1].get("productImage")?.patchValue(reader.result);
            break;
          case 'product_img_2': this.productList.controls[2].get("productImage")?.patchValue(reader.result);
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  downloadImage() {
    this.canvas.toBlob(function (blob: any) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'banner-creative' + '.webp';
      a.click();

      window.URL.revokeObjectURL(url);
    });

  }


  modifyTemplate() {

    this.creativeForm.valueChanges.subscribe(value => {

      const tempElement = document.createElement('div');
      tempElement.innerHTML = Template;


      const { heading, backgroundImage, brandLogo, buttonText, badgeTitle, productList } = value


      const headingElement = tempElement.querySelector('#template-heading');
      const backgroundImageElement = tempElement.querySelector('#template-background-image');
      const brandLogoElement = tempElement.querySelector('#template-brand-logo');
      const buttonTextElement = tempElement.querySelector('#template-button-text');

      if (headingElement) {
        headingElement.textContent = heading;
      }
      if (backgroundImageElement) {
        backgroundImageElement.setAttribute('src', backgroundImage);
      }
      if (brandLogoElement) {
        brandLogoElement.setAttribute('src', brandLogo);
      }
      if (buttonTextElement) {
        buttonTextElement.textContent = buttonText;
      }

      this.htmlContainer.nativeElement = tempElement;
    })
  }


  private initializeDOMVariables() {
    const parent = this.document.getElementById(TemplateDOMIds.capture);
    this.backgroundImage = parent?.querySelector(`#${TemplateDOMIds.templateBackgroundImage}`) as HTMLDivElement | null;
    this.productBrandLogo = parent?.querySelector(`#${TemplateDOMIds.templateBrandLogo}`) as HTMLImageElement | null;
    this.heading = parent?.querySelector(`#${TemplateDOMIds.templateHeading}`) as HTMLHeadingElement | null;
    this.buttonText = parent?.querySelector(`#${TemplateDOMIds.templateButtonText}`) as HTMLAnchorElement | null;
    this.productTitle = parent?.querySelector(`#${TemplateDOMIds.templateProductTitle}`) as HTMLSpanElement | null;
    this.productImage = parent?.querySelector(`#${TemplateDOMIds.templateProductImage}`) as HTMLImageElement | null;
    this.productPrice = parent?.querySelector(`#${TemplateDOMIds.templateProductPrice}`) as HTMLSpanElement | null;
    this.productDiscountedPrice = parent?.querySelector(`#${TemplateDOMIds.templateProductDiscountedPrice}`) as HTMLSpanElement | null;
    this.badgeTitle = parent?.querySelector(`#${TemplateDOMIds.templateBadgeTitle}`) as HTMLDivElement | null
  }
}
