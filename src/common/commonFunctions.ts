
export function validateRequiredFields(field: HTMLInputElement | HTMLTextAreaElement, array: Array<string>, callback: any) {
  if (field.name !== 'comment' && field.value === '' && !array.includes(field.name)) {
    callback([...array, field.name])
    field.style.border = "1px solid red";
  }
  else if (field.value !== '' && array.includes(field.name)) {
    callback(array.filter((item: string) => item !== field.name))
    field.style.border = "1px solid #D8D8D8";
  }

}