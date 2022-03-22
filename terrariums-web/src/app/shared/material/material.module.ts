import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
