declare module 'react-native-keyboard-aware-scrollview' {
  // ts 구현이 모르겠는 경우 라이브러리로 대체하기 전 코드를 참고하여 구현
  import * as React from 'react';
  import {Constructor, ViewProps} from 'react-native';

  class KeyboardAwareScrollViewComponent extends React.Component<ViewProps> {}
  const KeyboardAwareScrollViewBase: KeyboardAwareScrollViewComponent &
    Constructor<any>;
  class KeyboardAwareScrollView extends KeyboardAwareScrollViewComponent {}
  export {KeyboardAwareScrollView};
}
