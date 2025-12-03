const Label = ({ children, className = "", ...rest }) => {
  return (
    <label className={`mb-1 text-sm font-medium ${className}`.trim()} {...rest}>
      {children}
    </label>
  );
};

export default Label;
