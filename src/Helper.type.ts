import { JSX } from 'solid-js';

export type InputElementInputEvent = {
  _tag: 'InputElementInputEvent';
  event: Parameters<JSX.EventHandler<HTMLInputElement, InputEvent>>[0];
};

export type HelperEvent =
  | InputElementInputEvent
  | { _tag: 'Event'; event: Event };
