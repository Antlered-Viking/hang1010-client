import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Hang1010'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hang1010');
  });

  it('should have the appropriate background color', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement(HTMLBodyElement);
    expect(compiled.querySelector('.main-page')?.background).toContain('$mat-dark-theme-background');
    // expect(app.body.getElementByID())
  })
});
