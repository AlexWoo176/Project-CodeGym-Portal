import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../models/Comment';
import {environment} from '../../../environments/environment.prod';

const apiUrl = 'https://penzu-codegym.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  private commentUrl = environment.commentUrl;

  constructor(private httpClient: HttpClient) { }

  getAllCommentByDiaryId(id: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${apiUrl}/comment/${id}`);
  }

  createComment(comment: Comment): Observable<Comment>{
    return this.httpClient.post<Comment>(`${apiUrl}/comment/create`, comment);
  }
}
