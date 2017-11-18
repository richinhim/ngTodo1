import {Observable} from "rxjs";

// 중간처리 operator map
// 중간처리 연산자-중간처리 연산을 해도 스트림이 계속이어지다.
new Observable(observer => {
    let count = 0;
    let timeout = setInterval(() => {
        ++count;
        observer.next(count);
    }, 1000);
}).map((data: number) => data * data).subscribe(data => console.log(data));
