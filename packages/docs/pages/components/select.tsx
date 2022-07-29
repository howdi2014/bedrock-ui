import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Select } from '@bedrock-ui/core';
`.trim();

function ComponentsSelect() {
  return (
    <ComponentDocumentation name="Select">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsSelect;