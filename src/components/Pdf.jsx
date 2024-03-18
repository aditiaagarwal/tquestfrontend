import React, { useRef } from 'react';
import Smartinterpretation from './Smartinterpretation';
import Visualization from './visualization';
import Labreport from './Labreport';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Pdf = () => {
  const contentRef = useRef(null);

  const downloadPdf = () => {
    const content = contentRef.current;

    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      pdf.save('download.pdf');
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <ContentSection contentRef={contentRef} />
      <button style={buttonStyle} onClick={downloadPdf}>Download PDF</button>
    </div>
  );
};

const ContentSection = ({ contentRef }) => (
  <div ref={contentRef}>
    <SectionHeading title="Smart Interpretation" />
    <Smartinterpretation />

    <SectionHeading title="Visual Info" />
    <Visualization />

    <SectionHeading title="Lab Report" />
    <Labreport />
  </div>
);


const SectionHeading = ({ title }) => <h1 style={{ fontSize: '24px', margin: '20px 0' }}>{title}</h1>;

const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '20px',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default Pdf;
