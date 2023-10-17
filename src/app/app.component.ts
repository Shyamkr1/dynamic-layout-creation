import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import html2canvas, { Options } from 'html2canvas';


// export const Template = (`
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Banners</title>
//     <style>
//       .banner-1.desktop-banner-container {
//         margin: 50px auto;
//         position: relative;
//         display: flex;
//         align-items: center;
//         max-width: 1520px;
//         font-family: "Inter", sans-serif;
//       }
//       .banner-1.desktop-banner-container .background-image {
//         max-width: 100%;
//         max-height: 100%;
//       }
//       .banner-1.desktop-banner-container .banner-name {
//         position: absolute;
//         background-color: #eef9ff;
//         width: 85px;
//         text-align: center;
//         left: 40px;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }
//       .banner-1.desktop-banner-container .banner-name h1 {
//         transform: rotate(-90deg);
//         font-size: 45px;
//         font-weight: 700;
//         margin: 0;
//         color: #0091ff;
//         min-width: max-content;
//       }
//       .banner-1.desktop-banner-container .content-container {
//         position: absolute;
//         display: flex;
//         align-items: center;
//         width: 100%;
//         height: 100%;
//       }
//       .banner-1.desktop-banner-container .content-container .left-section {
//         position: relative;
//         display: flex;
//         align-items: center;
//         width: 45%;
//         height: 100%;
//       }
//       .banner-1.desktop-banner-container
//         .content-container
//         .left-section
//         .banner-image {
//         max-width: 550px;
//         margin: 0 0 0 auto;
//         max-height: 100%;
//         object-fit: contain;
//       }
//       .banner-1.desktop-banner-container .content-container .right-section {
//         width: 55%;
//         position: relative;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//         justify-content: center;
//         row-gap: 20px;
//       }
//       .banner-1.desktop-banner-container
//         .content-container
//         .right-section
//         .company-logo {
//         max-width: 250px;
//         max-height: 100px;
//         object-fit: contain;
//       }
//       .banner-1.desktop-banner-container
//         .content-container
//         .right-section
//         .product-name {
//         font-size: 45px;
//         font-weight: 700;
//         text-align: center;
//         max-width: 85%;
//         margin: 0;
//       }
//       .banner-1.desktop-banner-container
//         .content-container
//         .right-section
//         .product-cost {
//         font-size: 30px;
//         font-weight: 600;
//         display: flex;
//         align-items: center;
//         column-gap: 15px;
//         justify-content: center;
//       }
//       .banner-1.desktop-banner-container
//         .content-container
//         .right-section
//         .product-cost
//         .actual-price {
//         position: relative;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }
//       .banner-1.desktop-banner-container
//         .content-container
//         .right-section
//         .product-cost
//         .actual-price::after {
//         position: absolute;
//         content: "";
//         border-bottom: 3px solid black;
//         width: 100%;
//         transform: rotate(175deg);
//       }
//       .banner-1.desktop-banner-container
//         .content-container
//         .right-section
//         .shop-btn {
//         padding: 10px 15px;
//         font-size: 18px;
//         color: #ffffff;
//         font-weight: 600;
//         background-color: #ac0236;
//         border: none;
//         border-radius: 5px;
//         letter-spacing: 1px;
//       }
//       .banner-1.desktop-banner-container
//         .content-container
//         .right-section
//         .discount-offer {
//         right: 0px;
//         bottom: 0px;
//         position: absolute;
//         background-color: #4848e8;
//         color: #ffffff;
//         font-size: 35px;
//         font-weight: 700;
//         width: 100px;
//         height: 100px;
//         padding: 20px;
//         clip-path: circle(100px at 100px 100px);
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//       }
//     </style>
//   </head>
//   <body>
//     <section class="banner-1 desktop-banner-container">
//       <img
//         id="template-background-image"
//         class="background-image"
//         src="assets/images/bg-cover.png"
//       />

//       <div class="banner-name"><h1  id="template-heading">NEW ARRIVAL</h1></div>

//       <div class="content-container">
//         <div class="left-section">
//           <img
//             id="template-product-image-1"
//             class="banner-image"
//             src="https://assets.hyperinvento.com/hyperinventory_admin/assets/images/creative-template-images/VILTROX+5.5+INCH+Portable+HD+Monitor+DC-550+Pro.png"
//           />
//         </div>
//         <div class="right-section">
//           <img
//             id="template-brand-logo"
//             class="company-logo"
//             src="https://assets.hyperinvento.com/hyperinventory_admin/assets/images/creative-template-images/VILTROX-logo.png"
//           />
//           <h1 id="template-product-title-1" class="product-name">
//             5.5 INCH PORTABLE HD MONITOR DC-550 PRO
//           </h1>
//           <div class="product-cost">
//             <span id="product-price-1" class="discounted-price">$18,890</span>
//             <span id="product-discounted-price-1" class="actual-price"
//               >$18,000</span
//             >
//           </div>
//           <button id="template-button-text" class="shop-btn">SHOP NOW</button>

//           <div id="discount-badge-1" class="discount-offer">13% OFF</div>
//         </div>
//       </div>
//     </section>
//   </body>
// </html>
// `)




export const Template = (`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Banners</title>
    <style>
       &.desktop-banner-container {
    margin: 50px auto;
    position: relative;
    display: flex;
    align-items: center;
    max-width: 1520px;
    font-family: "Inter", sans-serif;

    .background-image {
      max-width: 100%;
      max-height: 100%;
    }

    .banner-name {
      position: absolute;
      left: 0;
      width: 85px;
      text-align: center;
      background-color: #41576d;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      h1 {
        transform: rotate(-90deg);
        font-size: 34px;
        font-weight: 600;
        margin: 0;
        color: #ffffff;
        min-width: max-content;
      }
    }

    .content-product-container {
      position: absolute;
      padding: 40px 40px 40px 140px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;

      .content-container {
        display: flex;
        align-items: center;
        width: 50%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        row-gap: 12px;

        .company-logo {
          max-width: 250px;
          max-height: 42px;
          object-fit: contain;
        }

        .product-name {
          font-size: 40px;
          font-weight: 700;
          margin: 0;
          color: #40576d;
          background-color: #ffffff;
          padding: 5px 10px;
        }

        .discount-offer {
          color: #c71717;
          font-size: 50px;
          font-weight: 700;
          width: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .shop-btn {
          padding: 10px 15px;
          font-size: 18px;
          color: #ffffff;
          font-weight: 600;
          background-color: #000000;
          border: none;
          border-radius: 5px;
          letter-spacing: 1px;
        }
      }

      .banner-image {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        .banner-image-1,
        .banner-image-2 {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          margin: 0 40px 0 0;
          column-gap: 25px;

          img {
            max-width: 100%;
            max-height: 100%;
          }

          .product-cost {
            font-size: 30px;
            font-weight: 600;
            display: flex;
            align-items: center;
            column-gap: 15px;
            justify-content: center;
            color: #000000;

            .actual-price {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              &::after {
                position: absolute;
                content: "";
                border-bottom: 3px solid #000000;
                width: 100%;
                transform: rotate(175deg);
              }
            }
          }
        }
      }
    }
  }
    </style>
  </head>
  <body>
   <section class="banner-5 desktop-banner-container">
            <img class="background-image" id="template-background-image"
                src="https://s3-ap-south-1.amazonaws.com/dev-hyper-media/companies/5d1a6079-b7a5-4f3b-81e5-2330dd80cee3/products/00eef1aa-f1b5-42a0-b32a-f1d76bc79870/others/files/22e4d894530c416a9ae32269b7c1a51d-product-other.png" />
            <div class="banner-name">
                <h1 id="template-heading">EXCLUSIVE DEAL</h1>
            </div>

            <div class="content-product-container">
                <div class="content-container">
                    <img class="company-logo" src="../assets/images/SIGMA f1.4 DG DN Art Lens for Sony E  (1).png" />
                    <h1 class="product-name">f/1.4 DG DN Art Lens for Sony E</h1>

                    <div class="discount-offer" id="discount-badge-1">26% OFF</div>

                    <button class="shop-btn" id="template-button-text">SHOP NOW</button>
                </div>

                <div class="banner-image">
                    <div class="banner-image-1">
                        <img id="template-product-image-1" src="../assets/images/sigma-product-1.png" />
                        <div class="product-cost">
                            <span class="discounted-price" id="product-price-1">$8,599</span>
                            <span class="actual-price" id="product-discounted-price-1">$9,999</span>
                        </div>
                    </div>
                    <div class="banner-image-2">
                        <img id="template-product-image-2" src="../assets/images/sigma-product-2.png" />
                        <div class="product-cost">
                            <span class="discounted-price" id="product-price-2">$8,599</span>
                            <span class="actual-price" id="product-discounted-price-2">$9,999</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </body>
</html>
`)

export enum Upload {
  BACKGROUND = 'background',
  BRANDLOGO = 'brandlogo'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  @ViewChild('htmlContainer', { static: false }) htmlContainer: ElementRef;
  Upload = Upload;
  capturedImage = "";
  canvas!: HTMLCanvasElement;
  imageCount: number

  creativeForm = this.formBuilder.group({
    heading: [''],
    backgroundImage: [''],
    brandLogo: [''],
    buttonText: [''],
    productList: this.formBuilder.array([])
  })

  get productList() {
    return this.creativeForm.get('productList') as FormArray
  }

  constructor(@Inject(DOCUMENT) private document: Document, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeFormValues();
    this.createAndInitializeProductFormGroups();
  }

  ngAfterViewInit() {
    // Access the HTML container and set its innerHTML
    const container = this.htmlContainer.nativeElement;
    const htmlString = Template; // Replace with your HTML string
    container.innerHTML = htmlString;
    this.modifyTemplate();
  }


  initializeFormValues() {
    const tempElement = this.createAndInitializeTemplate(Template);
    this.imageCount = this.findHighestImageId(Template);

    const formControls = {
      heading: '#template-heading',
      backgroundImage: '#template-background-image',
      buttonText: '#template-button-text',
    };

    const brandLogoElement = tempElement.querySelector('#template-brand-logo');
    if (brandLogoElement) {
      formControls['brandLogo'] = '#template-brand-logo';
    }

    const formValues = Object.keys(formControls).reduce((values, key) => {
      const element = tempElement.querySelector(formControls[key]);
      values[key] = element?.textContent || null;
      if (key === 'backgroundImage' || key === 'brandLogo') {
        values[key] = element?.getAttribute('src') || null;
      }
      return values;
    }, {});

    this.creativeForm.patchValue(formValues);
  }

  createAndInitializeTemplate(templateHTML: string) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = templateHTML;
    return tempElement;
  }


  createAndInitializeProductFormGroups() {
    for (let i = 1; i <= this.imageCount; i++) {
      const tempElement = this.createAndInitializeTemplate(Template);
      const productTitle = tempElement.querySelector(`#template-product-title-${i}`)?.textContent;
      const productImage = tempElement.querySelector(`#template-product-image-${i}`).attributes.getNamedItem('src')?.nodeValue;
      const productPrice = tempElement.querySelector(`#product-price-${i}`)?.textContent;
      const productDiscountedPriceElement = tempElement.querySelector(`#product-discounted-price-${i}`);
      const productDiscountBadgeElement = tempElement.querySelector(`#discount-badge-${i}`);

      const formControls = {
        productTitle: [productTitle],
        productImage: [productImage],
        productPrice: [productPrice]
      };

      if (productDiscountedPriceElement) {
        formControls['productDiscountedPrice'] = [productDiscountedPriceElement.textContent];
      }

      if (productDiscountBadgeElement) {
        formControls['productDiscountBadge'] = [productDiscountBadgeElement.textContent];
      }

      const productFormGroup = this.formBuilder.group(formControls);
      this.productList.push(productFormGroup);
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
    }

    html2canvas(document.querySelector("#capture"), options).then(canvas => {

      canvas.style.width = 'auto';
      canvas.style.height = 'auto';
      this.capturedImage = canvas.toDataURL('image/webp', 1);

      this.canvas = canvas;

      canvas.toBlob(function (blob: any) {
        let reader = new FileReader();
        reader.readAsDataURL(blob);
      });
    });
  }

  patchImage(event: any, formControl: Upload | string) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => {
        switch (formControl) {
          case Upload.BACKGROUND:
            this.creativeForm.get("backgroundImage")?.patchValue(reader.result);
            break;
          case Upload.BRANDLOGO:
            this.creativeForm.get("brandLogo")?.patchValue(reader.result);
            break;
          default:
            // Check if formControl matches the dynamic product image pattern (e.g., product_img_0)
            if (typeof formControl === 'string' && formControl.startsWith('product_img_')) {
              const productIndex = parseInt(formControl.substring(12), 10);
              if (!isNaN(productIndex) && productIndex >= 0 && productIndex < this.productList.length) {
                this.productList.controls[productIndex].get('productImage')?.patchValue(reader.result);
              }
            }
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  downloadImage() {
    this.canvas.toBlob(function (blob: any) {
      let reader = new FileReader();
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
      const tempElement = this.createAndInitializeTemplate(Template);

      const updateElement = (elementId: string, content: string) => {
        const element = tempElement.querySelector(`#${elementId}`);
        if (element) {
          element.textContent = content;
        }
      };

      const updateImageElement = (elementId: string, src: string) => {
        const element = tempElement.querySelector(`#${elementId}`);
        if (element) {
          element.setAttribute('src', src);
        }
      };

      const { heading, backgroundImage, brandLogo, buttonText, productList } = value;

      updateElement('template-heading', heading);
      updateImageElement('template-background-image', backgroundImage);
      updateImageElement('template-brand-logo', brandLogo);
      updateElement('template-button-text', buttonText);

      for (let i = 0; i < this.imageCount; i++) {
        const product = productList[i];
        const productIndex = i + 1;

        updateElement(`template-product-title-${productIndex}`, product?.productTitle);
        updateImageElement(`template-product-image-${productIndex}`, product?.productImage);
        updateElement(`product-price-${productIndex}`, product?.productPrice);
        updateElement(`product-discounted-price-${productIndex}`, product?.productDiscountedPrice);

        const productDiscountBadgeElement = tempElement.querySelector(`#discount-badge-${productIndex}`);
        if (productDiscountBadgeElement) {
          productDiscountBadgeElement.textContent = product?.productDiscountBadge;
        }
      }

      this.htmlContainer.nativeElement.innerHTML = tempElement.innerHTML;
    });
  }


  findHighestImageId(template: string): number {
    // Create a temporary element to parse the HTML
    const tempElement = this.createAndInitializeTemplate(Template);

    // Initialize the highestId to a minimum value
    let imageCount = -1;

    // Select all img elements
    const imgElements = tempElement.querySelectorAll('img');

    // Iterate through img elements to find the highest number in the id attribute
    imgElements.forEach((imgElement: HTMLImageElement) => {
      const id = imgElement.id;
      if (id.startsWith('template-product-image-')) {
        const numberPart = id.replace('template-product-image-', '');
        const number = parseInt(numberPart, 10);
        if (!isNaN(number) && number > imageCount) {
          imageCount = number;
        }
      }
    });

    return imageCount;
  }

}
