import { Component } from '@angular/core';
import { SalesDatePredictionViewComponent } from './core/page/sales-date-prediction-view/sales-date-prediction-view.component';

@Component({
  selector: 'app-root',
  imports: [SalesDatePredictionViewComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SalesDatePredictionApp';
}
