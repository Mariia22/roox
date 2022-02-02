export interface UserType {
  id: number,
  name: string,
  email: string,
  username: string,
  phone: string,
  website: string,
  address: {
    city: string,
    street: string,
    zipcode: string
  },
  company: {
    name: string
  }
}
