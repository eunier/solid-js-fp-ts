import * as Types from 'Helper.type';
import { JSX } from 'solid-js';

const getEvent = <T, E extends Event>(
  event: Parameters<JSX.EventHandler<T, E>>[0]
): Types.HelperEvent => {
  switch (event.type) {
    case 'input':
      return {
        _tag: 'InputElementInputEvent',
        event: event as unknown as Types.InputElementInputEvent['event'],
      };

    default:
      return { _tag: 'Event', event };
  }
};
