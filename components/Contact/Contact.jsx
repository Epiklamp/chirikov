import React from 'react';
import { MdOutlineMail } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dima.chirikov.03@mail.ru</h5>
            <a href="mailto:dima.chirikov.03@mail.ru">Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dima.chirikov.03@mail.ru</h5>
            <a href="mailto:dima.chirikov.03@mail.ru">Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dima.chirikov.03@mail.ru</h5>
            <a href="mailto:dima.chirikov.03@mail.ru">Send a message</a>
          </article>
        </div>

        <form action="">
            <input type="text" name="name" placeholder="Your full name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" rows="7" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
