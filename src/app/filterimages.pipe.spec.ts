import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  it('Debe crear la instacia', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });
   it('Al enviar "Leon" debe retornar una lista vacía', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform(ImagesdelatilsMock, 'Leon')).toEqual([]);
  });

  it('Al enviar "all" debe filtrar todas las imagenes', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform(ImagesdelatilsMock, 'all')).toEqual(ImagesdelatilsMock);
  });

  it('Al enviar "gato" debe filtrar ese elemento', () => {
    const pipe = new FilterimagesPipe();
    const detailExpected = [
      { id: 2, brand: 'gato', url: 'assets/images/gato1.jpg' },
    ];
    expect(pipe.transform(ImagesdelatilsMock, 'gato')).toEqual(detailExpected);
  });

});

const ImagesdelatilsMock = [
  { id: 1, brand: 'perro', url: 'assets/images/perro3.jpeg' },
  { id: 2, brand: 'gato', url: 'assets/images/gato1.jpg' },
];
