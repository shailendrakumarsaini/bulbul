import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheslistComponent } from './brancheslist.component';

describe('BrancheslistComponent', () => {
  let component: BrancheslistComponent;
  let fixture: ComponentFixture<BrancheslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrancheslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
