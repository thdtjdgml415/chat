## FSD의 주요 개념

    1.	Layers(계층):
    •	App: 애플리케이션의 초기화와 설정을 담당합니다. 글로벌 스타일, 라우팅, 상태 관리 설정 등이 포함됩니다.
    •	Process: 애플리케이션의 비즈니스 로직을 정의합니다. 사용자 인증, 데이터 가져오기 등 애플리케이션의 전체적인 흐름을 관리하는 로직을 포함합니다.
    •	Page: 개별 페이지를 정의합니다. 각각의 페이지는 특정 경로와 연결되며, 페이지 내부에서 필요한 레이아웃과 UI 구성 요소를 포함합니다.
    •	Widget: 여러 페이지에서 재사용할 수 있는 UI 구성 요소를 정의합니다. 예를 들어, 네비게이션 바, 사이드바, 푸터 등이 있습니다.
    •	Feature: 특정 기능을 담당하는 독립적인 모듈입니다. 예를 들어, 사용자 프로필 관리, 검색 기능 등이 있습니다.
    •	Entity: 도메인 모델을 정의합니다. 예를 들어, 사용자, 제품, 주문 등의 데이터 모델을 정의합니다.
    •	Shared: 여러 계층에서 재사용할 수 있는 유틸리티 함수, 스타일, 타입 등을 정의합니다.

    2. Slice(슬라이스):
    • 각 계층을 수직으로 나누어 특정 도메인이나 기능에 대한 코드를 그룹화합니다. 예를 들어, user 슬라이스는 사용자와 관련된 모든 코드를 포함합니다.

"components": "@/components",
