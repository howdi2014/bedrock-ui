import { useEffect, useState } from 'react';
import { Flex, Text } from '@bedrock-ui/core';
import { ComponentDocumentation } from 'components/ComponentDocumentation';
import { getRootVariables } from 'utils/getRootVariables';

import type { VariablePair } from 'utils/getRootVariables';

function VariablesRoot() {
  const [rootVariables, setRootVariables] = useState<VariablePair[]>([]);

  useEffect(() => {
    setRootVariables(getRootVariables());
  }, []);

  if (rootVariables.length === 0) {
    return null;
  }

  return (
    <ComponentDocumentation name="Root Variables">
      <Flex className="mb-8">
        <Text>
          These are all the global CSS variables that Bedrock UI provides. They primarily serve as
          the basis of the theme colors, and while these variables and the variables specific to
          components can all be overwritten, we recommend sticking to this general structure.
        </Text>
      </Flex>

      {rootVariables.map(({ variable, value }, index) => (
        <Flex className="my-1" key={index}>
          <Text>
            {variable}: {value}
          </Text>
        </Flex>
      ))}
    </ComponentDocumentation>
  );
}

export default VariablesRoot;