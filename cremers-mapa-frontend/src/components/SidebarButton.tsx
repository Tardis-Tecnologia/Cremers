import React from 'react';

interface SidebarButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  ariaLabel: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ onClick, icon, ariaLabel }) => (
  <button
    onClick={onClick}
    className="rounded-lg hover:bg-green-700 w-full flex justify-center p-1 md:p-2"
    aria-label={ariaLabel}
  >
    {icon}
  </button>
);

export default SidebarButton; 