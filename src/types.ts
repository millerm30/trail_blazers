export type Activity = {
  activity: string;
};

export type SocialType = 'facebook' | 'airbnb' | 'youtube' | 'pinterest' | 'twitter' | 'instagram' | 'telephone' | 'linkedin';

export type Social = {
  socialHref: string;
  socialType: SocialType;
};

export type ImageMap = { [key: string]: ImageMetadata };

export type Business = {
  name: string;
  description: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  webName?: string;
  amenities?: Activity[];
  socialIcons?: Social[];
};