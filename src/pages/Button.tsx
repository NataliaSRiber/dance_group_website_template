import React from 'react';


const Button = (props: any) => {
    return (
      <button className='bg-green-600 text-white font-semibold font-[Poppins] py-2 px-6 rounded hover:bg-green-400 duration-500 w-52'>
        {props.children}
      </button>
    );
}


export default Button;
