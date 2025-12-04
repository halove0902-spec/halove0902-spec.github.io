const contactUrl: string =
  'https://script.google.com/macros/s/AKfycbz8wKsDoNPlMOKTXk-u6e4rNIFB-KGdt9JyI_t2Kt1ybZiXHhkR9wPYp9HU5Apqc4GY/exec';

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
