import React from 'react';
import '../styles/ContactForm.scss';
import emailjs from '@emailjs/browser';

const ContactForm = ({setModalToggle}) => {
  const serviceID = 'service_bf2q6eh', templateID = 'template_fj53eqa', publicKey = 'bbSHJ2xn_e_1yU6Jf';
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm(serviceID, templateID, event.target, publicKey)
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        setModalToggle(false)
      }
    })
    .catch(error => console.error(error))
  }

  return (
    <div className='modal-container'>
      <div className='custom-modal'>
        <div className='modal-header'>
          <h3>Contact me</h3>
          <div className='x-mark' onClick={() => {setModalToggle(false)}}>
            <p>x</p>
          </div>
        </div>
        <div className='form-container'>
          <form onSubmit={sendEmail} >
            <p>Name</p>
            <input type="text" name='user_name'/>
            <br />

            <p>Email</p>
            <input type='email' name='user_email'/>
            <br />

            <p>Message</p>
            <textarea name="user-message" cols="30" rows="10"></textarea>

            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;