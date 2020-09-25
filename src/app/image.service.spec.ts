import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('se debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('debe retornar todas las imagenes', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('Cuando envíe el id 2, entonces debe retornar ese elemento', () => {
      const id = 2;
      let res = service.getImage(id);
      expect(res.brand).toBe('perro');
      expect(res.url).toBe('assets/images/perro2.jpg');
    });

    it('Cuando envíe el id 7 entonces debe retornar indefinido', () => {
      const id = 7;
      let res = service.getImage(id);
      expect(res).toBeUndefined();
    });
  });
});
