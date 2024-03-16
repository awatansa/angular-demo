import { TestBed } from "@angular/core/testing";

import { GlobalContextServiceService } from "./global-context-service.service";

describe("GlobalContextServiceService", () => {
  let service: GlobalContextServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalContextServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
