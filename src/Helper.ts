import * as Types from 'Helper.type';
import { JSX } from 'solid-js';

const getEvent = <T, E extends Event>(
  e: Parameters<JSX.EventHandler<T, E>>[0]
): Types.HelperEvent => {
  switch (e.type) {
    case 'input':
      return {
        _tag: 'InputElementInputEvent',
        event: e as unknown as Types.InputElementInputEvent['event'],
      };

    default:
      return { _tag: 'Event', event: e };
  }
};
