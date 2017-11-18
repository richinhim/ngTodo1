import {Observable} from "rxjs";

// 최종처리 operator: 한개의 최종값을 Observable로 리턴
// 최종처리 연산자-
const source = Observable.of(1, 2, 3, 4);
const result = source.reduce((prev, curr) => prev + curr);

const subscribe = result.subscribe(val => console.log('Sum:', val));
