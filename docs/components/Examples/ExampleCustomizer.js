import React from 'react';
import {
  Code as CodeIcon,
  Box as BoxIcon,
  Database as DatabaseIcon
} from 'react-feather';

import { ThemeProvider } from '../ThemeContext';
import FormWrapper from '../FormWrapper';
import { TogglerTabs } from '../TogglerTabs';

const tabs = [
  { name: 'Semantic', value: 'semantic' },
  { name: 'Material', value: 'material' },
  { name: 'Bootstrap3', value: 'bootstrap3' },
  { name: 'Bootstrap4', value: 'bootstrap4' },
  { name: 'AntD', value: 'antd' },
  { name: 'Unstyled', value: 'unstyled' }
];

const toggles = [
  { name: 'Code', tooltipText: 'Show source code', icon: <CodeIcon /> },
  {
    name: 'Example',
    tooltipText: 'Show example',
    icon: <BoxIcon />
  },
  { name: 'Schema', tooltipText: 'Show schema', icon: <DatabaseIcon /> }
];

const ExampleCustomizer = ({ code, example, schema }) => (
  <TogglerTabs group="examples" tabsItems={tabs} togglerItems={toggles}>
    {({ tab: { value: theme }, toggle: { name } }) => {
      switch (name) {
        case 'Example':
          return (
            <ThemeProvider value={theme}>
              <FormWrapper>{example}</FormWrapper>
            </ThemeProvider>
          );
        case 'Code':
          return code(theme);
        case 'Schema':
          return schema;
        default:
          return <p>Nothing selected</p>;
      }
    }}
  </TogglerTabs>
);

export default ExampleCustomizer;
