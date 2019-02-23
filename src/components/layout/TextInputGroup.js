import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextInputGroup = ({
  type,
  label,
  id,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error,
        })}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
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
  error: PropTypes.object,
}

TextInputGroup.defaultProps = {
  type: 'text',
}

export default TextInputGroup;