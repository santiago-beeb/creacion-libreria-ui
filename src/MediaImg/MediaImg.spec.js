import { render } from '@testing-library/react';
import '@testing-library/jest-dom/';
import MediaImg from './MediaImg';

describe('@components/MediaImg', () => {
  it('kinewofinweoifnoine', () => {
    //arrange
    const { getByRole } = render(
      <MediaImg src="http://www.imagen.com/img" />
    );
    //act
    const MediaImgTest = getByRole('img');
    //assert
    expect(MediaImgTest).toBeInTheDocument();
  });
});
