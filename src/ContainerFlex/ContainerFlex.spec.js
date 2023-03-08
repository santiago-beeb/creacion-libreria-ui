import { render } from '@testing-library/react';
import ContainerFlex from './ContainerFlex';

describe('@components/ContainerFlex', () => {
  it('Given a normal component call it should render component', () => {
    //arrange
    const { getByRole } = render(<ContainerFlex role="banner" bgColor="blue" />);
    //act
    const ContainerFlexTest = getByRole('banner');
    //assert
    expect(ContainerFlexTest).toBeDefined();
  });
});
