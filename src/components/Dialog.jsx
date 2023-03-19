import PropTypes from "prop-types";
import React from "react";
const Dialog = function Dialog(props) {
  let { title, content, children } = props;
  children = React.Children.toArray(children);
  return (
    <div>
      <div>
        <div> {title} </div> <span> X </span>
      </div>
      <div> {content} </div>
      {children.length > 0 ? <div> {children} </div> : null}
    </div>
  );
};
Dialog.defaultProps = {
  title: "温馨提示",
};
Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
};
export default Dialog;
