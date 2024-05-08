import React from 'react'

interface CustomButtonProps {
    label : String,
    onClick : () => void;
    className? : String,
}

const CustomButton : React.FC<CustomButtonProps> = ({label, onClick, className}) => {
  return (
    <div className={`w-full py-4 bg-airbnb text-center hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer ${className}`}>
        {label}
    </div>
  )
}

export default CustomButton;
