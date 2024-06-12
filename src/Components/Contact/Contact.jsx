import React from 'react';
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a1bac513-8dfb-4c4a-9f0a-55d238b809d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
         <div className="contact-col">
             <h3>Sent us A Message <img src={msg_icon} alt="" /></h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo explicabo sunt voluptatem quia facilis impedit unde, aspernatur minima illum. Optio a veniam quod obcaecati eius. Ducimus exercitationem enim impedit quis.  </p>

             <ul>
                <li><img src={mail_icon} alt="" />edusitysar00@gmail.com</li>
                <li><img src={phone_icon} alt="" />+3456780981</li>
                <li><img src={location_icon} alt="" />Westen park near shely ,Uk</li>
             </ul>
         </div>
         <div className="contact-col">
             <form onSubmit={onSubmit}>
                  <label>Enter Your Name</label>
                  <input type="text" name='name ' placeholder='Enter Your Name'  required />
                  <label>Enter Your Number</label>
                  <input type="tel" name='phone' placeholder='Enter Your Mobile number'  required />
                  <label htmlFor="">Write Your Message Here</label>
                  <textarea name="mesage" rows="6"  placeholder='Enter A Message' required></textarea>
                  <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
             </form>
             <span>{result}</span>
         </div>
    </div>
  );
}

export default Contact;
