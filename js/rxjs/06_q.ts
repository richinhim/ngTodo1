 import {Observable} from "rxjs";

// 1 ~ 100000 사이 3또는 5의 배수의 갯수를 모두 구하시오.
// Observable.range(1, 100000) 사용

Observable.range(1, 100000).filter( (data: number) => data%3 === 0 || data%5 === 0).count()
  .subscribe(data => console.log(data));


// 1, 100000 중에서 8이 들어간 문자 갯수
//  예) 8848은 3개로 카운트
