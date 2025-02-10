import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TableComponent } from '../../components/shared/table/table.component';
import { ColumnInterface } from '../../interfaces/columns.interface';
import { OrderFiltersDTO, SalesDatePredictionDTO } from '../../interfaces/orders.interface';
import { SALES_COLUMNS } from '../../models/columns';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-sales-date-prediction-view',
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, MatIconModule,
    TableComponent
  ],
  templateUrl: './sales-date-prediction-view.component.html',
  styleUrls: ['./sales-date-prediction-view.component.scss'],
})
export class SalesDatePredictionViewComponent {

  orderService = inject(OrderService)

  displayedColumns = signal<ColumnInterface[]>(SALES_COLUMNS)
  salesDatePredictionList = signal<SalesDatePredictionDTO[]>([])
  customerName!: string

  ngOnInit(): void {
    this.getSalesDatePrediction()

    this.orderService.refresh$.subscribe(() => {
      this.getSalesDatePrediction()
    })
  }

  private getSalesDatePrediction() {
    const filters: OrderFiltersDTO = { customerName: this.customerName}
    this.orderService.getSalesDatePrediction(filters).subscribe((data) => {
      this.salesDatePredictionList.set(data)
    })
  }

  onSearch(){
    this.getSalesDatePrediction()
  }
}
