export const FileIcon = ({ size = 16, color = "#4C4C55" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.04063 1.59693C1.01399 1.72713 1 1.86193 1 2V14C1 15.1046 1.89543 16 3 16H13C14.1046 16 15 15.1046 15 14V2C15 0.895431 14.1046 0 13 0H3C2.0335 0 1.22713 0.685564 1.04063 1.59693ZM3 2H13V14H3V2ZM7 6H5V4H7V6ZM8 6H11V5H8V6ZM11 7V8H5V7H11ZM11 10V9H5V10H11ZM9 11V12H5V11H9Z"
      fill={color}
    />
  </svg>
);

export const SearchIcon = ({ size = 16, color = "#4C4C55" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 0C10.0899 0 13 2.91015 13 6.5C13 7.93484 12.5351 9.2611 11.7477 10.3363L15.2932 13.8818C15.6837 14.2723 15.6837 14.9055 15.2932 15.296C14.9026 15.6866 14.2695 15.6866 13.8789 15.296L10.333 11.7501C9.25837 12.536 7.93336 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0ZM6.5 2C8.98528 2 11 4.01472 11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2Z"
      fill={color}
    />
  </svg>
);

export const ClockIcon = ({ size = 16, color = "#4C4C55" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <g clipPath="url(#clip0)">
      <path
        d="M7.00006 3.10229V7.00002H10.8978"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00006 13.125C10.3828 13.125 13.1251 10.3827 13.1251 7C13.1251 3.61726 10.3828 0.875 7.00006 0.875C3.61732 0.875 0.875061 3.61726 0.875061 7C0.875061 10.3827 3.61732 13.125 7.00006 13.125Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const BoardIcon = ({ size = 16, color = "#4C4C55" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.04063 1.59693C1.01399 1.72713 1 1.86193 1 2V14C1 15.1046 1.89543 16 3 16H13C14.1046 16 15 15.1046 15 14V2C15 0.895431 14.1046 0 13 0H3C2.0335 0 1.22713 0.685564 1.04063 1.59693ZM3 2H13V7H3V2ZM3 9V14H13V9H3ZM6 5H10V4H6V5ZM10 12H6V11H10V12Z"
      fill={color}
    />
  </svg>
);

export const PlusIcon = ({ size = 16, color = "#4C4C55" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#C4C4C7" />
    <path d="M9 7V4H7L7 7H4V9H7L7 12H9V9H12V7H9Z" fill={color} />
  </svg>
);

export const SettingIcon = ({ size = 16, color = "#4C4C55" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 9.00002L5.01355e-05 7.00003L1.71216 6.42932C2.05585 6.31476 2.31702 6.0357 2.45584 5.70108C2.59467 5.36644 2.60519 4.98882 2.44317 4.66477L1.63593 3.05031L3.05018 1.63614L4.66439 2.44324C4.98851 2.6053 5.36622 2.59477 5.70093 2.4559C6.03561 2.31704 6.31472 2.05583 6.4293 1.71208L6.99998 0L8.99998 4.95036e-05L9.57064 1.71203C9.68522 2.05578 9.96434 2.317 10.299 2.45586C10.6338 2.59472 11.0115 2.60525 11.3356 2.44319L12.9498 1.63607L14.364 3.05031L13.5569 4.66455C13.3948 4.98865 13.4053 5.36632 13.5442 5.70102C13.683 6.03568 13.9443 6.31478 14.288 6.42936L16 7.00003L16 9.00003L14.2881 9.57067C13.9443 9.68526 13.683 9.9644 13.5442 10.2991C13.4053 10.6339 13.3948 11.0116 13.5568 11.3357L14.3639 12.9499L12.9497 14.3641L11.3354 13.5569C11.0113 13.3949 10.6336 13.4054 10.299 13.5442C9.96433 13.6831 9.68525 13.9443 9.57068 14.288L8.99997 16.0001L6.99998 16L6.42926 14.2879C6.3147 13.9442 6.03563 13.683 5.701 13.5442C5.36633 13.4053 4.98868 13.3948 4.66461 13.5569L3.05024 14.3641L1.63606 12.9498L2.4432 11.3355C2.60525 11.0114 2.59472 10.6337 2.45587 10.2991C2.31702 9.96439 2.05581 9.68529 1.71208 9.57071L0 9.00002ZM8.00003 5.00003C6.34189 5.00003 5.00003 6.34189 5.00003 8.00003C5.00003 9.65818 6.34189 11 8.00003 11C9.65818 11 11 9.65818 11 8.00003C11 6.34189 9.65818 5.00003 8.00003 5.00003Z"
      fill={color}
    />
  </svg>
);

export const MenuIcon = ({ size = 16, color = "#4C4C55" }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    className="bi bi-list"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
    />
  </svg>
);
