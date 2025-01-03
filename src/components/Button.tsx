import React from "react";

interface ButtonProps {
    title: string;
    href: string;
    bg?: string;
}

const Button: React.FC<ButtonProps> = ({ title, href, bg = "bg-sky-700", ...props }) => {
    return (
        <a
            href={href}
            className={`${bg} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-800`}
            {...props}
        >
            {title}
        </a>
    );
};

export default Button