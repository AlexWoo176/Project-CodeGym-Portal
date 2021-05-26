import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tag} from '../../models/Tag';
import {environment} from '../../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private sduTagUrl = environment.tagUrl;

  constructor(private httpClient: HttpClient) {
  }

  getTagList(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this.sduTagUrl);
  }

  createTags(tag: Tag): Observable<Tag> {
    return this.httpClient.post<Tag>(this.sduTagUrl, tag);
  }

  updateTags(tag: Tag): Observable<Tag> {
    return this.httpClient.put<Tag>(this.sduTagUrl + tag.id, tag);
  }

  deleteTags(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.sduTagUrl + id);
  }

  searchTagByName(tag: Tag): Observable<Tag[]> {
    return this.httpClient.post<Tag[]>(this.sduTagUrl + 'search-by-name', tag);
  }
}
