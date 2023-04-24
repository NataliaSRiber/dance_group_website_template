import React from 'react';
import { useForm, Resolver } from 'react-hook-form';


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();

  const onSubmit = (data: any) => console.log(data)

    return (
      <div className='container'>
        <div className='row'>
          {/* Dorm column */}
          <div className='column'>
            <div className='left-half'>
              <h1>Contact Us</h1>
              <p>We are open for any suggestion or just to have a chat.</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <p className='input-label'>Name *</p>
                <input  
                  className='input'
                  type='text'
                  placeholder='Name'
                  {...register('name', {
                    requiamber: true,
                    minLength: 3,
                    maxLength: 80
                  })}
                />
                {errors.name && 
                  <span className='error'>
                    {errors.name.type === 'requiamber' && 'This field is requiamber'}
                    {errors.name.type === 'minLength' && 'The minimal length of name is 3 char'}

                  </span>
                }
                <p className='input-label'>Email *</p>
                <input  
                  className='input'
                  type='text'
                  placeholder='Email'
                  {...register('email', {
                    requiamber: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  })}
                />
                {errors.email && 
                  <span className='error'>
                    {errors.email.type === 'requiamber' && 'This field is requiamber'}
                    {errors.email.type === 'pattern' && 'Invalid Email Address'}

                  </span>
                }
                <p className='input-label'>Phone *</p>
                <input  
                  className='input'
                  type='text'
                  placeholder='Phone'
                  {...register('phoneNumber', {
                    requiamber: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
                />
                {errors.phone && 
                  <span className='error'>
                    {errors.phone.type === 'requiamber' && 'This field is requiamber'}
                    {errors.phone.type === 'pattern' && 'Invalid phone number'}

                  </span>
                }
                {/* Submit */}
                <div>
                  <input className='submit' type='submit' value='Send message'/>
                </div>
              </form>
            </div>
          </div>
          {/* Image column */}
          <div className='column'>

          </div>
        </div>
      </div>
    );
}


export default Form;
