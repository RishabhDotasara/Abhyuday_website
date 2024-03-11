import React from 'react'
import PageTransit from '../components/PageTransit';

export default function Contact() {
  document.title = "Abhyuday | Contact";
  return (
    <div>
      <PageTransit currentPage="Contact"/>
      <h1>This is the contacts page.</h1>
    </div>
  )
}
