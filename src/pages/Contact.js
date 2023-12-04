import React from 'react'

function Contact() {
  return (
 <>
  <div class="content ">
    
    <div class="container contact_us_style">
      <div class="row justify-content-center">
        <div class="col-md-10">
          

          <div class="row justify-content-center">
            <div class="col-md-6">
              
              <h3 class="heading mt-5">Get in touch</h3>
              <p className='mt-3'>Have questions about support services, or anything else ? Let us know and we’ll get back to you.</p>

              <p><img src="images/contact_us.gif" alt="Image" class="img-fluid"/></p>


            </div>
            <div class="col-md-6">
              
              <form class="mb-5" method="post" id="contactForm" name="contactForm">
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-cont" name="name" id="name" placeholder="Your name"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-cont" name="email" id="email" placeholder="Email"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-cont" name="subject" id="subject" placeholder="Subject"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea class="form-cont11" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                  </div>
                </div>  

                <div class="row">
                  <div class="col-12">
                    <input type="submit" value="Send Message" class="btn-style11"/>
                  <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
 </>
  )
}

export default Contact
