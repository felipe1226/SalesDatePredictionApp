import { Component, computed, inject, input, SimpleChanges, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ColumnInterface } from '../../../interfaces/columns.interface';
import { OrderDTO, SalesDatePredictionDTO } from '../../../interfaces/orders.interface';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table.component.html'
})
export class TableComponent {

  displayedColumns = input.required<ColumnInterface[]>()
  data = input.required<SalesDatePredictionDTO[] | OrderDTO[]>()

  modalService = inject(ModalService)

  dataSource = new MatTableDataSource<any>()
  columns = computed(() => this.displayedColumns().map(data => data.column))

  paginator = viewChild.required(MatPaginator)
  sort = viewChild.required(MatSort)


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']){
      this.dataSource = new MatTableDataSource<any>(this.data())
      this.dataSource.paginator = this.paginator()
      this.dataSource.sort = this.sort()
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator()
    this.dataSource.sort = this.sort()
  }

  onViewOrders(element: SalesDatePredictionDTO){
    this.modalService.openDialog(
      {
        title: `${element.customerName} - Orders`,
        view: 'ordersView',
        customerId: element.customerId
      }
    )
  }

  onNewOrder(element: SalesDatePredictionDTO){
    this.modalService.openDialog(
      {
        title: `${element.customerName} - New Order`,
        view: 'newOrderView',
        customerId: element.customerId
      }
    )
  }

}
