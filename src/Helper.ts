import { flow } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as Types from 'Helper.type';
import { JSX } from 'solid-js';

export const getEvent = <T, E extends Event>(
  event: Parameters<JSX.EventHandler<T, E>>[0]
): O.Option<Types.HelperEvent> => {
  switch (event.type) {
    case 'input':
      return O.some({
        _tag: 'InputElementInputEvent',
        event: event as unknown as Types.InputElementInputEvent['event'],
      });

    default:
      return O.some({ _tag: 'Event', event });
  }
};

export const eventToCurrentTargetValue = (
  event: Types.HelperEvent
): O.Option<string> => {
  switch (event._tag) {
    case 'InputElementInputEvent':
      return O.some(event.event.currentTarget.value);

    default:
      return O.none;
  }
};

export const pickCurrentTargetValue = flow(
  getEvent,
  O.chain(eventToCurrentTargetValue)
);
