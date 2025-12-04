import { useState } from 'react';
import type { FormEvent } from 'react';
import './index.css';

import { contactSubmit } from '../../util/contact';

function Contact() {
  const [isSubmit, setSubmit] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmit) return;
    setSubmit(true);

    try {
      const response = await contactSubmit(name, contact, message);

      const res = await response.json();
      console.log(response);
      console.log(res);
      if (response.ok) {
        alert('전송되었습니다');
        window.location.reload();
      } else {
        alert('Error: ' + res.error);
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      alert('Error: ' + message);
    }

    setSubmit(false);
  };
  return (
    <div className="main-container">
      <div className="max-w-2xl">
        <h4>상담 신청하기</h4>
        <p>상담을 신청하시면 확인 후 연락드리겠습니다.</p>

        <hr className="my-8" />

        <form className="text-black" onSubmit={onSubmit}>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            className="w-8"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="contact">연락처(핸드폰 or 이메일)</label>
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="message">내용</label>
          <textarea
            rows={4}
            cols={50}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="btn primary" type="submit" disabled={isSubmit}>
            {isSubmit ? '전송중...' : '제출'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
