import { Component, inject, Input, signal } from '@angular/core';
import { TableComponent } from '../../components/shared/table/table.component';
import { ColumnInterface } from '../../interfaces/columns.interface';
import { OrderDTO } from '../../interfaces/orders.interface';
import { ORDER_COLUMNS } from '../../models/columns';
import { CustomerService } from '../../services/customer.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-orders-view',
  imports: [TableComponent, MatButtonModule],
  standalone: true,
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent {

  @Input() customerId!: number;
  
  customerService = inject(CustomerService)
  private dialogRef = inject(MatDialogRef<OrdersViewComponent>);

  ordersList = signal<OrderDTO[]>([])

  displayedColumns = signal<ColumnInterface[]>(ORDER_COLUMNS)

  ngOnInit(): void {
    this.getCustomerOrders()
  }

  onClose(){
    this.dialogRef.close();
  }

  private getCustomerOrders() {
    this.customerService.getCustomerOrders(this.customerId).subscribe((data) => {
      this.ordersList.set(data)
    })
  }
}
