let N = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let pattern = Array.from(Array(N),_ => new Array(N).fill("*"));

function paint(num, rawStart, colStart) {
  if(num === 1) return;
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      paint(num/3, rawStart+(i*(num/3)), colStart+(j*(num/3)));
    }
  }
  let rmStart = num/3;
  for(let i = rawStart+rmStart; i < rawStart+rmStart*2; i++) {
    for(let j = colStart+rmStart; j < colStart+rmStart*2; j++) {
      if(pattern[i][j] === " ") continue;
      pattern[i][j] = " ";
    }
  }
}

paint(N, 0, 0);

let star = "";

for(let i = 0; i < pattern.length; i++) {
  star += pattern[i].join("");
  if(i < pattern.length-1) star += "\n";
}

console.log(star);


// 문제
// 재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.

// 크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.

// ***
// * *
// ***
// N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.

// 입력
// 첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에 대해 N=3k이며, 이때 1 ≤ k < 8이다.

// 출력
// 첫째 줄부터 N번째 줄까지 별을 출력한다.

// 예제 입력 1 
// 27
// 예제 출력 1 
// ***************************
// * ** ** ** ** ** ** ** ** *
// ***************************
// ***   ******   ******   ***
// * *   * ** *   * ** *   * *
// ***   ******   ******   ***
// ***************************
// * ** ** ** ** ** ** ** ** *
// ***************************
// *********         *********
// * ** ** *         * ** ** *
// *********         *********
// ***   ***         ***   ***
// * *   * *         * *   * *
// ***   ***         ***   ***
// *********         *********
// * ** ** *         * ** ** *
// *********         *********
// ***************************
// * ** ** ** ** ** ** ** ** *
// ***************************
// ***   ******   ******   ***
// * *   * ** *   * ** *   * *
// ***   ******   ******   ***
// ***************************
// * ** ** ** ** ** ** ** ** *
// ***************************
