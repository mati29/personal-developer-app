import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule, MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatGridListModule,
    MatPaginatorModule
  ],
})
export class MaterialModule { }
