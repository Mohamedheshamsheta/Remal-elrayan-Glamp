export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  guests: number;
  accommodationType: string;
}

export interface Accommodation {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  price: string;
  imageUrl: string;
  interiorImageUrl: string;
  amenities: string[];
  maxOccupancy: number;
  features: string[];
}

export interface DesertExperience {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  duration: string;
  timeOfDay: string;
}

export interface StoryboardStep {
  step: number;
  title: string;
  description: string;
  stageName: string;
  details: string[];
}
