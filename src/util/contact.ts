const contactUrl: string =
  'https://script.google.com/macros/s/AKfycbwixFQo2kekMPaPsbq9G8G5UlHi0L0SMKbJ1l7GJB3TQxIIluvjffOTzmzt8ZUqHkNs/exec';

export function contactSubmit(
  name: string,
  contact: string,
  message: string,
  counselor: string,
): Promise<Response> {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('contact', contact);
  formData.append('counselor', counselor);
  formData.append('message', message);

  return fetch(contactUrl, {
    method: 'POST',
    body: formData,
  });
}
