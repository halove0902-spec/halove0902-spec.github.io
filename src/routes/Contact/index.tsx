import { useState } from 'react';
import type { FormEvent } from 'react';
import './index.css';

import { contactSubmit } from '../../util/contact';

function Contact() {
  const [isSubmit, setSubmit] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [counselor, setCounselor] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmit) return;
    setSubmit(true);

    try {
      const response = await contactSubmit(name, contact, message, counselor);

      const res = await response.json();
      console.log(response);
      console.log(res);
      if (response.ok) {
        alert('전송되었습니다');
        setName('');
        setContact('');
        setMessage('');
        setCounselor('');
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
      <div className="max-w-2xl w-full">
        <h4>상담 신청하기</h4>
        <p>상담을 신청하시면 확인 후 연락드리겠습니다.</p>

        <hr className="my-8" />

        <form className="text-black" onSubmit={onSubmit}>
          <div className="form-area">
            <label htmlFor="name">신청자 이름</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-area">
            <label htmlFor="contact">신청자 연락처(핸드폰 or 이메일)</label>
            <input
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="form-area">
            <label htmlFor="message">신청 내용</label>
            <textarea
              rows={4}
              cols={50}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="form-area">
            <label htmlFor="counselor">희망하는 상담사 (선택사항)</label>
            <input
              type="text"
              value={counselor}
              onChange={(e) => setCounselor(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <button className="btn primary" type="submit" disabled={isSubmit}>
              {isSubmit ? '전송중...' : '제출'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
