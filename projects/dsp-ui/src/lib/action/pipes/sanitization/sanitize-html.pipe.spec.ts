import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

describe('SanitizeHtmlPipe', () => {

    let pipe: SanitizeHtmlPipe;
    let sanitizer: DomSanitizer;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule
            ]
        });

        sanitizer = TestBed.inject(DomSanitizer);
        pipe = new SanitizeHtmlPipe(sanitizer);
      });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
});
