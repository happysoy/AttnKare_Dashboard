// import PropTypes from 'prop-types';
// import { useEffect, createContext } from 'react';
// // hooks
// import useLocalStorage from '../hooks/useLocalStorage';
// // utils
// import getColorPresets, { colorPresets, defaultPreset } from '../utils/getColorPresets';
// // config
// import { defaultSettings } from '../config';

// // ----------------------------------------------------------------------

// const initialState = {
//   ...defaultSettings,
//   // Mode
//   onToggleMode: () => {},
//   onChangeMode: () => {},

//   // Direction
//   onToggleDirection: () => {},
//   onChangeDirection: () => {},
//   onChangeDirectionByLang: () => {},

//   // Layout
//   onToggleLayout: () => {},
//   onChangeLayout: () => {},

//   // Contrast
//   onToggleContrast: () => {},
//   onChangeContrast: () => {},

//   // Color
//   onChangeColor: () => {},
//   setColor: defaultPreset,
//   colorOption: [],

//   // Stretch
//   onToggleStretch: () => {},

//   // Reset
//   onResetSetting: () => {},
// };

// const SettingsContext = createContext(initialState);

// // ----------------------------------------------------------------------

// SettingsProvider.propTypes = {
//   children: PropTypes.node,
// };

// function SettingsProvider({ children }) {
//   return <SettingsContext.Provider>{children}</SettingsContext.Provider>;
// }

// export { SettingsProvider, SettingsContext };
