import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { FormsModule } from '@angular/forms';
import { HashPipe } from './pipes/hash.pipe';



@NgModule({
  declarations: [ TableContainerComponent, TableRowComponent, HashPipe ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [TableContainerComponent]
})
export class ScoreTableModule { }
