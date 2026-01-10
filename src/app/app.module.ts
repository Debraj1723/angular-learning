import { NgModule } from '@angular/core';
import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, HeaderComponent, User],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule,SharedModule,TasksModule],
})
export class AppModule {}
