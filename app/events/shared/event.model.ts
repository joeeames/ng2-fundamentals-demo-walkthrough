export class Event {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  location: {
    address: string;
    city: string;
    country: string;
  }
  sessions: Session[]; 
  voters: string[];
  
  constructor() {
    this.location = {
      address: "",
      city: "",
      country: ""
    }
    this.voters = [];
  }
}

export class Session {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}



