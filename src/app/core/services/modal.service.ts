import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../components/shared/modal/modal.component";
import { ModalData } from './../interfaces/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
    private readonly dialog = inject(MatDialog);

    openDialog(modalData: ModalData) {
      const dialogRef = this.dialog.open(ModalComponent, { maxWidth: 'fit-content' });
      dialogRef.componentInstance.data = modalData
    }

}
