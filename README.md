# SWITCH COMPONENT FOR REACT

**INSPIRED BY TOGGLE IOS**

This component helps to active or inactive.

## Installation

`npm install rc-swicher`

or

`yarn add rc-swicher`

## Usage

Note: id, checked and onChange are required for Switcher component to function. The props name, small, disabled and optionLabels are optional.

Usage: <VBSwitcher id="id" checked={value} onChange={checked => setValue(checked)}} />

```
import Switcher from 'rc-switcher';

<Switcher
  id="active"
  name="active"
  checked
  onChange={() => {}}
/>
ReactDOM.render(<DebugFlag />, document.getElementById('root'));
```

## Screenshot

![screenshot](https://user-images.githubusercontent.com/43688618/122758335-e147ce80-d2c2-11eb-99b4-0bccacfefc36.png 'screenshot')
