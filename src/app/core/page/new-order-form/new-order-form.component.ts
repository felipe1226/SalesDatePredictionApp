import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeDTO } from '../../interfaces/employees.interface';
import { NewOrderDTO } from '../../interfaces/orders.interface';
import { ProductDTO } from '../../interfaces/products.interface';
import { ShipperDTO } from '../../interfaces/shippers.interface';
import { EmployeeService } from '../../services/employee.service';
import { OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { ShipperService } from '../../services/shipper.service';

@Component({
  selector: 'app-new-order-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './new-order-form.component.html',
  styleUrls: ['./new-order-form.component.scss']
})
export class NewOrderFormComponent {

  @Input() customerId!: number

  employeeService = inject(EmployeeService)
  shipperService = inject(ShipperService)
  productService = inject(ProductService)
  orderService = inject(OrderService)
  fb = inject(FormBuilder)
  private _snackBar = inject(MatSnackBar);
  private dialogRef = inject(MatDialogRef<NewOrderFormComponent>);

  employeesList: EmployeeDTO[] = []
  shippersList: ShipperDTO[] = []
  productsList: ProductDTO[] = []

  form: FormGroup = this.fb.group({
    empId: [null, [Validators.required]],
    shipperId: [null, [Validators.required]],
    shipName: [null, [Validators.required]],
    shipAddress: [null, [Validators.required]],
    shipCity: [null, [Validators.required]],
    shipCountry: [null, [Validators.required]],
    orderDate: [null, [Validators.required]],
    requiredDate: [null, [Validators.required]],
    shippedDate: [null, [Validators.required]],
    freight: [null, [Validators.required]],
    productId: [null, [Validators.required]],
    unitPrice: [null,  [Validators.required]],
    qty: [null,  [Validators.required]],
    discount: [null, [Validators.required]]
  })

  ngOnInit(): void {
    this.getEmployees()
    this.getShippers()
    this.getProducts()
  }

  onClose(){
    this.dialogRef.close();
  }

  onSubmit(){
    if(!this.form.valid){
      this._snackBar.open('Debe completar los campos del formulario', '', { duration: 4000 })
      return
    }

    const data: NewOrderDTO = {
      customerId: this.customerId,
      ...this.form.value
    }

    this._addNewOrder(data)
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employeesList = data
    })
  }

  private getShippers() {
    this.shipperService.getShippers().subscribe((data) => {
      this.shippersList = data
    })
  }

  private getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.productsList = data
    })
  }

  private _addNewOrder(data: NewOrderDTO){
    this.orderService.addNewOrder(data).subscribe(result => {
      this.dialogRef.close();
      this._snackBar.open(result.message, '', { duration: 4000 })
    })
  }

}
