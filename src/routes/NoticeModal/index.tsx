import { createPortal } from 'react-dom';
import noticeImage from '../../assets/notice-Image.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function NoticeModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDontShowAgain, setIsDontShowAgain] = useState(false);

  const closePopup = () => {
    if (isDontShowAgain) {
      // 현재 시간 + 24시간을 밀리초로 계산하여 저장
      const expiryDate = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem('notice-expiry', expiryDate.toString());
    }
    setIsVisible(false);
  };

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지 확인
    const expiry = localStorage.getItem('notice-expiry');
    const now = new Date().getTime();

    // 저장된 시간이 없거나 이미 지났다면 팝업 표시
    if (!expiry || now > parseInt(expiry)) {
      setIsVisible(true);
    }
  }, []);

  return createPortal(
    <>
      {isVisible && (
        <div className="fixed z-9999 max-w-full w-[600px] top-0 left-0 p-3">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden ">
            {/* 이미지 영역 */}
            <div className="relative">
              <Link to="/contact">
                <img
                  src={noticeImage}
                  alt="공지사항"
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>

            {/* 푸터 영역 */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={isDontShowAgain}
                  onChange={(e) => setIsDontShowAgain(e.target.checked)}
                />
                <span className="text-xs text-gray-600 font-medium">
                  오늘 하루 보지 않기
                </span>
              </label>

              <button
                onClick={closePopup}
                className="text-sm font-bold text-gray-800 cursor-pointer hover:text-red-500 transition-colors"
              >
                닫기 ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default NoticeModal;
