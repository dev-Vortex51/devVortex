import React from "react";
import ContactComp from "./ContactComp";

function Contact() {
  return (
    <section
      className="flex flex-col border-t-1 border-border-light dark:border-border px-5 sm:px-20 xl:px-52 bg-background  py-20"
      id="section3"
    >
      <ContactComp />
    </section>
  );
}

export default Contact;
