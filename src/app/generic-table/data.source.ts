import { Observable, BehaviorSubject, of, pipe } from 'rxjs';
import { DataSource as BaseDataSource } from "@angular/cdk/table"
import { CollectionViewer, SelectionModel } from '@angular/cdk/collections';
import { finalize, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ModelTransformer } from './model-transformer.model';
import { HttpService } from './http.service';

export class DataSource<T> extends BaseDataSource<T> {
    private data: BehaviorSubject<T[]> = new BehaviorSubject([]);

    private isFetching: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public isFetching$ = this.isFetching.asObservable();

    private total: BehaviorSubject<number> = new BehaviorSubject(0);
    public total$ = this.total.asObservable();

    constructor(private httpService: HttpService) {
      super();
    }

    connect(collectionViewer: CollectionViewer): Observable<T[] | readonly T[]> {
      return this.data.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
      this.data.unsubscribe();
      this.isFetching.unsubscribe();
      this.total.unsubscribe();
    }

    fetchAll(transformer?: ModelTransformer<T>) {
      this.isFetching.next(true);
      const source = this.httpService.fetchAll<T>()
      .pipe(
        finalize(() =>this.isFetching.next(false))
      )
      .subscribe(data => {
        if (transformer) data = transformer.transform(data);
        
        this.data.next(data);
        this.total.next(data.length || 0);
      });
    }
}