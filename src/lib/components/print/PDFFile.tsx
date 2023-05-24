import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import LebronStretch from '../photos/lebron_transparent.png';
import LessonPlanMarkdown from '../markdown/LessonPlanMarkdown';

interface IProps {
  content: any;
}

export default function PDFFile({ content }: any) {
  return (
    <Document>
      <Page>
        {/* <LessonPlanMarkdown content={content} /> */}
        <Text>{content}</Text>
      </Page>
    </Document>
  );
}
