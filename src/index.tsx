export type { ColorfulButtonProps } from './components/colorful-button';
export { default as ColorfulButton } from './components/colorful-button';

export type { ColorfulInputProps } from './components/colorful-input';
export { default as ColorfulInput } from './components/colorful-input';

export type { MyRenderSchemaProps } from './components/my-render-schema';
export { default as MyRenderSchema } from './components/my-render-schema';

const bizCssPrefix = 'bizpack';

export {
  bizCssPrefix
}


// 新增 ProForm 和
import {
  ProForm,
  MyProForm,
  ProFormInput,
  ProFormNumberInput,
  ProFormSelect,
  ProFormDatePicker,
} from './components/form';

export type {
  ProFormProps,
  MyProFormProps,
  ProFormInputProps,
  ProFormNumberInputProps,
  ProFormSelectProps,
  ProFormDatePickerProps,
} from './components/form';

export { ProForm, MyProForm, ProFormInput, ProFormNumberInput, ProFormSelect, ProFormDatePicker };
