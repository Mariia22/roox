export interface UserType {
  id: number,
  name: string,
  address: {
    city: string
  },
  company: {
    name: string
  }
}