import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth text-paper/40 py-12 text-center border-t border-paper/10">
      <div className="container mx-auto px-4">
        <h4 className="font-serif text-2xl text-paper mb-4">Штаваљски Сир Јелић</h4>
        <p className="text-sm font-light max-w-md mx-auto mb-8">
          Укус који чува традицију. Произведено на Пештерској висоравни, с љубављу и поштовањем према природи.
        </p>
        <div className="text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Пољопривредно газдинство Јелић. Сва права задржана.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
