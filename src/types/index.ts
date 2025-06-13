export interface Village {
  name: string;
  mandal: string;
  distanceFromOngole: number;
  schools: School[];
  roadConnectivity: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface School {
  name: string;
  type: 'MPPS' | 'ZPHS' | 'MPUPS';
  address: string;
  established?: string;
  facilities?: string[];
}

export interface Mandal {
  name: string;
  villages: Village[];
}