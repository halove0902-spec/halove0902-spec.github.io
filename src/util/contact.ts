const contactUrl: string =
  'https://script.google.com/macros/s/AKfycbyBZILoSEIB5LEIdMmB2p_Zdt_ruc8UjZTU88zchqV6zg66-FqVPU3gMmXV1mYb-yN4/exec';

export function contactSubmit(
  name: string,
  contact: string,
  message: string
): Promise<Response> {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('contact', contact);
  formData.append('message', message);

  return fetch(contactUrl, {
    method: 'POST',
    body: formData,
  });
}
