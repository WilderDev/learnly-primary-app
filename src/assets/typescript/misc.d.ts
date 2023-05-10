export interface ITestimonial {
  name: string;
  quote: string;
  role: string;
  image: string;
}

export interface IEmail {
  to: string;
  from?: string;
  subject: string;
  text: string;
  html: string;
}

export interface IFeature {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  image: StaticImageData;
}
