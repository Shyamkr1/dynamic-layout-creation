import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import html2canvas, { Options } from 'html2canvas';


export const Template = (`<div class="banner-template-container" style="  position: relative;
  display: flex;">
  <div class="banner-template" id="template-background-image" style="background-image: url('/assets/images/creative-bg-1.png');display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px;
  width: 100%;
  max-width: 1520px;
  height: 380px;
  background-color: #f5f8fa;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 100%; " >
    <div class="left-content" id="left-content" style="  width: 100%;
    max-width: 420px;
    position: absolute;
    top: 50%;
    left: 18%;
    transform: translate(-50%, -50%)">
      <img class="brand-image" style=" width: 100%;
    max-width: 130px" id="template-brand-logo" src="/assets/images/gopro-logo.png" />
      <h1 style=" font-size: 46px;
    color: #262e2e;
    font-weight: 600;
    text-transform: uppercase;
    margin: 15px 0 15px;" id="template-heading">ACTION CAMERAS</h1>
      <div class="btn-container" style="display: flex;
    width: 100%">
        <a id="template-button-text" href="javascript:void(0);" class="button" style=" pointer-events: none;
      font-size: 1rem;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
      padding: 8px 12px 8px;
      background-color: #ac0236;
      text-decoration: none;
      border-radius: 3px">
          Shop Now</a>
      </div>
    </div>
    <div class="right-content" id="right-content" style="  position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-16%, -50%);
    display: flex;
    gap: 50px;
    color: #262e2e">
      <div class="content-block">
        <span id="template-product-title-1" class="upper-title"> HERO11 Black</span>
        <img class="content-image" id="template-product-image-1"  style=" max-width: 100%;width: 170px"
   src="/assets/images/hero-11.png" />
        <div class="price-range" style=" display: flex;
        margin: 0 auto 15px">
          <span id="product-price-1" class="price-value" style="font-size: 20px;
          font-weight: 500;
          margin: 0 6px;">₹39,990</span>
          <span id="product-discounted-price-1" class="price-value line-through" style="font-size: 20px;  text-decoration: line-through;
          font-weight: 500;
          margin: 0 6px;"> 25000</span>
        </div>
      </div>

      <div class="content-block">
        <span id="template-product-title-2" class="upper-title"> HERO11 Black</span>
        <img class="content-image"  style=" max-width: 100%;    width: 170px
    " id="template-product-image-2" src="/assets/images/hero-11.png" />
        <div class="price-range" style=" display: flex;
                margin: 0 auto 15px">
          <span id="product-price-2" class="price-value" style="font-size: 20px;
                  font-weight: 500;
                  margin: 0 6px;">₹39,990</span>
          <span id="product-discounted-price-2" class="price-value line-through" style="font-size: 20px;  text-decoration: line-through;
                  font-weight: 500;
                  margin: 0 6px;"> 25000</span>
        </div>
      </div>
      <div class="content-block" style=" display: flex;
      flex-direction: column;
      text-align: center">
        <span id="template-product-title-3" class="upper-title" style=" font-size: 22px;
        font-weight: 600;
        color: #262e2e"> HERO11 White</span>
        <img class="content-image" id="template-product-image-3"  style=" max-width: 100% ;    width: 170px" src="/assets/images/hero-11.png" />
        <div class="price-range" style=" display: flex;
        margin: 0 auto 15px">
          <span id="product-price-3" class="price-value" style="font-size: 20px;
          font-weight: 500;
          margin: 0 6px;">₹26,990</span>
          <span id="product-discounted-price-3" class="price-value line-through" style="font-size: 20px;
          font-weight: 500;
          margin: 0 6px; text-decoration: line-through"> 21700</span>
        </div>
      </div>

      <div id="badge-title" class="offer-badge" style="   font-size: 18px;
        font-weight: 600;
        background: pink;
        padding: 2px 2px 3px;
        width: 100%;
        max-width: 90px;
        margin: auto"> 22% OFF
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
  // Template = Template;
  Upload = Upload;
  // templateHtml: SafeHtml;
  capturedImage = "";
  canvas!: HTMLCanvasElement;
  brandLogo = "/assets/images/gopro-logo.png";
  // backgroundImageUrl = "/assets/images/creative-bg-1.png"
  highestImageId: number
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

    this.highestImageId = this.findHighestImageId(Template);

    // Extract data and patch into the form group
    this.creativeForm.patchValue({

      heading: tempElement.querySelector('#template-heading').textContent,
      backgroundImage: tempElement.querySelector('#template-background-image').getAttribute('style').match(/background-image:\s*url\(['"]?([^'"]+)['"]?\)/)[1],
      brandLogo: tempElement.querySelector('#template-brand-logo').attributes.getNamedItem('src')?.nodeValue,
      buttonText: tempElement.querySelector('#template-button-text').textContent,
      badgeTitle: tempElement.querySelector('#badge-title').textContent,

    });

    for (let i = 1; i <= this.highestImageId; i++) {
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
    this.modifyTemplate();
  }

  // Function to create a FormGroup for a product
  createProductFormGroup(index: number): FormGroup {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = Template;
    const productTitle = tempElement.querySelector(`#template-product-title-${index}`)?.textContent;
    const productImage = tempElement.querySelector(`#template-product-image-${index}`).attributes.getNamedItem('src')?.nodeValue;
    const productPrice = tempElement.querySelector(`#product-price-${index}`)?.textContent;
    const productDiscountedPrice = tempElement.querySelector(`#product-discounted-price-${index}`)?.textContent;

    return this.formBuilder.group({
      productTitle: [productTitle],
      productImage: [productImage],
      productPrice: [productPrice],
      productDiscountedPrice: [productDiscountedPrice]
    });
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
      const discountBadgeElement = tempElement.querySelector('#badge-title');


      if (headingElement) {
        headingElement.textContent = heading;
      }
      if (backgroundImageElement) {

        const currentStyle = backgroundImageElement.getAttribute('style');

        const newStyle = currentStyle.replace(/background-image: url\(['"][^'"]+['"]\)/, `background-image: url('${backgroundImage}')`);

        backgroundImageElement.setAttribute('style', newStyle);
      }
      if (brandLogoElement) {
        brandLogoElement.setAttribute('src', brandLogo);
      }
      if (buttonTextElement) {
        buttonTextElement.textContent = buttonText;
      }

      if (discountBadgeElement) {
        discountBadgeElement.textContent = badgeTitle;
      }


      for (let i = 0; i < this.highestImageId; i++) {
        const productTitleElement = tempElement.querySelector(`#template-product-title-${i + 1}`);
        const productImageElement = tempElement.querySelector(`#template-product-image-${i + 1}`);
        const productPriceElement = tempElement.querySelector(`#product-price-${i + 1}`);
        const productDiscountPriceElement = tempElement.querySelector(`#product-discounted-price-${i + 1}`);

        if (productTitleElement) {
          productTitleElement.textContent = productList[i]?.productTitle;
        }

        if (productImageElement) {
          productImageElement.setAttribute('src', productList[i]?.productImage);
        }
        if (productPriceElement) {
          productPriceElement.textContent = productList[i]?.productPrice;
        }
        if (productDiscountPriceElement) {
          productDiscountPriceElement.textContent = productList[i]?.productDiscountPrice;
        }

      }

      this.htmlContainer.nativeElement.innerHTML = tempElement.innerHTML;
    }
    )
  }

  findHighestImageId(template: string): number {
    // Create a temporary element to parse the HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = template;

    // Initialize the highestId to a minimum value
    let highestId = -1;

    // Select all img elements
    const imgElements = tempElement.querySelectorAll('img');

    // Iterate through img elements to find the highest number in the id attribute
    imgElements.forEach((imgElement: HTMLImageElement) => {
      const id = imgElement.id;
      if (id.startsWith('template-product-image-')) {
        const numberPart = id.replace('template-product-image-', '');
        const number = parseInt(numberPart, 10);
        if (!isNaN(number) && number > highestId) {
          highestId = number;
        }
      }
    });

    return highestId;
  }

}
