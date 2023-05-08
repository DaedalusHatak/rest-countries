export interface Country {
common: string 
    name: {
      common: string
      nativeName?: string 
    }
    flags: {
      png: string
    }
    altSpellings: String[]
    capital: String[]
    region: string
    cca3:string
    borders: String[]
    population: number
    area:number
  }
  export interface Countries {
    [Country: string]: Country
  }


