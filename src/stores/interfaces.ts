export interface Country {
    name: {
      common: string
    }
    flags: {
      png: string
    }
    capital: String[]
    region: string
    population: number
  }
  export interface Countries {
    [Country: string]: Country
  }


