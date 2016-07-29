import {
  async,
  inject,
  TestComponentBuilder,
  ComponentFixture,
  addProviders
} from '@angular/core/testing';
import { Component, Directive, provide } from '@angular/core';
import { Location } from '@angular/common';
import { NavBarComponent } from './navbar2.component';
import { AuthService } from '../users/auth.service';
import { EventService } from '../events/index';
import { Router, RootRouter, RouterLink } from '@angular/router-deprecated';
import { ModalTriggerDirective } from '../common/modalTrigger.directive';
import { SimpleModalComponent } from '../common/simpleModal.component';


import { setBaseTestProviders } from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
} from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);




@Component({template:''})
class EmptyComponent{}

@Directive({selector:''})
class EmptyDirective{}

class MockAuthService {

}

class MockEventService {

}

class Mock {

}


describe('navbar', () => {
  beforeEach(() => {
    addProviders([
      provide(ModalTriggerDirective, { useClass: MockAuthService } ),
      provide(SimpleModalComponent, { useClass: MockAuthService } ),
      provide(AuthService, { useClass: MockAuthService } ),
      provide(EventService, { useClass: MockEventService } )
    ])
  })

  beforeEach(() => addProviders([
    // APP_ROUTER_PROVIDERS, // must be first
    // {provide: APP_BASE_HREF, useValue: '/'}, // must be second
    // {provide: ActivatedRoute, useClass: Mock},
    // {provide: Router, useClass: RootRouter},
    // {provide: Location, useClass: Mock}
  ]));

  it('should run a test', async(inject([TestComponentBuilder], (tcb) => {
    tcb//.overrideTemplate(NavBarComponent, '<nav-bar></nav-bar>')
        // .overrideDirective(NavBarComponent, RouterLink, EmptyComponent)
        .createAsync(NavBarComponent).then((fixture: ComponentFixture<NavBarComponent>) => {
          fixture.detectChanges();
          var compiled = fixture.debugElement.nativeElement;

          console.log(compiled);

          expect(compiled).toBe(compiled);
        });
  })));

//   it('should include a title', async(inject([TestComponentBuilder], (tcb) => {
//     tcb.overrideTemplate(TestComponent, '<my-fancy-border title="ABC"></my-fancy-border>')
//         .createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
//           fixture.detectChanges();
//           var compiled = fixture.debugElement.nativeElement;

//           expect(compiled).toBe(compiled); 
//         });
//   })));
});
