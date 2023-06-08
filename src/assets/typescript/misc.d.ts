export interface ITestimonial {
  id: number;
  name: string;
  quote: string;
  role: string;
  image: string;
}

export interface IReview {
  title: string;
  body: string;
  author: string;
  rating: number;
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

export type TPosition =
  | 'topCenter'
  | 'topLeft'
  | 'topRight'
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'center'
  | 'centerLeft'
  | 'centerRight';

export interface ISocialProof {
  first_name: string;
  last_name: string;
  avatar_url: string;
  created_at: string;
}
