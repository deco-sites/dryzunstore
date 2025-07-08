import type { AnalyticsEvent } from "apps/commerce/types.ts";
import { scriptAsDataURI } from "apps/utils/dataURI.ts";


export const sendEvent = <E extends AnalyticsEvent>(event: E) => {
  const doSend = globalThis.window.DECO_SITES_STD && globalThis.window.DECO_SITES_STD.sendAnalyticsEvent;

  console.log("######### globalThis.window.DECO_SITES_STD", globalThis.window.DECO_SITES_STD);
  console.log("######### globalThis.window.DECO_SITES_STD.sendAnalyticsEvent", globalThis.window.DECO_SITES_STD.sendAnalyticsEvent);

  console.log("######## sendEvent", event);

  if (typeof doSend === "function") {
    console.log("######## sendEvent", event);
    return doSend(event);
  }

  console.info(
    "Cannot find Analytics section in your page. Press `.` to add Analytics and supress this warning",
  );
};
/**
 * This function is usefull for sending events on click. Works with both Server and Islands components
 */
export const SendEventOnClick = <E extends AnalyticsEvent>({ event, id }: {
  event: E;
  id: string;
}) => (
  <script
    defer
    src={scriptAsDataURI(
      (id: string, event: AnalyticsEvent) => {
        const elem = document.getElementById(id);

        if (!elem) {
          return console.warn(
            `Could not find element ${id}. Click event will not be send. This will cause loss in analytics`,
          );
        }

        elem.addEventListener("click", () => {
          globalThis.window.DECO.events.dispatch(event);
        });
      },
      id,
      event,
    )}
  />
);

export const SendEventOnView = <E extends AnalyticsEvent>(
  { event, id }: { event: E; id: string },
) => (
  <script
    defer
    src={scriptAsDataURI(
      (id: string, event: E) => {
        const elem = document.getElementById(id);

        console.log("######### SendEventOnView", { id, event, elem });

        if (!elem) {
          return console.warn(
            `Could not find element ${id}. Click event will not be send. This will cause loss in analytics`,
          );
        }

        const observer = new IntersectionObserver((items) => {
          for (const item of items) {
            if (!item.isIntersecting) continue;

            console.log("######### IntersectionObserver", { id, event, elem, items });

            globalThis.window.DECO.events.dispatch(event);
            observer.unobserve(elem);
          }
        });

        observer.observe(elem);
      },
      id,
      event,
    )}
  />
);


export const SendEventOnLoad = <E extends AnalyticsEvent>(
  { event, id }: { event: E; id: string },
) => (
  console.log("######### SendEventOnLoad", { event, id }),

  <script
    dangerouslySetInnerHTML={{
      __html: `addEventListener("load", () => (${sendEvent})(${
        JSON.stringify(event)
      }))`,
    }}
  />
);
