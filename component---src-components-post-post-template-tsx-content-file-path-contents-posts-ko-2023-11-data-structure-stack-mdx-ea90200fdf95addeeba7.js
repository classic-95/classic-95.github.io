"use strict";(self.webpackChunkClassic95=self.webpackChunkClassic95||[]).push([[916],{4077:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1151),l=n(7294),c=n.p+"static/stack-b9932ad24eefe6617d1363373bff88f5.webp";function r(e){const t=Object.assign({p:"p",hr:"hr",h2:"h2",a:"a",span:"span",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,a.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"오늘은 자료 구조 중 stack 구조에 대해 알아봐요."),"\n",l.createElement(t.p,null,"오늘 포스팅의 목표는 여러분이 이 포스팅의 썸네일을 이해하는 거에요!"),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"1-stack-구조란",style:{position:"relative"}},l.createElement(t.a,{href:"#1-stack-%EA%B5%AC%EC%A1%B0%EB%9E%80","aria-label":"1 stack 구조란 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. stack 구조란?"),"\n",l.createElement(t.p,null,"사실 크게 어려울 건 없어요. 왜냐하면, stack 구조는 우리가 일상에서 너무 많이 접하는 구조이기 때문이죠."),"\n",l.createElement(t.p,null,"옷을 넣는 수납함이 있다고 생각해보세요. 그 수납함에 옷을 차곡차곡 쌓아서 넣어놨는데 맨 아래에 있는 옷을 꺼내야한다고 가정해볼게요."),"\n",l.createElement(t.p,null,"꺼내야 하는 옷 위에 다른 옷들을 건드리지 않고 꺼내야 하는 옷을 꺼낼 수 있을까요?"),"\n",l.createElement(t.p,null,"맞아요. 불가능하죠? 맨 아래 옷은 위 옷들을 전부 꺼낸 후에야 꺼낼 수 있어요."),"\n",l.createElement(t.p,null,"이게 바로 stack 구조에요. 참 쉽죠?"),"\n",l.createElement(t.p,null,"이러한 구조를 우리는 ",l.createElement(t.code,null,"LIFO(Last In First Out)"),"구조라고 해요. 마지막에 들어간 게 처음으로 나온다. 여기까지만 이해하시면 이론은 끝입니다."),"\n",l.createElement(t.p,null,"stack 구조라는 건 입구가 하나뿐인 바구니에 우리가 원하는 물건을 넣고 위에서부터 차례대로 빼는 거라고 생각하시면 편해요."),"\n",l.createElement(t.h2,{id:"2-stack-구현",style:{position:"relative"}},l.createElement(t.a,{href:"#2-stack-%EA%B5%AC%ED%98%84","aria-label":"2 stack 구현 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. stack 구현"),"\n",l.createElement(t.p,null,"대부분의 언어들에서는 이미 stack, queue 등이 모두 최적화된 상태로 바로 사용할 수 있게 제공되기 때문에 C언어로 구현해볼게요."),"\n",l.createElement(t.p,null,"사실 자료 구조 자체를 제대로 이해하고 구현할 수 있으면 언어는 크게 문제가 없어요. (문제 없다는 건 성능을 말하는 게 아니고 언어에 구애받지 않는 실력을 말하는 거에요.)"),"\n",l.createElement(t.p,null,"위에서 stack 구조를 이해해봤으니 이제 구현해봐요."),"\n",l.createElement(t.h3,{id:"2-1-필요한-변수",style:{position:"relative"}},l.createElement(t.a,{href:"#2-1-%ED%95%84%EC%9A%94%ED%95%9C-%EB%B3%80%EC%88%98","aria-label":"2 1 필요한 변수 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2-1. 필요한 변수"),"\n",l.createElement(t.p,null,"이해는 했는데 그럼 구현은 어떻게 해야될까요?"),"\n",l.createElement(t.p,null,"먼저 필요한 변수들을 정의해야해요."),"\n",l.createElement(t.p,null,"구조체 형태로 Stack을 만들어봤는데요."),"\n",l.createElement(t.h4,null,l.createElement(t.code,null,"top")),"\n",l.createElement(t.p,null,"현재 스텍이 얼마나 차있는지를 의미하는 변수에요."),"\n",l.createElement(t.p,null,"초기값을 -1로 두고 array에 값이 채워질 때마다 +1 해줘서 배열의 가장 마지막에 들어온 아이템을 가리키는 인덱스 역할을 해줄 거에요."),"\n",l.createElement(t.h4,null,l.createElement(t.code,null,"array")),"\n",l.createElement(t.p,null,"스텍을 쌓을 공간이에요. 위의 설명을 빌리자면 옷을 넣을 수납함인 거죠."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-c"},"#define ARRAY_SIZE 6\n\ntypedef struct STACK {\n    int top;\n    char array[ARRAY_SIZE];\n} Stack;\n")),"\n",l.createElement(t.h3,{id:"2-2-필요한-함수",style:{position:"relative"}},l.createElement(t.a,{href:"#2-2-%ED%95%84%EC%9A%94%ED%95%9C-%ED%95%A8%EC%88%98","aria-label":"2 2 필요한 함수 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2-2. 필요한 함수"),"\n",l.createElement(t.p,null,"항상 반복적으로 사용하는 코드들은 어떻게 해야한다? 함수화 시켜야한다~!"),"\n",l.createElement(t.p,null,"함수화 시켜두면 변경사항이 생길 때 한 부분만 고치면 해당 함수를 사용하는 모든 코드 부분에 적용되기 때문에 유지보수가 쉬워지고 실수가 적어지니까 꼭! 함수화 시키는 연습을 해주세요."),"\n",l.createElement(t.h4,null,l.createElement(t.code,null,"int isEmpty(Stack stack)")),"\n",l.createElement(t.p,null,"stack이 비어있는지 여부를 확인해주는 함수에요."),"\n",l.createElement(t.p,null,"top 변수의 초기값을 -1로 둔다고 했으니 -1인지만 확인하면 되겠죠?"),"\n",l.createElement(t.p,null,"(c언어에는 boolean 값이 없어서 참이면 1 거짓이면 0으로 반환되요.)"),"\n",l.createElement(t.h4,null,l.createElement(t.code,null,"int size(Stack stack)")),"\n",l.createElement(t.p,null,"stack에 몇 개의 아이템이 들어있는지 확인해주는 함수에요."),"\n",l.createElement(t.p,null,"top 변수가 마지막에 들어온 아이템을 가리키는 인덱스 역할을 한다고 했으니 +1을 해주면 아이템 개수를 쉽게 알 수 있어요."),"\n",l.createElement(t.h4,null,l.createElement(t.code,null,"char getTop(Stack stack)")),"\n",l.createElement(t.p,null,"stack에 마지막으로 들어온 아이템을 반환하는 함수에요."),"\n",l.createElement(t.h4,null,l.createElement(t.code,null,"void push(Stack *stack, char item)")),"\n",l.createElement(t.p,null,"stack에 아이템을 넣어주는 함수에요."),"\n",l.createElement(t.p,null,"top index를 하나씩 늘려가면서 array 배열에 차례대로 채워넣어요."),"\n",l.createElement(t.p,null,"(c언어의 함수는 기본적으로 call by value 방식으로 작동하기 때문에 stack 내부의 변수들을 수정하려면 포인터를 사용해줘야해요.)"),"\n",l.createElement(t.h4,null,l.createElement(t.code,null,"char pop(Stack *stack)")),"\n",l.createElement(t.p,null,"stack의 마지막 아이템을 빼주는 함수에요."),"\n",l.createElement(t.p,null,"top index를 줄여가면서 array 배열에서 차례때로 빼주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-c"},"#define STACK_FULL_MSG \"stack is already full\\n\"\n#define STACK_PUSH_MSG \"push %c into stack\\n\"\n#define STACK_EMPTY_MSG \"stack is empty now\\n\"\n\nint isEmpty(Stack stack)\n{\n    return stack.top == -1;\n}\n\nint size(Stack stack)\n{\n    return stack.top + 1;\n}\n\nchar getTop(Stack stack)\n{\n    if (isEmpty(stack))\n    {\n        printf(STACK_EMPTY_MSG);\n        return '#';\n    }\n    return stack.array[stack.top];\n}\n\nvoid push(Stack *stack, char item)\n{\n    if (size(*stack) == ARRAY_SIZE - 1)\n    {\n        printf(STACK_FULL_MSG);\n        return;\n    }\n    stack->array[++stack->top] = item;\n    printf(STACK_PUSH_MSG, item);\n}\n\nchar pop(Stack *stack)\n{\n    if (isEmpty(*stack))\n    {\n        printf(STACK_EMPTY_MSG);\n        return '#';\n    }\n    char item = stack->array[stack->top];\n    stack->array[stack->top--] = '\\0';\n    return item;\n}\n")),"\n",l.createElement(t.h3,{id:"2-3-메일-함수",style:{position:"relative"}},l.createElement(t.a,{href:"#2-3-%EB%A9%94%EC%9D%BC-%ED%95%A8%EC%88%98","aria-label":"2 3 메일 함수 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2-3. 메일 함수"),"\n",l.createElement(t.p,null,"stack 변수의 top과 array 변수를 각각 -1, 로 초기화해서 k, c, a, t, s를 순서대로 push하고 마지막에 모두 pop하면 어떤 단어가 나올까요?"),"\n","\n",l.createElement("center",null,l.createElement("img",{src:c,alt:"stack example",height:"800px"})),"\n",l.createElement(t.p,null,"바로 stack이에요."),"\n",l.createElement(t.p,null,"이제 썸네일의 의미를 아시겠나요? 누워있는 스텍 배열에 k, c, a, t, s 아이템이 순서대로 push한 형태인거죠."),"\n",l.createElement(t.p,null,"순서대로 pop하면 오늘 코딩결과와 똑같이 stack이에요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-c"},"int main()\n{\n    Stack stack =\n        {\n            -1,\n            {\"\\0\"}};\n\n    push(&stack, 'k');\n    push(&stack, 'c');\n    push(&stack, 'a');\n    push(&stack, 't');\n    push(&stack, 's');\n\n    while (!isEmpty(stack))\n    {\n        printf(\"%c\", pop(&stack));\n    }\n\n    return 0;\n}\n")),"\n",l.createElement(t.h2,{id:"3-stack-실제-사용-사례",style:{position:"relative"}},l.createElement(t.a,{href:"#3-stack-%EC%8B%A4%EC%A0%9C-%EC%82%AC%EC%9A%A9-%EC%82%AC%EB%A1%80","aria-label":"3 stack 실제 사용 사례 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. stack 실제 사용 사례"),"\n",l.createElement(t.p,null,"그래 다 좋다! 좋은데! 그래서 언제 쓰는데? 별로 쓸모 없을 것 같은데... 라고 생각하신다면 천만의 말씀!"),"\n",l.createElement(t.p,null,"생각보다 우리 주변에서 많이 쓰이는 데이터 구조에요."),"\n",l.createElement(t.h3,{id:"3-1-웹-브라우저-뒤로가기",style:{position:"relative"}},l.createElement(t.a,{href:"#3-1-%EC%9B%B9-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%92%A4%EB%A1%9C%EA%B0%80%EA%B8%B0","aria-label":"3 1 웹 브라우저 뒤로가기 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-1. 웹 브라우저 뒤로가기"),"\n",l.createElement(t.p,null,"크롬, 네이버 웨일, 엣지, 사파리 등 많은 브라우저에서 공통적으로 지원하는 기능인 뒤로가기 버튼도 stack을 이용한 거에요."),"\n",l.createElement(t.p,null,"여러분이 보고 있는 페이지도 스텍으로 쌓여있는 거죠."),"\n",l.createElement(t.h3,{id:"3-2-ctrlz-cmdz",style:{position:"relative"}},l.createElement(t.a,{href:"#3-2-ctrlz-cmdz","aria-label":"3 2 ctrlz cmdz permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3-2. ctrl+z, cmd+z"),"\n",l.createElement(t.p,null,"윈도우의 경우에는 ctrl+z, 맥의 경우에는 cmd+z 문서 작업이나 코딩 막 하다가 뒤로 돌릴 때 쓰는 단축키!"),"\n",l.createElement(t.p,null,"이것도 여러분의 동작들을 stack 형식으로 push해두었다가 pop하는 형식이에요."),"\n",l.createElement(t.p,null,"정말 신기하죠?"),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"전체-코드",style:{position:"relative"}},l.createElement(t.a,{href:"#%EC%A0%84%EC%B2%B4-%EC%BD%94%EB%93%9C","aria-label":"전체 코드 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"전체 코드"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/classic-95/data-structures/tree/main/stack"},"https://github.com/classic-95/data-structures/tree/main/stack")),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"정리하며",style:{position:"relative"}},l.createElement(t.a,{href:"#%EC%A0%95%EB%A6%AC%ED%95%98%EB%A9%B0","aria-label":"정리하며 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"정리하며"),"\n",l.createElement(t.p,null,"오늘은 stack 구조에 대해 이해하고 구현하기, 실제 사용 사례들에 대해 알아봤어요."),"\n",l.createElement(t.p,null,"생각보다 어렵지 않죠? 뭐든지 이해하고 나면 구현해보는 습관을 들이시는 걸 추천드려요."),"\n",l.createElement(t.p,null,"구현하면서 머리를 쓸 수록 그 구조가 더 머리에 깊게 남고 다른 곳에 이용할 수 있는 계기가 될 거에요."),"\n",l.createElement(t.p,null,"포스팅 읽으면서 따라오시느라 고생하셨어요!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)}},6610:function(e,t,n){n.a(e,(async function(e,a){try{n.r(t),n.d(t,{Head:function(){return H},default:function(){return w}});var l=n(4077),c=n(7294),r=n(394),i=n(1151),s=n(1006),m=n(4428),o=n(4764),h=n(7526),p=n(9878),d=n(6337),u=n(9420),E=e([h]);h=(E.then?(await E)():E)[0];const v=r.default.div.withConfig({displayName:"PostTemplate__Container",componentId:"sc-1y3rc8p-0"})(["width:100%;"]),k=r.default.div.withConfig({displayName:"PostTemplate__BodyContainer",componentId:"sc-1y3rc8p-1"})(["width:100%;"]),g=r.default.div.withConfig({displayName:"PostTemplate__ContentContainer",componentId:"sc-1y3rc8p-2"})(["width:100%;max-width:860px;margin:auto;padding-top:78px;margin-bottom:40px;","{max-width:928px;padding:78px 34px 0;}","{padding:78px 20px 0;}"],m.Z.custom(1199),m.Z.custom(767)),S=r.default.h1.withConfig({displayName:"PostTemplate__TitleLabel",componentId:"sc-1y3rc8p-3"})(["font-size:1.5em;font-weight:400;color:",";margin-bottom:10px;"],o.Z.viloet[6]),C=r.default.div.withConfig({displayName:"PostTemplate__DateContainer",componentId:"sc-1y3rc8p-4"})(["margin-bottom:12px;time{display:block;color:",";font-size:0.8em;}"],o.Z.gray[6]),x=r.default.div.withConfig({displayName:"PostTemplate__MdxContainer",componentId:"sc-1y3rc8p-5"})(["width:100%;margin-bottom:66px;h2,h3,h4,h5,h6{font-weight:400;}.h2-div{margin:29px 0 22px;padding-left:10px;padding-bottom:2px;border-left:5px solid ",";border-top-left-radius:2px;border-bottom-left-radius:2px;}h2{font-size:1.5em;","{font-size:1.25em;}.anchor-header{left:-15px;}}.anchor-header{svg{width:20px;height:20px;fill:",";}}h3{margin:22px 0 15px;}h4{margin-bottom:10px;}h6{color:",";}a:not(.anchor-header){color:",";&:hover{color:",";font-weight:500;font-size:1.05em;transition:0.5s;}}p{font-size:1em;margin-bottom:22px;line-height:1.6;}hr{background-color:",";height:1px;border:0;margin:20px 0 40px;}.gatsby-resp-image-wrapper{margin-bottom:20px;}li{font-size:1em;margin-bottom:6px;}pre{margin:0;}"],o.Z.viloet[6],m.Z.custom(767),o.Z.viloet[6],o.Z.gray[5],o.Z.viloet[5],o.Z.viloet[7],o.Z.gray[2]),y=r.default.div.withConfig({displayName:"PostTemplate__FooterContainer",componentId:"sc-1y3rc8p-6"})(["width:100%;"]),b={h2:e=>c.createElement("div",{className:"h2-div"},c.createElement("h2",e)),code:h.Z};function _(e){let{data:t,children:n,location:a,pageContext:l}=e;const r=(0,c.useMemo)((()=>a.pathname.includes("/en/")?"en":"ko"),[a.pathname]);return c.createElement(v,null,c.createElement(k,null,c.createElement(g,null,c.createElement(S,null,t.mdx.frontmatter.title),c.createElement(C,null,c.createElement("time",{dateTime:t.mdx.frontmatter.created_at},(0,s.Z)(t.mdx.frontmatter.created_at)),t.mdx.frontmatter.updated_at&&c.createElement("time",{dateTime:t.mdx.frontmatter.updated_at},"ko"===r?"수정: ":"edited at ",(0,s.Z)(t.mdx.frontmatter.updated_at))),c.createElement(x,null,c.createElement(i.Z,{components:b},n)),c.createElement(u.Z,{prev:l.prev,next:l.next,lang:r}))),c.createElement(y,null,c.createElement(d.Z,null)))}function w(e){return c.createElement(_,e,c.createElement(l.Z,e))}const H=e=>{let{data:t}=e;return c.createElement(p.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.description,pathname:t.mdx.fields.slug,image:t.mdx.frontmatter.thumbnail.childImageSharp.fixed.src,created_at:t.mdx.frontmatter.created_at,updated_at:t.mdx.frontmatter.updated_at})};a()}catch(f){a(f)}}))}}]);
//# sourceMappingURL=component---src-components-post-post-template-tsx-content-file-path-contents-posts-ko-2023-11-data-structure-stack-mdx-ea90200fdf95addeeba7.js.map