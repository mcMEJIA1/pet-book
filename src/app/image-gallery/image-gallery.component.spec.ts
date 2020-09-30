import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [
        {
          provide: ImageService,
          useValue: {
            getImages: () => ImagesdelatilsMock.slice(0),
            getImage: () =>
              ImagesdelatilsMock.slice(0).find((Images) => Images.id == 1),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });
});

const ImagesdelatilsMock = [
  { id: 1, brand: 'perro', url: 'assets/images/perro3.jpg' },
  { id: 2, brand: 'gato', url: 'assets/images/gato1.jpg' },
];
