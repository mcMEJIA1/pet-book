import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailComponent } from './image-details.component';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let mockService: ImageService = new ImageService();
  let spy: any;
  let spy2: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: () => 2,
            },
          },
        },
        { provide: ImageService, useValue: mockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(mockService, 'getImage').and.returnValue({
      id: 2,
      brand: 'perro',
      url: 'assets/images/perro2.jpg',
    });
    // spy2 =  spyOn(mockService,'getImage').and.returnValue( null);
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse el image details', () => {
    expect(component).toBeTruthy();
  });

  it('verifica si el metodo de ImageService, getImage fue llamado ', function () {
    expect(mockService.getImage).toHaveBeenCalled();
  });

  it('verifica si el ImageDetail existe y esta definido', function () {
    expect(component.image).toBeDefined();
  });

  it('cuando la imagen existe es 2  debe retornar el json  del imageService indicado', () => {
    expect(component.image).toEqual({
      id: 2,
      brand: 'perro',
      url: 'assets/images/perro2.jpg',
    });
  });

  it('cuando se carga la pantalla , debe existir un contenedor con la clase img-container', () => {
    expect(fixture.nativeElement.querySelector('.img-contaier')).toBeDefined();
  });
});