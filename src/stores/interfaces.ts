export interface Country {
common: string 
    name: {
      common: string
    }
    flags: {
      png: string
    }
    capital: String[]
    region: string
    population: number
    area:number
  }
  export interface Countries {
    [Country: string]: Country
  }


