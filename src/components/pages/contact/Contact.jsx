import React from 'react'
import styled from 'styled-components'


const Contact = () => {
    return (
        <MainContainer>
        <div className="container contact">
        <div className="row">
          <div className="col-md-3">
            <div className="contact-info">
              <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </div>
          <div className="col-md-9">
            <div className="contact-form">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                </div>
              </div>
              <div className="form-group">        
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      </MainContainer>
    )
}

export default Contact



const MainContainer = styled.div`
body{
    background-color: black;
}
.contact{
    padding: 4%;
    height: 400px;
}
.col-md-3{
    background: #ff9b00;
    padding: 4%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
}
.contact-info{
    margin-top:10%;
}
.contact-info img{
    margin-bottom: 15%;
}
.contact-info h2{
    margin-bottom: 10%;
}
.col-md-9{
    background: #fff;
    padding: 3%;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}
.contact-form label{
    font-weight:600;
}
.contact-form button{
    background: #25274d;
    color: #fff;
    font-weight: 600;
    width: 25%;
}
.contact-form button:focus{
    box-shadow:none;
}

`;