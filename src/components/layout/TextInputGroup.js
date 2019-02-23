import React from 'react'
import PropTypes from 'prop-types'

const TextInputGroup = ({
  type,
  label,
  id,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control form-control-lg"
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text',
}

export default TextInputGroup;