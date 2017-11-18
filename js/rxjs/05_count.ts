import {Observable} from "rxjs";

// 최종처리 operator: 한개의 최종값을 Observable로 리턴
// 최종처리 연산자-단일값으로 리턴하고, 스트림을 끝내고 싶을때 사용해야

const source = Observable.of(1, 2, 3, 4);
const result = source.count();

const subscribe = result.subscribe(val => console.log('Sum:', val));
