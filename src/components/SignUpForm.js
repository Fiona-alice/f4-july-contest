import React, {useState} from "react";
import { google } from "./googel";
import { facebook } from "./facebook";



const SignUpForm = () =>{

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
      });
      const [errors, setErrors] = useState({});
      const [submissionStatus, setSubmissionStatus] = useState(null);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};
    
        // Check for empty fields
        for (const key in formData) {
          if (formData[key].trim() === '') {
            validationErrors[key] = 'This field is required.';
          }
        }
    
        // Check for password mismatch
        if (formData.password !== formData.confirmPassword) {
          validationErrors.confirmPassword = 'Passwords do not match.';
        }
    
        setErrors(validationErrors);
    
        // If there are no validation errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            setTimeout(() => {
                // Reset form data
                setFormData({
                  email: '',
                  name: '',
                  password: '',
                  confirmPassword: '',
                });
          
                setSubmissionStatus('success');
              }, 2000);
            } else {
                // Clear success message if there are validation errors
                setSubmissionStatus(null);
              }
      };

    return(
        <form onSubmit={handleSubmit}> 
        <div className="centered">
            <div className="create">
                <h3>Create Account</h3>
            </div>
            <div className="othersign">
                <span >
                    <div className="gooogle">
                    <img style={{width:25, height:25}} src={google} alt="google"/>
                    <span>Sign Up With Google</span>
                    </div>
                </span>
                <span >
                    <div className="facebook">
                    <img style={{width:25, height:25}} src={facebook} alt="facebook"/>
                    <span>Sign Up With Facebook</span>
                    </div>
                </span>
            </div>
            <div className="form-input">
                <input className="borderbottom" type="text" placeholder="Full Name"></input>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-input">
                <input className="borderbottom" type="email" placeholder="Email Address"></input>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-input">
                <input className="borderbottom" type="password" placeholder="Password"></input>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-input">
                <input className="borderbottom" type="password" placeholder="Confirm Password"></input>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                {formData.password !== '' &&
                formData.confirmPassword !== '' &&
                formData.password !== formData.confirmPassword && (
          <p>Passwords do not match.</p>
        )}
        {submissionStatus === 'success' && (
        <p style={{ color: 'green' }}>Form submitted successfully!</p>
      )}

            </div>
            <div className="btn">
            <button type="submit">Create Account</button>
            </div>
        </div>
        </form>


    );

};

export default SignUpForm;