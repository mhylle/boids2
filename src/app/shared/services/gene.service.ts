import {Injectable} from '@angular/core';
import {Gene} from '../model/gene.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  constructor(private http: HttpClient) {
  }

  createGene(gene: Gene) {
    this.http.post(`${environment.apiUrl}/gene`, gene).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  get genes(): Observable<Gene[]> {
    return this.http.get<Gene[]>(`${environment.apiUrl}/gene`);
  }
}
