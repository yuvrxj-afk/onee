import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us !</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Abc" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input type="text" placeholder="Write Down The Query Here!" />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
