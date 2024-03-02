import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { RootLayoutComponent } from "./shared/components/root-layout/root-layout.component";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ButtonModule, RootLayoutComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  constructor(private primeng: PrimeNGConfig) {
    this.primeng.ripple = true;
  }

  title = "angular-demo";
}
