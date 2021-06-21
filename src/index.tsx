/*
 * Copyright (c) 2021 by ToanNV. All Rights Reserved.
 */

import React from 'react';
import './index.css';

interface PropTypes {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  name: string;
  optionLabels: string[];
  small: boolean;
  disabled: boolean;
}

const Switcher = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
}: PropTypes) => (
  <div className={`toggle-switch ${small ? ' small-switch' : ''}`}>
    <input
      type="checkbox"
      name={name}
      className="toggle-switch-checkbox"
      id={id}
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      disabled={disabled}
    />
    {id ? (
      <label
        className="toggle-switch-label"
        tabIndex={disabled ? -1 : 1}
        htmlFor={id}
      >
        <span
          className={
            disabled
              ? 'toggle-switch-inner toggle-switch-disabled'
              : 'toggle-switch-inner'
          }
          data-yes={optionLabels[0]}
          data-no={optionLabels[1]}
          tabIndex={-1}
        />
        <span
          className={
            disabled
              ? 'toggle-switch-switch toggle-switch-disabled'
              : 'toggle-switch-switch'
          }
          tabIndex={-1}
        />
      </label>
    ) : null}
  </div>
);

Switcher.defaultProps = {
  optionLabels: ['Active', 'Inactive'],
  small: false,
  disabled: false,
};

export default Switcher;
