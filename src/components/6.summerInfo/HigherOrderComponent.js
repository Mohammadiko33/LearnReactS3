import { useState } from "react";

const withToggle = (WrappedComponent) => {
  return (props) => {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
      setOpenId(prevId => prevId === id ? null : id);
    };

    return (
      <WrappedComponent
        {...props}
        isOpen={openId === props.id}
        toggle={() => toggle(props.id)}
      />
    );
  };
};

export default withToggle;