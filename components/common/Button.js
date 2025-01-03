
import PropTypes from "prop-types";

const Button = ({ label='string', link='string', size='string', showArrow='false' }) => (
  <a
    className={`button inline-flex items-center justify-center rounded-full bg-gradient-custom bg-200-auto bg-left-top hover: text-white text-body-xs/[13px] font-semibold tracking-widest uppercase transition-all duration-300 ease-in-out hover:bg-sky-700 hover:bg-[100%] hover:-translate-y-2 hover:shadow-lg ${
      size === "lg" ? "px-6 py-6 text-body-sm" : "px-4 py-2.5 text-body-xs"
    }`}
    href={link}>
    {label}
    {showArrow && <span className="arrow transition-all ml-2"><svg id="SVGDoc" width="18" height="12" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 12"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>tail-right</title><g><title>Path</title><path d="M1,5.5h16" fill-opacity="0" fill="#ffffff" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="1" stroke="#ffffff" stroke-miterlimit="20" stroke-width="2"></path></g><g><title>Path</title><path d="M12,1v0l5,5v0l-5,5v0" fill-opacity="0" fill="#ffffff" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="1" stroke="#ffffff" stroke-miterlimit="20" stroke-width="2"></path></g></g></g></svg></span>}
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
  showArrow: PropTypes.bool
};

export default Button;
