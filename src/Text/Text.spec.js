import { render } from '@testing-library/react';
import Text from './Text';

describe('@components/Text', () => {
  it('kinewofinweoifnoine', () => {
    //arrange
    const { getByRole } = render(
      <Text component="h1">Chocoaventura con Santiago</Text>
    );
    //act
    const TextTest = getByRole('heading', {
      name: /Chocoaventura con Santiago/i,
    });
    //assert
    expect(TextTest).toBeDefined();
  });
});
