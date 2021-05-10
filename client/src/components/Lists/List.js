// Unordered List
export const List = ({ children, className }) => {
  return (
    <ul className={className} style={ul}>
      {children}
    </ul>
  );
};

// ListItems
export const ListItems = ({ children, className }) => {
  return (
    <li className={className} style={li}>
      {children}
    </li>
  );
};

// Short stylings
const { ul, li } = {
  ul: {
    listStyle: "none",
  },
  li: {
    listStyle: "none",
  },
};
