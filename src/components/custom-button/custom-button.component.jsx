import React from 'react';
import './custom-button.styles.scss';


//reason why children is pulled is because it seeks the chilldren of itself as a parent element and the otherProps are everything else that is mentioned
//within the Custom button element like value and type
const CustomButton = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
    {children}
   
    </button>
   
)

export default CustomButton;

