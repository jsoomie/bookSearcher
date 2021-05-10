// Headings
export const Heading = ({ children, color, size, className }) => {
  const style = {
    color: color ?? "#333",
    fontSize: size ?? "2rem",
  };

  return (
    <h1 className={className} style={style}>
      {children}
    </h1>
  );
};
