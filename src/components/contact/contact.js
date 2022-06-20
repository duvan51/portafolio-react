import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import qr from '../images/qr-email.png';

import '../contact/contact.css'
import { useTranslation } from 'react-i18next';


function ContactForm() {

  const {t} = useTranslation();


  const [state, handleSubmit] = useForm("xknyegez");
  const nameUser = localStorage.getItem('user')
  if (state.succeeded) {  {/**state.succeeded */}
      return (
        <div className="res">
          <div className="respuesta">
            <p>Thanks {nameUser} </p>
            <div>your message has been sent, I will contact you soon </div>
          </div>
        </div>
      );
  }
  return (
    <div className="contact" >
      <form onSubmit={handleSubmit} className="form_contact">
        <div className="form_contact_email" >
            <input
              id="Name"
              type="Name" 
              name="Name"
              defaultValue={nameUser}
              placeholder={t('contactMe.contactInputNameHover')}
            />
          </div>
          <ValidationError 
            prefix="Name" 
            field="Name"
            errors={state.errors}
          />
        
        
        <div className="form_contact_email" >
          <input
            id="email"
            type="email" 
            name="email"
            placeholder={t('contactMe.contactInputEmailHover')}
          />
        </div>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        
        <div className="form_contact_email" >
          <input
            id="telephone"
            type="telephone" 
            name="telephone"
            placeholder="+56 5689215"
          />
        </div>
        <ValidationError 
          prefix="Telephone" 
          field="telephone" 
          errors={state.errors}
        />
        
        
        <div className="form_contact_text" >
          <textarea
            id="message"
            name="message"
            placeholder={t('contactMe.contactInputMessageHover')}
          />
        </div>
        
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          {t ('contactMe.contactButton')}
        </button>
      </form>
     <div className="qr" >
      <div className="qr-title">{t ('contactMe.contactQr')}</div>
      <img src={qr} alt='' />
     </div>
    </div>
      
  );
}

export default ContactForm;