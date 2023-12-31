import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonLink from '../Button/ButtonLink';

interface PDFDownloadButtonProps {
  secret?: string;
}

/** View or Download PDF */
const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ secret }) => {
  return (
    <ButtonLink
      href={secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}
      size="lg"
    >
      <FontAwesomeIcon icon={faFilePdf} size="lg" />
      PDF
    </ButtonLink>
  );
};

export default PDFDownloadButton;
