import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './errors/error-dialog/error-dialog.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorDialogService } from './errors/error-dialog.service';
import { MaterialModule } from '../material.module';
import { LoadingDialogComponent } from './loading/loading-dialog/loading-dialog.component';
import { LoadingDialogService } from './loading/loading-dialog.service';

const sharedComponents = [LoadingDialogComponent, ErrorDialogComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [...sharedComponents],
  providers: [ErrorDialogService, LoadingDialogService],
  entryComponents: [...sharedComponents],
})
export class SharedModule {}