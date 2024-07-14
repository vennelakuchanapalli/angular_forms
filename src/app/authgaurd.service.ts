import { Injectable } from '@angular/core';
import { CanLoad, GuardResult, MaybeAsync, Route, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanLoad{

  constructor( ) { }
  canLoad() {
   return true
  }
}
