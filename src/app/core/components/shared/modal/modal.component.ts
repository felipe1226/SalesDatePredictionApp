import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DynamicViewDirective } from '../../../directives/dynamic-view.directive';
import { ModalData } from '../../../interfaces/modal.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, MatButtonModule, MatDialogModule, DynamicViewDirective, MatNativeDateModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() data!: ModalData
  private dialogRef = inject(MatDialogRef<ModalComponent>);

  onClose() {
    this.dialogRef.close();
  }

  getHeaderClass(): string {
    return this.data.title.includes('Orders') ? 'red-theme' : 'green-theme'
  }
}
