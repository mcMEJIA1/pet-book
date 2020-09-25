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
      id: 1,
      brand: 'perro',
      url: 'assets/images/perro3.jpg',
    });

    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se debe crear el image details', () => {
    expect(component).toBeTruthy();
  });

  it('cuando la imagen existe es 1 debe retornar el json del imageService', () => {
    expect(component.image).toEqual({
      id: 1,
      brand: 'perro',
      url: 'assets/images/perro3.jpg',
    });
  });

});
