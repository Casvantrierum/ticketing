import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@casvt-ticketing/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
