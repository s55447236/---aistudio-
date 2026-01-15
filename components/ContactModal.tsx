
import React from 'react';
import { Language } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const content = {
    zh: {
      title: '联系我',
      wechat: '微信二维码',
      phone: '电话',
      email: '邮箱',
      close: '关闭'
    },
    en: {
      title: 'Contact Me',
      wechat: 'WeChat QR Code',
      phone: 'Phone',
      email: 'Email',
      close: 'Close'
    }
  }[language];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        <div className="p-10">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter">{content.title}</h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors interactive"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-10">
            {/* WeChat Section */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-100 rounded-3xl mb-4 flex items-center justify-center border border-gray-100 overflow-hidden">
                {/* Placeholder for QR Code */}
                <div className="flex flex-col items-center text-gray-400">
                  <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.5 2C4.36 2 1 4.91 1 8.5c0 1.94 1.1 3.65 2.78 4.67-.13.51-.47 1.83-1.78 2.83 2 .1 3.53-.78 4.45-1.5.34.03.69.05 1.05.05 4.14 0 7.5-2.91 7.5-6.5S12.64 2 8.5 2zM19 10c-3.31 0-6 2.24-6 5s2.69 5 6 5c.28 0 .56-.02.84-.04.74.58 1.97 1.28 3.57 1.2 1.05-.8.78-1.85.67-2.26 1.34-.81 2.22-2.18 2.22-3.73 0-2.76-2.69-5-6-5z" />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{content.wechat}</span>
                </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-6">
              <div className="group">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{content.phone}</p>
                <p className="text-xl font-bold">+86 123 4567 8901</p>
              </div>
              <div className="group">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{content.email}</p>
                <a 
                  href="mailto:55447236@qq.com" 
                  className="text-xl font-bold hover:text-gray-500 transition-colors flex items-center gap-2 interactive"
                >
                  55447236@qq.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
