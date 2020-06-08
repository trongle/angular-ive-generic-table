import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs"
import { ModelTransformer } from "./model-transformer.model";
import { SHIFTS } from "../mocks/shift.mock";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  fetchAll<T>(transformer?: ModelTransformer<T>): Observable<T[]> {
    return of(SHIFTS as T[]) ; 
  }
}