import {
  require_react_dom
} from "./chunk-TNTPHDQH.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react2 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react2.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react2.useCallback)((...args) => {
    const f20 = ref.current;
    return f20 === null || f20 === void 0 ? void 0 : f20(...args);
  }, []);
}

// node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useId.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react4 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react4.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = (0, import_react4.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled2 = false) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react4.useRef)(null);
  if (ref.current === null && !isDisabled2) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react4.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react4.default).useId();
  let [didSSR] = (0, import_react4.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react4.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react4.default)["useSyncExternalStore"] === "function") return (0, import_react4.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react4.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/useId.mjs
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}

// node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}

// node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};

// node_modules/clsx/dist/clsx.mjs
function r(e7) {
  var t12, f20, n13 = "";
  if ("string" == typeof e7 || "number" == typeof e7) n13 += e7;
  else if ("object" == typeof e7) if (Array.isArray(e7)) {
    var o19 = e7.length;
    for (t12 = 0; t12 < o19; t12++) e7[t12] && (f20 = r(e7[t12])) && (n13 && (n13 += " "), n13 += f20);
  } else for (f20 in e7) e7[f20] && (n13 && (n13 += " "), n13 += f20);
  return n13;
}
function clsx() {
  for (var e7, t12, f20 = 0, n13 = "", o19 = arguments.length; f20 < o19; f20++) (e7 = arguments[f20]) && (t12 = r(e7)) && (n13 && (n13 += " "), n13 += t12);
  return n13;
}
var clsx_default = clsx;

// node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i15 = 1; i15 < args.length; i15++) {
    let props = args[i15];
    for (let key in props) {
      let a18 = result[key];
      let b6 = props[key];
      if (typeof a18 === "function" && typeof b6 === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a18, b6);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a18 === "string" && typeof b6 === "string") result[key] = (0, clsx_default)(a18, b6);
      else if (key === "id" && a18 && b6) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a18, b6);
      else result[key] = b6 !== void 0 ? b6 : a18;
    }
  }
  return result;
}

// node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e7) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re5) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re5.test(brand.brand))) || re5.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re5) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re5.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}

// node_modules/@react-aria/utils/dist/openLink.mjs
var import_react6 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext = (0, import_react6.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement) open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}

// node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e7) => {
    if (!isTransitionEvent(e7) || !e7.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e7.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e7.target, transitions);
      e7.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e7.propertyName);
  };
  let onTransitionEnd = (e7) => {
    if (!isTransitionEvent(e7) || !e7.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e7.target);
    if (!properties) return;
    properties.delete(e7.propertyName);
    if (properties.size === 0) {
      e7.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e7.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

// node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react8 = __toESM(require_react(), 1);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react8.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react8.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react8.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react9 = __toESM(require_react(), 1);
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useMemo)(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (typeof forwardedRef === "function") forwardedRef(value);
      else if (forwardedRef) forwardedRef.current = value;
    }
  }), [
    forwardedRef
  ]);
}

// node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react12 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state !== "disabled") return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/interactions/dist/context.mjs
var import_react18 = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react18.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get) return descriptor.get.call(receiver);
  return descriptor.value;
}

// node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set) descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}

// node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react19 = __toESM(require_react(), 1);
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react19.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled: isDisabled2,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _5,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react19.useState)(false);
  let ref = (0, import_react19.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2 || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled2) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    if (shouldCancelOnPointerExit) cancel(e7);
  });
  let pressProps = (0, import_react19.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e7) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e7.nativeEvent, e7.currentTarget) && e7.currentTarget.contains(e7.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e7.target, e7.key)) e7.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e7.repeat) {
            state.target = e7.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e7, "keyboard");
            let originalTarget = e7.currentTarget;
            let pressUp = (e8) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e8, originalTarget) && !e8.repeat && originalTarget.contains(e8.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e8), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e7.stopPropagation();
          if (e7.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e7.key, e7.nativeEvent);
        } else if (e7.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e7) {
        if (e7 && !e7.currentTarget.contains(e7.target)) return;
        if (e7 && e7.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled2) e7.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e7.nativeEvent))) {
            if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
            let stopPressStart = triggerPressStart(e7, "virtual");
            let stopPressUp = triggerPressUp(e7, "virtual");
            let stopPressEnd = triggerPressEnd(e7, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation) e7.stopPropagation();
        }
      }
    };
    let onKeyUp = (e7) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e7, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e7.target, e7.key)) e7.preventDefault();
        let target = e7.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e7.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e7[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e7[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e7, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e7.key);
      } else if (e7.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e7) => {
        if (e7.button !== 0 || !e7.currentTarget.contains(e7.target)) return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e7.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget)) e7.preventDefault();
        state.pointerType = e7.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e7.pointerId;
          state.target = e7.currentTarget;
          if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e7, state.pointerType);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e7.stopPropagation();
      };
      pressProps2.onMouseDown = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        if (e7.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget)) e7.preventDefault();
          e7.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e7) => {
        if (!e7.currentTarget.contains(e7.target) || state.pointerType === "virtual") return;
        if (e7.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e7, e7.currentTarget)) triggerPressUp(e7, state.pointerType || e7.pointerType);
      };
      let onPointerMove = (e7) => {
        if (e7.pointerId !== state.activePointerId) return;
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e7, state.target)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
          }
        } else if (state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
          cancelOnPointerExit(e7);
        }
      };
      let onPointerUp = (e7) => {
        if (e7.pointerId === state.activePointerId && state.isPressed && e7.button === 0 && state.target) {
          if ($f6c31cce2adf654f$var$isOverTarget(e7, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
      };
      let onPointerCancel = (e7) => {
        cancel(e7);
      };
      pressProps2.onDragStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        cancel(e7);
      };
    } else {
      pressProps2.onMouseDown = (e7) => {
        if (e7.button !== 0 || !e7.currentTarget.contains(e7.target)) return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget)) e7.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e7.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e7.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e7.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
        let shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        if (shouldStopPropagation) e7.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        }
        if (shouldStopPropagation) e7.stopPropagation();
      };
      pressProps2.onMouseLeave = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
          cancelOnPointerExit(e7);
        }
        if (shouldStopPropagation) e7.stopPropagation();
      };
      pressProps2.onMouseUp = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        if (!state.ignoreEmulatedMouseEvents && e7.button === 0) triggerPressUp(e7, state.pointerType || "mouse");
      };
      let onMouseUp = (e7) => {
        if (e7.button !== 0) return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e7, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e7.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e7.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
        if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        if (shouldStopPropagation) e7.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        if (!state.isPressed) {
          e7.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e7.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e7.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart(e7, state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
          cancelOnPointerExit(e7);
        }
        if (shouldStopPropagation) e7.stopPropagation();
      };
      pressProps2.onTouchEnd = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        if (!state.isPressed) {
          e7.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e7.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e7.currentTarget) && state.pointerType != null) {
          triggerPressUp(e7, state.pointerType);
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
        if (shouldStopPropagation) e7.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        e7.stopPropagation();
        if (state.isPressed) cancel(e7);
      };
      let onScroll = (e7) => {
        if (state.isPressed && e7.target.contains(state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };
      pressProps2.onDragStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target)) return;
        cancel(e7);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled2,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  (0, import_react19.useEffect)(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0) return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i15 = 0; i15 < changedTouches.length; i15++) {
    const touch = changedTouches[i15];
    if (touch.identifier === pointerId) return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e7) {
  return {
    currentTarget: target,
    shiftKey: e7.shiftKey,
    ctrlKey: e7.ctrlKey,
    metaKey: e7.metaKey,
    altKey: e7.altKey
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0) offsetX = point.width / 2;
  else if (point.radiusX !== void 0) offsetX = point.radiusX;
  if (point.height !== void 0) offsetY = point.height / 2;
  else if (point.radiusY !== void 0) offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a18, b6) {
  if (a18.left > b6.right || b6.left > a18.right) return false;
  if (a18.top > b6.bottom || b6.top > a18.bottom) return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
  return true;
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/interactions/dist/Pressable.mjs
var import_react20 = __toESM(require_react(), 1);
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = (0, import_react20.default).forwardRef(({ children, ...props }, ref) => {
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    ...props,
    ref
  });
  let child = (0, import_react20.default).Children.only(children);
  return (0, import_react20.default).cloneElement(
    child,
    // @ts-ignore
    {
      ref,
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(child.props, pressProps)
    }
  );
});

// node_modules/@react-aria/interactions/dist/PressResponder.mjs
var import_react21 = __toESM(require_react(), 1);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = (0, import_react21.default).forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react21.useRef)(false);
  let prevContext = (0, import_react21.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
  let context = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(prevContext || {}, {
    ...props,
    ref,
    register() {
      isRegistered.current = true;
      if (prevContext) prevContext.register();
    }
  });
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(prevContext, ref);
  (0, import_react21.useEffect)(() => {
    if (!isRegistered.current) {
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
      isRegistered.current = true;
    }
  }, []);
  return (0, import_react21.default).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
    value: context
  }, children);
});

// node_modules/@react-aria/interactions/dist/utils.mjs
var import_react22 = __toESM(require_react(), 1);
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react22.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e7);
  });
  return (0, import_react22.useCallback)((e7) => {
    if (e7.target instanceof HTMLButtonElement || e7.target instanceof HTMLInputElement || e7.target instanceof HTMLTextAreaElement || e7.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e7.target;
      let onBlurHandler = (e8) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e8));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}

// node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react23 = __toESM(require_react(), 1);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled: isDisabled2, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react23.useCallback)((e7) => {
    if (e7.target === e7.currentTarget) {
      if (onBlurProp) onBlurProp(e7);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react23.useCallback)((e7) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.target);
    if (e7.target === e7.currentTarget && ownerDocument.activeElement === e7.target) {
      if (onFocusProp) onFocusProp(e7);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e7);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled2 && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled2 && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react24 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e7) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e7);
}
function $507fabe10e71c6fb$var$isValidKey(e7) {
  return !(e7.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e7.altKey || e7.ctrlKey || e7.key === "Control" || e7.key === "Shift" || e7.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e7) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e7)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e7);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e7) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e7.type === "mousedown" || e7.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e7);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e7) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e7)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e7) {
  if (e7.target === window || e7.target === document) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e7);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e7) {
  var _e_target;
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e7 === null || e7 === void 0 ? void 0 : (_e_target = e7.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLTextAreaElement || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLElement && (e7 === null || e7 === void 0 ? void 0 : e7.target.isContentEditable);
  return !(isTextInput && modality === "keyboard" && e7 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e7.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react24.useEffect)(() => {
    let handler = (modality, e7) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e7)) return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react25 = __toESM(require_react(), 1);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled: isDisabled2, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react25.useRef)({
    isFocusWithin: false
  });
  let onBlur = (0, import_react25.useCallback)((e7) => {
    if (state.current.isFocusWithin && !e7.currentTarget.contains(e7.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin) onBlurWithin(e7);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react25.useCallback)((e7) => {
    if (!state.current.isFocusWithin && document.activeElement === e7.target) {
      if (onFocusWithin) onFocusWithin(e7);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e7);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled2) return {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react26 = __toESM(require_react(), 1);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e7) {
  if (e7.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined") return;
  if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled: isDisabled2 } = props;
  let [isHovered, setHovered] = (0, import_react26.useState)(false);
  let state = (0, import_react26.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react26.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps, triggerHoverEnd } = (0, import_react26.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled2 || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered) return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e7) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e7.pointerType === "mouse") return;
        triggerHoverStart(e7, e7.pointerType);
      };
      hoverProps2.onPointerLeave = (e7) => {
        if (!isDisabled2 && e7.currentTarget.contains(e7.target)) triggerHoverEnd2(e7, e7.pointerType);
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e7) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e7, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e7) => {
        if (!isDisabled2 && e7.currentTarget.contains(e7.target)) triggerHoverEnd2(e7, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled2,
    state
  ]);
  (0, import_react26.useEffect)(() => {
    if (isDisabled2) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled2
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@react-aria/interactions/dist/useInteractOutside.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useMove.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useScrollWheel.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useLongPress.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/FocusScope.mjs
var import_react31 = __toESM(require_react(), 1);
var $9bf71ea28793e738$var$FocusContext = (0, import_react31.default).createContext(null);
var $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element) return false;
  if (!scope) return false;
  return scope.some((node) => node.contains(element));
}
var $9bf71ea28793e738$var$Tree = class _$9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode) return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore) node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null) return;
    let node = this.fastMap.get(scopeRef);
    if (!node) return;
    let parentNode = node.parent;
    for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null) yield node;
    if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new _$9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
};
var $9bf71ea28793e738$var$TreeNode = class {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
};
var $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();

// node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react32 = __toESM(require_react(), 1);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react32.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react32.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react32.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react32.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react32.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/@react-aria/focus/dist/FocusRing.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/useFocusable.mjs
var import_react34 = __toESM(require_react(), 1);
var $e6afbd83fe6ebbd2$var$FocusableContext = (0, import_react34.default).createContext(null);
function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
  let { children, ...otherProps } = props;
  let objRef = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let context = {
    ...otherProps,
    ref: objRef
  };
  return (0, import_react34.default).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
}
var $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = (0, import_react34.default).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);

// node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var import_react35 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/button/button.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t12, e7, n13) => e7 in t12 ? i(t12, e7, { enumerable: true, configurable: true, writable: true, value: n13 }) : t12[e7] = n13;
var r2 = (t12, e7, n13) => (d(t12, typeof e7 != "symbol" ? e7 + "" : e7, n13), n13);
var o = class {
  constructor() {
    r2(this, "current", this.detect());
    r2(this, "handoffState", "pending");
    r2(this, "currentId", 0);
  }
  set(e7) {
    this.current !== e7 && (this.handoffState = "pending", this.currentId = 0, this.current = e7);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/utils/owner.js
function u(r17) {
  return s.isServer ? null : r17 instanceof Node ? r17.ownerDocument : r17 != null && r17.hasOwnProperty("current") && r17.current instanceof Node ? r17.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react36 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e7) {
  typeof queueMicrotask == "function" ? queueMicrotask(e7) : Promise.resolve().then(e7).catch((o19) => setTimeout(() => {
    throw o19;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n13 = [], r17 = { addEventListener(e7, t12, s14, a18) {
    return e7.addEventListener(t12, s14, a18), r17.add(() => e7.removeEventListener(t12, s14, a18));
  }, requestAnimationFrame(...e7) {
    let t12 = requestAnimationFrame(...e7);
    return r17.add(() => cancelAnimationFrame(t12));
  }, nextFrame(...e7) {
    return r17.requestAnimationFrame(() => r17.requestAnimationFrame(...e7));
  }, setTimeout(...e7) {
    let t12 = setTimeout(...e7);
    return r17.add(() => clearTimeout(t12));
  }, microTask(...e7) {
    let t12 = { current: true };
    return t(() => {
      t12.current && e7[0]();
    }), r17.add(() => {
      t12.current = false;
    });
  }, style(e7, t12, s14) {
    let a18 = e7.style.getPropertyValue(t12);
    return Object.assign(e7.style, { [t12]: s14 }), this.add(() => {
      Object.assign(e7.style, { [t12]: a18 });
    });
  }, group(e7) {
    let t12 = o2();
    return e7(t12), this.add(() => t12.dispose());
  }, add(e7) {
    return n13.includes(e7) || n13.push(e7), () => {
      let t12 = n13.indexOf(e7);
      if (t12 >= 0) for (let s14 of n13.splice(t12, 1)) s14();
    };
  }, dispose() {
    for (let e7 of n13.splice(0)) e7();
  } };
  return r17;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e7] = (0, import_react36.useState)(o2);
  return (0, import_react36.useEffect)(() => () => e7.dispose(), [e7]), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react39 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react38 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react37 = __toESM(require_react(), 1);
var n = (e7, t12) => {
  s.isServer ? (0, import_react37.useEffect)(e7, t12) : (0, import_react37.useLayoutEffect)(e7, t12);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e7) {
  let r17 = (0, import_react38.useRef)(e7);
  return n(() => {
    r17.current = e7;
  }, [e7]), r17;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t12) {
  let e7 = s3(t12);
  return import_react39.default.useCallback((...r17) => e7.current(...r17), [e7]);
};

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
function E(e7) {
  let t12 = e7.width / 2, n13 = e7.height / 2;
  return { top: e7.clientY - n13, right: e7.clientX + t12, bottom: e7.clientY + n13, left: e7.clientX - t12 };
}
function P(e7, t12) {
  return !(!e7 || !t12 || e7.right < t12.left || e7.left > t12.right || e7.bottom < t12.top || e7.top > t12.bottom);
}
function w({ disabled: e7 = false } = {}) {
  let t12 = (0, import_react40.useRef)(null), [n13, l16] = (0, import_react40.useState)(false), r17 = p(), o19 = o4(() => {
    t12.current = null, l16(false), r17.dispose();
  }), f20 = o4((s14) => {
    if (r17.dispose(), t12.current === null) {
      t12.current = s14.currentTarget, l16(true);
      {
        let i15 = u(s14.currentTarget);
        r17.addEventListener(i15, "pointerup", o19, false), r17.addEventListener(i15, "pointermove", (c14) => {
          if (t12.current) {
            let p7 = E(c14);
            l16(P(p7, t12.current.getBoundingClientRect()));
          }
        }, false), r17.addEventListener(i15, "pointercancel", o19, false);
      }
    }
  });
  return { pressed: n13, pressProps: e7 ? {} : { onPointerDown: f20, onPointerUp: o19, onClick: o19 } };
}

// node_modules/@headlessui/react/dist/internal/disabled.js
var import_react41 = __toESM(require_react(), 1);
var e = (0, import_react41.createContext)(void 0);
function a3() {
  return (0, import_react41.useContext)(e);
}
function l({ value: t12, children: o19 }) {
  return import_react41.default.createElement(e.Provider, { value: t12 }, o19);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react42 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r17) {
  return Array.from(new Set(r17.flatMap((n13) => typeof n13 == "string" ? n13.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r17, n13, ...a18) {
  if (r17 in n13) {
    let e7 = n13[r17];
    return typeof e7 == "function" ? e7(...a18) : e7;
  }
  let t12 = new Error(`Tried to handle "${r17}" but there is no handler defined. Only defined handlers are: ${Object.keys(n13).map((e7) => `"${e7}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t12, u2), t12;
}

// node_modules/@headlessui/react/dist/utils/render.js
var M = ((a18) => (a18[a18.None = 0] = "None", a18[a18.RenderStrategy = 1] = "RenderStrategy", a18[a18.Static = 2] = "Static", a18))(M || {});
var O = ((e7) => (e7[e7.Unmount = 0] = "Unmount", e7[e7.Hidden = 1] = "Hidden", e7))(O || {});
function H({ ourProps: r17, theirProps: n13, slot: e7, defaultTag: a18, features: s14, visible: t12 = true, name: l16, mergeRefs: i15 }) {
  i15 = i15 != null ? i15 : A;
  let o19 = N(n13, r17);
  if (t12) return b(o19, e7, a18, l16, i15);
  let y10 = s14 != null ? s14 : 0;
  if (y10 & 2) {
    let { static: f20 = false, ...u17 } = o19;
    if (f20) return b(u17, e7, a18, l16, i15);
  }
  if (y10 & 1) {
    let { unmount: f20 = true, ...u17 } = o19;
    return u2(f20 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return b({ ...u17, hidden: true, style: { display: "none" } }, e7, a18, l16, i15);
    } });
  }
  return b(o19, e7, a18, l16, i15);
}
function b(r17, n13 = {}, e7, a18, s14) {
  let { as: t12 = e7, children: l16, refName: i15 = "ref", ...o19 } = h(r17, ["unmount", "static"]), y10 = r17.ref !== void 0 ? { [i15]: r17.ref } : {}, f20 = typeof l16 == "function" ? l16(n13) : l16;
  "className" in o19 && o19.className && typeof o19.className == "function" && (o19.className = o19.className(n13)), o19["aria-labelledby"] && o19["aria-labelledby"] === o19.id && (o19["aria-labelledby"] = void 0);
  let u17 = {};
  if (n13) {
    let d12 = false, p7 = [];
    for (let [c14, T10] of Object.entries(n13)) typeof T10 == "boolean" && (d12 = true), T10 === true && p7.push(c14.replace(/([A-Z])/g, (g6) => `-${g6.toLowerCase()}`));
    if (d12) {
      u17["data-headlessui-state"] = p7.join(" ");
      for (let c14 of p7) u17[`data-${c14}`] = "";
    }
  }
  if (t12 === import_react42.Fragment && (Object.keys(m2(o19)).length > 0 || Object.keys(m2(u17)).length > 0)) if (!(0, import_react42.isValidElement)(f20) || Array.isArray(f20) && f20.length > 1) {
    if (Object.keys(m2(o19)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a18} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m2(o19)).concat(Object.keys(m2(u17))).map((d12) => `  - ${d12}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d12) => `  - ${d12}`).join(`
`)].join(`
`));
  } else {
    let d12 = f20.props, p7 = d12 == null ? void 0 : d12.className, c14 = typeof p7 == "function" ? (...F7) => t3(p7(...F7), o19.className) : t3(p7, o19.className), T10 = c14 ? { className: c14 } : {}, g6 = N(f20.props, m2(h(o19, ["ref"])));
    for (let F7 in u17) F7 in g6 && delete u17[F7];
    return (0, import_react42.cloneElement)(f20, Object.assign({}, g6, u17, y10, { ref: s14(f20.ref, y10.ref) }, T10));
  }
  return (0, import_react42.createElement)(t12, Object.assign({}, h(o19, ["ref"]), t12 !== import_react42.Fragment && y10, t12 !== import_react42.Fragment && u17), f20);
}
function I() {
  let r17 = (0, import_react42.useRef)([]), n13 = (0, import_react42.useCallback)((e7) => {
    for (let a18 of r17.current) a18 != null && (typeof a18 == "function" ? a18(e7) : a18.current = e7);
  }, []);
  return (...e7) => {
    if (!e7.every((a18) => a18 == null)) return r17.current = e7, n13;
  };
}
function A(...r17) {
  return r17.every((n13) => n13 == null) ? void 0 : (n13) => {
    for (let e7 of r17) e7 != null && (typeof e7 == "function" ? e7(n13) : e7.current = n13);
  };
}
function N(...r17) {
  var a18;
  if (r17.length === 0) return {};
  if (r17.length === 1) return r17[0];
  let n13 = {}, e7 = {};
  for (let s14 of r17) for (let t12 in s14) t12.startsWith("on") && typeof s14[t12] == "function" ? ((a18 = e7[t12]) != null || (e7[t12] = []), e7[t12].push(s14[t12])) : n13[t12] = s14[t12];
  if (n13.disabled || n13["aria-disabled"]) for (let s14 in e7) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s14) && (e7[s14] = [(t12) => {
    var l16;
    return (l16 = t12 == null ? void 0 : t12.preventDefault) == null ? void 0 : l16.call(t12);
  }]);
  for (let s14 in e7) Object.assign(n13, { [s14](t12, ...l16) {
    let i15 = e7[s14];
    for (let o19 of i15) {
      if ((t12 instanceof Event || (t12 == null ? void 0 : t12.nativeEvent) instanceof Event) && t12.defaultPrevented) return;
      o19(t12, ...l16);
    }
  } });
  return n13;
}
function D(...r17) {
  var a18;
  if (r17.length === 0) return {};
  if (r17.length === 1) return r17[0];
  let n13 = {}, e7 = {};
  for (let s14 of r17) for (let t12 in s14) t12.startsWith("on") && typeof s14[t12] == "function" ? ((a18 = e7[t12]) != null || (e7[t12] = []), e7[t12].push(s14[t12])) : n13[t12] = s14[t12];
  for (let s14 in e7) Object.assign(n13, { [s14](...t12) {
    let l16 = e7[s14];
    for (let i15 of l16) i15 == null || i15(...t12);
  } });
  return n13;
}
function W(r17) {
  var n13;
  return Object.assign((0, import_react42.forwardRef)(r17), { displayName: (n13 = r17.displayName) != null ? n13 : r17.name });
}
function m2(r17) {
  let n13 = Object.assign({}, r17);
  for (let e7 in n13) n13[e7] === void 0 && delete n13[e7];
  return n13;
}
function h(r17, n13 = []) {
  let e7 = Object.assign({}, r17);
  for (let a18 of n13) a18 in e7 && delete e7[a18];
  return e7;
}

// node_modules/@headlessui/react/dist/components/button/button.js
var v2 = "button";
function E3(a18, u17) {
  var p7;
  let l16 = a3(), { disabled: e7 = l16 || false, autoFocus: t12 = false, ...o19 } = a18, { isFocusVisible: r17, focusProps: i15 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t12 }), { isHovered: s14, hoverProps: T10 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: n13, pressProps: f20 } = w({ disabled: e7 }), m12 = D({ ref: u17, type: (p7 = o19.type) != null ? p7 : "button", disabled: e7 || void 0, autoFocus: t12 }, i15, T10, f20), d12 = (0, import_react43.useMemo)(() => ({ disabled: e7, hover: s14, focus: r17, active: n13, autofocus: t12 }), [e7, s14, r17, n13, t12]);
  return H({ ourProps: m12, theirProps: o19, slot: d12, defaultTag: v2, name: "Button" });
}
var h2 = W(E3);

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var import_react52 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react44 = __toESM(require_react(), 1);
function T(l16, r17, c14) {
  let [i15, s14] = (0, import_react44.useState)(c14), e7 = l16 !== void 0, t12 = (0, import_react44.useRef)(e7), u17 = (0, import_react44.useRef)(false), d12 = (0, import_react44.useRef)(false);
  return e7 && !t12.current && !u17.current ? (u17.current = true, t12.current = e7, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e7 && t12.current && !d12.current && (d12.current = true, t12.current = e7, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e7 ? l16 : i15, o4((n13) => (e7 || s14(n13), r17 == null ? void 0 : r17(n13)))];
}

// node_modules/@headlessui/react/dist/hooks/use-default-value.js
var import_react45 = __toESM(require_react(), 1);
function l2(e7) {
  let [t12] = (0, import_react45.useState)(e7);
  return t12;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react46 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var import_react47 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/utils/form.js
function e2(i15 = {}, s14 = null, t12 = []) {
  for (let [r17, n13] of Object.entries(i15)) o6(t12, f3(s14, r17), n13);
  return t12;
}
function f3(i15, s14) {
  return i15 ? i15 + "[" + s14 + "]" : s14;
}
function o6(i15, s14, t12) {
  if (Array.isArray(t12)) for (let [r17, n13] of t12.entries()) o6(i15, f3(s14, r17.toString()), n13);
  else t12 instanceof Date ? i15.push([s14, t12.toISOString()]) : typeof t12 == "boolean" ? i15.push([s14, t12 ? "1" : "0"]) : typeof t12 == "string" ? i15.push([s14, t12]) : typeof t12 == "number" ? i15.push([s14, `${t12}`]) : t12 == null ? i15.push([s14, ""]) : e2(t12, s14, i15);
}
function p2(i15) {
  var t12, r17;
  let s14 = (t12 = i15 == null ? void 0 : i15.form) != null ? t12 : i15.closest("form");
  if (s14) {
    for (let n13 of s14.elements) if (n13 !== i15 && (n13.tagName === "INPUT" && n13.type === "submit" || n13.tagName === "BUTTON" && n13.type === "submit" || n13.nodeName === "INPUT" && n13.type === "image")) {
      n13.click();
      return;
    }
    (r17 = s14.requestSubmit) == null || r17.call(s14);
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "div";
var s4 = ((e7) => (e7[e7.None = 1] = "None", e7[e7.Focusable = 2] = "Focusable", e7[e7.Hidden = 4] = "Hidden", e7))(s4 || {});
function l3(t12, r17) {
  var n13;
  let { features: d12 = 1, ...e7 } = t12, o19 = { ref: r17, "aria-hidden": (d12 & 2) === 2 ? true : (n13 = e7["aria-hidden"]) != null ? n13 : void 0, hidden: (d12 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d12 & 4) === 4 && (d12 & 2) !== 2 && { display: "none" } } };
  return H({ ourProps: o19, theirProps: e7, slot: {}, defaultTag: a4, name: "Hidden" });
}
var T2 = W(l3);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var f4 = (0, import_react47.createContext)(null);
function W2(t12) {
  let [e7, r17] = (0, import_react47.useState)(null);
  return import_react47.default.createElement(f4.Provider, { value: { target: e7 } }, t12.children, import_react47.default.createElement(T2, { features: s4.Hidden, ref: r17 }));
}
function c2({ children: t12 }) {
  let e7 = (0, import_react47.useContext)(f4);
  if (!e7) return import_react47.default.createElement(import_react47.default.Fragment, null, t12);
  let { target: r17 } = e7;
  return r17 ? (0, import_react_dom.createPortal)(import_react47.default.createElement(import_react47.default.Fragment, null, t12), r17) : null;
}
function j2({ data: t12, form: e7, disabled: r17, onReset: n13, overrides: F7 }) {
  let [i15, a18] = (0, import_react47.useState)(null), p7 = p();
  return (0, import_react47.useEffect)(() => {
    if (n13 && i15) return p7.addEventListener(i15, "reset", n13);
  }, [i15, e7, n13]), import_react47.default.createElement(c2, null, import_react47.default.createElement(C, { setForm: a18, formId: e7 }), e2(t12).map(([s14, v6]) => import_react47.default.createElement(T2, { features: s4.Hidden, ...m2({ key: s14, as: "input", type: "hidden", hidden: true, readOnly: true, form: e7, disabled: r17, name: s14, value: v6, ...F7 }) })));
}
function C({ setForm: t12, formId: e7 }) {
  return (0, import_react47.useEffect)(() => {
    if (e7) {
      let r17 = document.getElementById(e7);
      r17 && t12(r17);
    }
  }, [t12, e7]), e7 ? null : import_react47.default.createElement(T2, { features: s4.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r17) => {
    if (!r17) return;
    let n13 = r17.closest("form");
    n13 && t12(n13);
  } });
}

// node_modules/@headlessui/react/dist/internal/id.js
var import_react48 = __toESM(require_react(), 1);
var e3 = (0, import_react48.createContext)(void 0);
function u5() {
  return (0, import_react48.useContext)(e3);
}
function f5({ id: t12, children: r17 }) {
  return import_react48.default.createElement(e3.Provider, { value: t12 }, r17);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r5(n13) {
  let e7 = n13.parentElement, l16 = null;
  for (; e7 && !(e7 instanceof HTMLFieldSetElement); ) e7 instanceof HTMLLegendElement && (l16 = e7), e7 = e7.parentElement;
  let t12 = (e7 == null ? void 0 : e7.getAttribute("disabled")) === "";
  return t12 && i4(l16) ? false : t12;
}
function i4(n13) {
  if (!n13) return false;
  let e7 = n13.previousElementSibling;
  for (; e7 !== null; ) {
    if (e7 instanceof HTMLLegendElement) return false;
    e7 = e7.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react50 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react49 = __toESM(require_react(), 1);
var u6 = Symbol();
function T3(t12, n13 = true) {
  return Object.assign(t12, { [u6]: n13 });
}
function y(...t12) {
  let n13 = (0, import_react49.useRef)(t12);
  (0, import_react49.useEffect)(() => {
    n13.current = t12;
  }, [t12]);
  let c14 = o4((e7) => {
    for (let o19 of n13.current) o19 != null && (typeof o19 == "function" ? o19(e7) : o19.current = e7);
  });
  return t12.every((e7) => e7 == null || (e7 == null ? void 0 : e7[u6])) ? void 0 : c14;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var a5 = (0, import_react50.createContext)(null);
a5.displayName = "DescriptionContext";
function f6() {
  let r17 = (0, import_react50.useContext)(a5);
  if (r17 === null) {
    let e7 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e7, f6), e7;
  }
  return r17;
}
function G() {
  var r17, e7;
  return (e7 = (r17 = (0, import_react50.useContext)(a5)) == null ? void 0 : r17.value) != null ? e7 : void 0;
}
function U() {
  let [r17, e7] = (0, import_react50.useState)([]);
  return [r17.length > 0 ? r17.join(" ") : void 0, (0, import_react50.useMemo)(() => function(t12) {
    let i15 = o4((n13) => (e7((s14) => [...s14, n13]), () => e7((s14) => {
      let o19 = s14.slice(), p7 = o19.indexOf(n13);
      return p7 !== -1 && o19.splice(p7, 1), o19;
    }))), l16 = (0, import_react50.useMemo)(() => ({ register: i15, slot: t12.slot, name: t12.name, props: t12.props, value: t12.value }), [i15, t12.slot, t12.name, t12.props, t12.value]);
    return import_react50.default.createElement(a5.Provider, { value: l16 }, t12.children);
  }, [e7])];
}
var S2 = "p";
function C2(r17, e7) {
  let d12 = (0, import_react46.useId)(), t12 = a3(), { id: i15 = `headlessui-description-${d12}`, ...l16 } = r17, n13 = f6(), s14 = y(e7);
  n(() => n13.register(i15), [i15, n13.register]);
  let o19 = t12 || false, p7 = (0, import_react50.useMemo)(() => ({ ...n13.slot, disabled: o19 }), [n13.slot, o19]), D11 = { ref: s14, ...n13.props, id: i15 };
  return H({ ourProps: D11, theirProps: l16, slot: p7, defaultTag: S2, name: n13.name || "Description" });
}
var _ = W(C2);
var w3 = Object.assign(_, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r17) => (r17.Space = " ", r17.Enter = "Enter", r17.Escape = "Escape", r17.Backspace = "Backspace", r17.Delete = "Delete", r17.ArrowLeft = "ArrowLeft", r17.ArrowUp = "ArrowUp", r17.ArrowRight = "ArrowRight", r17.ArrowDown = "ArrowDown", r17.Home = "Home", r17.End = "End", r17.PageUp = "PageUp", r17.PageDown = "PageDown", r17.Tab = "Tab", r17))(o8 || {});

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react51 = __toESM(require_react(), 1);
var c4 = (0, import_react51.createContext)(null);
c4.displayName = "LabelContext";
function P5() {
  let r17 = (0, import_react51.useContext)(c4);
  if (r17 === null) {
    let l16 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l16, P5), l16;
  }
  return r17;
}
function I2(r17) {
  var a18, e7, o19;
  let l16 = (e7 = (a18 = (0, import_react51.useContext)(c4)) == null ? void 0 : a18.value) != null ? e7 : void 0;
  return ((o19 = r17 == null ? void 0 : r17.length) != null ? o19 : 0) > 0 ? [l16, ...r17].filter(Boolean).join(" ") : l16;
}
function z({ inherit: r17 = false } = {}) {
  let l16 = I2(), [a18, e7] = (0, import_react51.useState)([]), o19 = r17 ? [l16, ...a18].filter(Boolean) : a18;
  return [o19.length > 0 ? o19.join(" ") : void 0, (0, import_react51.useMemo)(() => function(t12) {
    let s14 = o4((i15) => (e7((p7) => [...p7, i15]), () => e7((p7) => {
      let u17 = p7.slice(), d12 = u17.indexOf(i15);
      return d12 !== -1 && u17.splice(d12, 1), u17;
    }))), m12 = (0, import_react51.useMemo)(() => ({ register: s14, slot: t12.slot, name: t12.name, props: t12.props, value: t12.value }), [s14, t12.slot, t12.name, t12.props, t12.value]);
    return import_react51.default.createElement(c4.Provider, { value: m12 }, t12.children);
  }, [e7])];
}
var N2 = "label";
function G2(r17, l16) {
  var y10;
  let a18 = (0, import_react46.useId)(), e7 = P5(), o19 = u5(), g6 = a3(), { id: t12 = `headlessui-label-${a18}`, htmlFor: s14 = o19 != null ? o19 : (y10 = e7.props) == null ? void 0 : y10.htmlFor, passive: m12 = false, ...i15 } = r17, p7 = y(l16);
  n(() => e7.register(t12), [t12, e7.register]);
  let u17 = o4((L8) => {
    let b6 = L8.currentTarget;
    if (b6 instanceof HTMLLabelElement && L8.preventDefault(), e7.props && "onClick" in e7.props && typeof e7.props.onClick == "function" && e7.props.onClick(L8), b6 instanceof HTMLLabelElement) {
      let n13 = document.getElementById(b6.htmlFor);
      if (n13) {
        let E11 = n13.getAttribute("disabled");
        if (E11 === "true" || E11 === "") return;
        let x7 = n13.getAttribute("aria-disabled");
        if (x7 === "true" || x7 === "") return;
        (n13 instanceof HTMLInputElement && (n13.type === "radio" || n13.type === "checkbox") || n13.role === "radio" || n13.role === "checkbox" || n13.role === "switch") && n13.click(), n13.focus({ preventScroll: true });
      }
    }
  }), d12 = g6 || false, C7 = (0, import_react51.useMemo)(() => ({ ...e7.slot, disabled: d12 }), [e7.slot, d12]), f20 = { ref: p7, ...e7.props, id: t12, htmlFor: s14, onClick: u17 };
  return m12 && ("onClick" in f20 && (delete f20.htmlFor, delete f20.onClick), "onClick" in i15 && delete i15.onClick), H({ ourProps: f20, theirProps: i15, slot: C7, defaultTag: s14 ? N2 : "div", name: e7.name || "Label" });
}
var U2 = W(G2);
var K = Object.assign(U2, {});

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var se = "span";
function ie(T10, h8) {
  let C7 = (0, import_react46.useId)(), k5 = u5(), x7 = a3(), { id: g6 = k5 || `headlessui-checkbox-${C7}`, disabled: e7 = x7 || false, autoFocus: s14 = false, checked: E11, defaultChecked: v6, onChange: P8, name: d12, value: D11, form: R8, indeterminate: n13 = false, ...A9 } = T10, r17 = l2(v6), [a18, t12] = T(E11, P8, r17 != null ? r17 : false), F7 = I2(), K4 = G(), _5 = p(), [p7, c14] = (0, import_react52.useState)(false), u17 = o4(() => {
    c14(true), t12 == null || t12(!a18), _5.nextFrame(() => {
      c14(false);
    });
  }), H10 = o4((o19) => {
    if (r5(o19.currentTarget)) return o19.preventDefault();
    o19.preventDefault(), u17();
  }), B4 = o4((o19) => {
    o19.key === o8.Space ? (o19.preventDefault(), u17()) : o19.key === o8.Enter && p2(o19.currentTarget);
  }), L8 = o4((o19) => o19.preventDefault()), { isFocusVisible: m12, focusProps: I7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: s14 }), { isHovered: f20, hoverProps: M8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: b6, pressProps: U4 } = w({ disabled: e7 }), O5 = D({ ref: h8, id: g6, role: "checkbox", "aria-checked": n13 ? "mixed" : a18 ? "true" : "false", "aria-labelledby": F7, "aria-describedby": K4, "aria-disabled": e7 ? true : void 0, indeterminate: n13 ? "true" : void 0, tabIndex: e7 ? void 0 : 0, onKeyUp: e7 ? void 0 : B4, onKeyPress: e7 ? void 0 : L8, onClick: e7 ? void 0 : H10 }, I7, M8, U4), X3 = (0, import_react52.useMemo)(() => ({ checked: a18, disabled: e7, hover: f20, focus: m12, active: b6, indeterminate: n13, changing: p7, autofocus: s14 }), [a18, n13, e7, f20, m12, b6, p7, s14]), G10 = (0, import_react52.useCallback)(() => {
    if (r17 !== void 0) return t12 == null ? void 0 : t12(r17);
  }, [t12, r17]);
  return import_react52.default.createElement(import_react52.default.Fragment, null, d12 != null && import_react52.default.createElement(j2, { disabled: e7, data: { [d12]: D11 || "on" }, overrides: { type: "checkbox", checked: a18 }, form: R8, onReset: G10 }), H({ ourProps: O5, theirProps: A9, slot: X3, defaultTag: se, name: "Checkbox" }));
}
var Re = W(ie);

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
var import_react54 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/close-provider.js
var import_react53 = __toESM(require_react(), 1);
var e4 = (0, import_react53.createContext)(() => {
});
function l5() {
  return (0, import_react53.useContext)(e4);
}
function u8({ value: o19, children: t12 }) {
  return import_react53.default.createElement(e4.Provider, { value: o19 }, t12);
}

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
function l6(t12, e7) {
  let o19 = l5();
  return import_react54.default.createElement(h2, { ref: e7, ...D({ onClick: o19 }, t12) });
}
var y2 = W(l6);

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts)))
      depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index3) => deps[index3] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts)))
      resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a18, b6) => Math.abs(a18 - b6) < 1;
var debounce = (fn, ms) => {
  let timeoutId2;
  return function(...args) {
    clearTimeout(timeoutId2);
    timeoutId2 = setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index3) => index3;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i15 = start; i15 <= end; i15++) {
    arr.push(i15);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (typeof ResizeObserver === "undefined") {
    return () => {
    };
  }
  const observer = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  let offset4 = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce(() => {
    cb(offset4, false);
  }, instance.options.isScrollingResetDelay);
  const createHandler = (isScrolling) => () => {
    offset4 = element[instance.options.horizontal ? "scrollLeft" : "scrollTop"];
    fallback();
    cb(offset4, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size4 = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size4;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset4, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset4 + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.measureElementCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        } else if (typeof ResizeObserver !== "undefined") {
          return _ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
              this._measureElement(entry.target, entry);
            });
          });
        } else {
          return null;
        }
      };
      return {
        disconnect: () => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.disconnect();
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined")
          delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        ...opts2
      };
    };
    this.notify = (force, sync) => {
      var _a, _b;
      const { startIndex, endIndex } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      };
      const range = this.calculateRange();
      if (force || startIndex !== (range == null ? void 0 : range.startIndex) || endIndex !== (range == null ? void 0 : range.endIndex)) {
        (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
      }
    };
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d12) => d12());
      this.unsubs = [];
      this.scrollElement = null;
    };
    this._didMount = () => {
      this.measureElementCache.forEach(this.observer.observe);
      return () => {
        this.observer.disconnect();
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      const scrollElement = this.options.getScrollElement();
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        this.scrollElement = scrollElement;
        this._scrollToOffset(this.scrollOffset, {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.notify(false, false);
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset4, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.scrollOffset < offset4 ? "forward" : "backward" : null;
            this.scrollOffset = offset4;
            const prevIsScrolling = this.isScrolling;
            this.isScrolling = isScrolling;
            this.notify(prevIsScrolling !== isScrolling, isScrolling);
          })
        );
      }
    };
    this.getSize = () => {
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (count2, paddingStart, scrollMargin, getItemKey) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey
        };
      },
      {
        key: false
      }
    );
    this.getFurthestMeasurement = (measurements, index3) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m12 = index3 - 1; m12 >= 0; m12--) {
        const measurement = measurements[m12];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a18, b6) => {
        if (a18.end === b6.end) {
          return a18.index - b6.index;
        }
        return a18.end - b6.end;
      })[0] : void 0;
    };
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: count2, paddingStart, scrollMargin, getItemKey }, itemSizeCache) => {
        const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min2);
        for (let i15 = min2; i15 < count2; i15++) {
          const key = getItemKey(i15);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i15 - 1] : this.getFurthestMeasurement(measurements, i15);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size4 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i15);
          const end = start + size4;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i15 % this.options.lanes;
          measurements[i15] = {
            index: i15,
            start,
            size: size4,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count2) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const item = this.measurementsCache[this.indexFromElement(node)];
      if (!item || !node.isConnected) {
        this.measureElementCache.forEach((cached, key) => {
          if (cached === node) {
            this.observer.unobserve(node);
            this.measureElementCache.delete(key);
          }
        });
        return;
      }
      const prevNode = this.measureElementCache.get(item.key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.measureElementCache.set(item.key, node);
      }
      const measuredItemSize = this.options.measureElement(node, entry, this);
      this.resizeItem(item, measuredItemSize);
    };
    this.resizeItem = (item, size4) => {
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size4 - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.scrollOffset + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.scrollOffset, {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size4));
        this.notify(true, false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k5 = 0, len = indexes.length; k5 < len; k5++) {
          const i15 = indexes[k5];
          const measurement = measurements[i15];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset4) => {
      const measurements = this.getMeasurements();
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index3) => notUndefined(measurements[index3]).start,
          offset4
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size4 = this.getSize();
      if (align === "auto") {
        if (toOffset <= this.scrollOffset) {
          align = "start";
        } else if (toOffset >= this.scrollOffset + size4) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size4;
      } else if (align === "center") {
        toOffset = toOffset - size4 / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - this.getSize();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index3, align = "auto") => {
      index3 = Math.max(0, Math.min(index3, this.options.count - 1));
      const measurement = notUndefined(this.getMeasurements()[index3]);
      if (align === "auto") {
        if (measurement.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (measurement.start <= this.scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [this.scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? measurement.end + this.options.scrollPaddingEnd : measurement.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.measureElementCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null) {
        clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index3, { align: initialAlign = "auto", behavior } = {}) => {
      index3 = Math.max(0, Math.min(index3, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const [toOffset, align] = this.getOffsetForIndex(index3, initialAlign);
      this._scrollToOffset(toOffset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode()) {
        this.scrollToIndexTimeoutId = setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.measureElementCache.has(
            this.options.getItemKey(index3)
          );
          if (elementInDOM) {
            const [toOffset2] = this.getOffsetForIndex(index3, align);
            if (!approxEqual(toOffset2, this.scrollOffset)) {
              this.scrollToIndex(index3, { align, behavior });
            }
          } else {
            this.scrollToIndex(index3, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.scrollOffset + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m12) => m12.end)
        );
      }
      return end - this.options.scrollMargin + this.options.paddingEnd;
    };
    this._scrollToOffset = (offset4, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset4, { behavior, adjustments }, this);
    };
    this.measure = () => {
      var _a, _b;
      this.itemSizeCache = /* @__PURE__ */ new Map();
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, false);
    };
    this.setOptions(opts);
    this.scrollRect = this.options.initialRect;
    this.scrollOffset = typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset;
    this.measurementsCache = this.options.initialMeasurementsCache;
    this.measurementsCache.forEach((item) => {
      this.itemSizeCache.set(item.key, item.size);
    });
    this.notify(false, false);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count2 = measurements.length - 1;
  const getOffset = (index3) => measurements[index3].start;
  const startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  const rerender = React.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom2.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  React.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react81 = __toESM(require_react(), 1);
var import_react_dom6 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
var import_react55 = __toESM(require_react(), 1);
function l7(e7, r17) {
  return e7 !== null && r17 !== null && typeof e7 == "object" && typeof r17 == "object" && "id" in e7 && "id" in r17 ? e7.id === r17.id : e7 === r17;
}
function u9(e7 = l7) {
  return (0, import_react55.useCallback)((r17, t12) => {
    if (typeof e7 == "string") {
      let o19 = e7;
      return (r17 == null ? void 0 : r17[o19]) === (t12 == null ? void 0 : t12[o19]);
    }
    return e7(r17, t12);
  }, [e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-element-size.js
var import_react56 = __toESM(require_react(), 1);
function s5(e7) {
  if (e7 === null) return { width: 0, height: 0 };
  let { width: n13, height: t12 } = e7.getBoundingClientRect();
  return { width: n13, height: t12 };
}
function f7(e7, n13 = false) {
  let t12 = e7 === null ? null : "current" in e7 ? e7.current : e7, [l16, u17] = (0, import_react56.useReducer)(() => ({}), {}), r17 = (0, import_react56.useMemo)(() => s5(t12), [t12, l16]);
  return n(() => {
    if (!t12) return;
    let i15 = new ResizeObserver(u17);
    return i15.observe(t12), () => {
      i15.disconnect();
    };
  }, [t12]), n13 ? { width: `${r17.width}px`, height: `${r17.height}px` } : r17;
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var import_react58 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/default-map.js
var a6 = class extends Map {
  constructor(t12) {
    super();
    this.factory = t12;
  }
  get(t12) {
    let e7 = super.get(t12);
    return e7 === void 0 && (e7 = this.factory(t12), this.set(t12, e7)), e7;
  }
};

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o19, r17) {
  let t12 = o19(), n13 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t12;
  }, subscribe(e7) {
    return n13.add(e7), () => n13.delete(e7);
  }, dispatch(e7, ...s14) {
    let i15 = r17[e7].call(t12, ...s14);
    i15 && (t12 = i15, n13.forEach((c14) => c14()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
var import_react57 = __toESM(require_react(), 1);
function o10(t12) {
  return (0, import_react57.useSyncExternalStore)(t12.subscribe, t12.getSnapshot, t12.getSnapshot);
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var p3 = new a6(() => a7(() => [], { ADD(r17) {
  return this.includes(r17) ? this : [...this, r17];
}, REMOVE(r17) {
  let e7 = this.indexOf(r17);
  if (e7 === -1) return this;
  let t12 = this.slice();
  return t12.splice(e7, 1), t12;
} }));
function x(r17, e7) {
  let t12 = p3.get(e7), i15 = (0, import_react58.useId)(), h8 = o10(t12);
  if (n(() => {
    if (r17) return t12.dispatch("ADD", i15), () => t12.dispatch("REMOVE", i15);
  }, [t12, r17]), !r17) return false;
  let s14 = h8.indexOf(i15), o19 = h8.length;
  return s14 === -1 && (s14 = o19, o19 += 1), s14 === o19 - 1;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f8 = /* @__PURE__ */ new Map();
var u10 = /* @__PURE__ */ new Map();
function h4(t12) {
  var e7;
  let r17 = (e7 = u10.get(t12)) != null ? e7 : 0;
  return u10.set(t12, r17 + 1), r17 !== 0 ? () => m5(t12) : (f8.set(t12, { "aria-hidden": t12.getAttribute("aria-hidden"), inert: t12.inert }), t12.setAttribute("aria-hidden", "true"), t12.inert = true, () => m5(t12));
}
function m5(t12) {
  var i15;
  let r17 = (i15 = u10.get(t12)) != null ? i15 : 1;
  if (r17 === 1 ? u10.delete(t12) : u10.set(t12, r17 - 1), r17 !== 1) return;
  let e7 = f8.get(t12);
  e7 && (e7["aria-hidden"] === null ? t12.removeAttribute("aria-hidden") : t12.setAttribute("aria-hidden", e7["aria-hidden"]), t12.inert = e7.inert, f8.delete(t12));
}
function y3(t12, { allowed: r17, disallowed: e7 } = {}) {
  let i15 = x(t12, "inert-others");
  n(() => {
    var d12, c14;
    if (!i15) return;
    let a18 = o2();
    for (let n13 of (d12 = e7 == null ? void 0 : e7()) != null ? d12 : []) n13 && a18.add(h4(n13));
    let s14 = (c14 = r17 == null ? void 0 : r17()) != null ? c14 : [];
    for (let n13 of s14) {
      if (!n13) continue;
      let l16 = u(n13);
      if (!l16) continue;
      let o19 = n13.parentElement;
      for (; o19 && o19 !== l16.body; ) {
        for (let p7 of o19.children) s14.some((E11) => p7.contains(E11)) || a18.add(h4(p7));
        o19 = o19.parentElement;
      }
    }
    return a18.dispose;
  }, [i15, r17, e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
var import_react59 = __toESM(require_react(), 1);
function m6(s14, n13, l16) {
  let i15 = s3((t12) => {
    let e7 = t12.getBoundingClientRect();
    e7.x === 0 && e7.y === 0 && e7.width === 0 && e7.height === 0 && l16();
  });
  (0, import_react59.useEffect)(() => {
    if (!s14) return;
    let t12 = n13 === null ? null : n13 instanceof HTMLElement ? n13 : n13.current;
    if (!t12) return;
    let e7 = o2();
    if (typeof ResizeObserver != "undefined") {
      let r17 = new ResizeObserver(() => i15.current(t12));
      r17.observe(t12), e7.add(() => r17.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r17 = new IntersectionObserver(() => i15.current(t12));
      r17.observe(t12), e7.add(() => r17.disconnect());
    }
    return () => e7.dispose();
  }, [n13, i15, s14]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react62 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f9 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e7) => `${e7}:not([tabindex='-1'])`).join(",");
var p4 = ["[data-autofocus]"].map((e7) => `${e7}:not([tabindex='-1'])`).join(",");
var F = ((n13) => (n13[n13.First = 1] = "First", n13[n13.Previous = 2] = "Previous", n13[n13.Next = 4] = "Next", n13[n13.Last = 8] = "Last", n13[n13.WrapAround = 16] = "WrapAround", n13[n13.NoScroll = 32] = "NoScroll", n13[n13.AutoFocus = 64] = "AutoFocus", n13))(F || {});
var T6 = ((o19) => (o19[o19.Error = 0] = "Error", o19[o19.Overflow = 1] = "Overflow", o19[o19.Success = 2] = "Success", o19[o19.Underflow = 3] = "Underflow", o19))(T6 || {});
var y4 = ((t12) => (t12[t12.Previous = -1] = "Previous", t12[t12.Next = 1] = "Next", t12))(y4 || {});
function b2(e7 = document.body) {
  return e7 == null ? [] : Array.from(e7.querySelectorAll(f9)).sort((r17, t12) => Math.sign((r17.tabIndex || Number.MAX_SAFE_INTEGER) - (t12.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S3(e7 = document.body) {
  return e7 == null ? [] : Array.from(e7.querySelectorAll(p4)).sort((r17, t12) => Math.sign((r17.tabIndex || Number.MAX_SAFE_INTEGER) - (t12.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h5 = ((t12) => (t12[t12.Strict = 0] = "Strict", t12[t12.Loose = 1] = "Loose", t12))(h5 || {});
function A2(e7, r17 = 0) {
  var t12;
  return e7 === ((t12 = u(e7)) == null ? void 0 : t12.body) ? false : u2(r17, { [0]() {
    return e7.matches(f9);
  }, [1]() {
    let u17 = e7;
    for (; u17 !== null; ) {
      if (u17.matches(f9)) return true;
      u17 = u17.parentElement;
    }
    return false;
  } });
}
function G3(e7) {
  let r17 = u(e7);
  o2().nextFrame(() => {
    r17 && !A2(r17.activeElement, 0) && I3(e7);
  });
}
var H3 = ((t12) => (t12[t12.Keyboard = 0] = "Keyboard", t12[t12.Mouse = 1] = "Mouse", t12))(H3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e7) => {
  e7.metaKey || e7.altKey || e7.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e7) => {
  e7.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e7.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I3(e7) {
  e7 == null || e7.focus({ preventScroll: true });
}
var w5 = ["textarea", "input"].join(",");
function O2(e7) {
  var r17, t12;
  return (t12 = (r17 = e7 == null ? void 0 : e7.matches) == null ? void 0 : r17.call(e7, w5)) != null ? t12 : false;
}
function _2(e7, r17 = (t12) => t12) {
  return e7.slice().sort((t12, u17) => {
    let o19 = r17(t12), c14 = r17(u17);
    if (o19 === null || c14 === null) return 0;
    let l16 = o19.compareDocumentPosition(c14);
    return l16 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l16 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function j3(e7, r17) {
  return P6(b2(), r17, { relativeTo: e7 });
}
function P6(e7, r17, { sorted: t12 = true, relativeTo: u17 = null, skipElements: o19 = [] } = {}) {
  let c14 = Array.isArray(e7) ? e7.length > 0 ? e7[0].ownerDocument : document : e7.ownerDocument, l16 = Array.isArray(e7) ? t12 ? _2(e7) : e7 : r17 & 64 ? S3(e7) : b2(e7);
  o19.length > 0 && l16.length > 1 && (l16 = l16.filter((s14) => !o19.some((a18) => a18 != null && "current" in a18 ? (a18 == null ? void 0 : a18.current) === s14 : a18 === s14))), u17 = u17 != null ? u17 : c14.activeElement;
  let n13 = (() => {
    if (r17 & 5) return 1;
    if (r17 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x7 = (() => {
    if (r17 & 1) return 0;
    if (r17 & 2) return Math.max(0, l16.indexOf(u17)) - 1;
    if (r17 & 4) return Math.max(0, l16.indexOf(u17)) + 1;
    if (r17 & 8) return l16.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M8 = r17 & 32 ? { preventScroll: true } : {}, m12 = 0, d12 = l16.length, i15;
  do {
    if (m12 >= d12 || m12 + d12 <= 0) return 0;
    let s14 = x7 + m12;
    if (r17 & 16) s14 = (s14 + d12) % d12;
    else {
      if (s14 < 0) return 3;
      if (s14 >= d12) return 1;
    }
    i15 = l16[s14], i15 == null || i15.focus(M8), m12 += n13;
  } while (i15 !== c14.activeElement);
  return r17 & 6 && O2(i15) && i15.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t4() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i8() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n8() {
  return t4() || i8();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react60 = __toESM(require_react(), 1);
function i9(t12, e7, o19, n13) {
  let u17 = s3(o19);
  (0, import_react60.useEffect)(() => {
    if (!t12) return;
    function r17(m12) {
      u17.current(m12);
    }
    return document.addEventListener(e7, r17, n13), () => document.removeEventListener(e7, r17, n13);
  }, [t12, e7, n13]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react61 = __toESM(require_react(), 1);
function s6(t12, e7, o19, n13) {
  let i15 = s3(o19);
  (0, import_react61.useEffect)(() => {
    if (!t12) return;
    function r17(d12) {
      i15.current(d12);
    }
    return window.addEventListener(e7, r17, n13), () => window.removeEventListener(e7, r17, n13);
  }, [t12, e7, n13]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var d3 = 30;
function F2(E11, p7, C7) {
  let u17 = x(E11, "outside-click"), f20 = s3(C7), s14 = (0, import_react62.useCallback)(function(e7, o19) {
    if (e7.defaultPrevented) return;
    let r17 = o19(e7);
    if (r17 === null || !r17.getRootNode().contains(r17) || !r17.isConnected) return;
    let T10 = function i15(n13) {
      return typeof n13 == "function" ? i15(n13()) : Array.isArray(n13) || n13 instanceof Set ? n13 : [n13];
    }(p7);
    for (let i15 of T10) {
      if (i15 === null) continue;
      let n13 = i15 instanceof HTMLElement ? i15 : i15.current;
      if (n13 != null && n13.contains(r17) || e7.composed && e7.composedPath().includes(n13)) return;
    }
    return !A2(r17, h5.Loose) && r17.tabIndex !== -1 && e7.preventDefault(), f20.current(e7, r17);
  }, [f20]), l16 = (0, import_react62.useRef)(null);
  i9(u17, "pointerdown", (t12) => {
    var e7, o19;
    l16.current = ((o19 = (e7 = t12.composedPath) == null ? void 0 : e7.call(t12)) == null ? void 0 : o19[0]) || t12.target;
  }, true), i9(u17, "mousedown", (t12) => {
    var e7, o19;
    l16.current = ((o19 = (e7 = t12.composedPath) == null ? void 0 : e7.call(t12)) == null ? void 0 : o19[0]) || t12.target;
  }, true), i9(u17, "click", (t12) => {
    n8() || l16.current && (s14(t12, () => l16.current), l16.current = null);
  }, true);
  let a18 = (0, import_react62.useRef)({ x: 0, y: 0 });
  i9(u17, "touchstart", (t12) => {
    a18.current.x = t12.touches[0].clientX, a18.current.y = t12.touches[0].clientY;
  }, true), i9(u17, "touchend", (t12) => {
    let e7 = { x: t12.changedTouches[0].clientX, y: t12.changedTouches[0].clientY };
    if (!(Math.abs(e7.x - a18.current.x) >= d3 || Math.abs(e7.y - a18.current.y) >= d3)) return s14(t12, () => t12.target instanceof HTMLElement ? t12.target : null);
  }, true), s6(u17, "blur", (t12) => s14(t12, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react63 = __toESM(require_react(), 1);
function n9(...e7) {
  return (0, import_react63.useMemo)(() => u(...e7), [...e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
var import_react65 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react64 = __toESM(require_react(), 1);
function E5(n13, e7, a18, t12) {
  let i15 = s3(a18);
  (0, import_react64.useEffect)(() => {
    n13 = n13 != null ? n13 : window;
    function r17(o19) {
      i15.current(o19);
    }
    return n13.addEventListener(e7, r17, t12), () => n13.removeEventListener(e7, r17, t12);
  }, [n13, e7, t12]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
function f10(l16) {
  let n13 = (0, import_react65.useRef)({ value: "", selectionStart: null, selectionEnd: null });
  return E5(l16.current, "blur", (e7) => {
    let t12 = e7.target;
    t12 instanceof HTMLInputElement && (n13.current = { value: t12.value, selectionStart: t12.selectionStart, selectionEnd: t12.selectionEnd });
  }), o4(() => {
    let e7 = l16.current;
    if (document.activeElement !== e7 && e7 instanceof HTMLInputElement && e7.isConnected) {
      if (e7.focus({ preventScroll: true }), e7.value !== n13.current.value) e7.setSelectionRange(e7.value.length, e7.value.length);
      else {
        let { selectionStart: t12, selectionEnd: u17 } = n13.current;
        t12 !== null && u17 !== null && e7.setSelectionRange(t12, u17);
      }
      n13.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react66 = __toESM(require_react(), 1);
function i10(t12) {
  var n13;
  if (t12.type) return t12.type;
  let e7 = (n13 = t12.as) != null ? n13 : "button";
  if (typeof e7 == "string" && e7.toLowerCase() === "button") return "button";
}
function T7(t12, e7) {
  let [n13, u17] = (0, import_react66.useState)(() => i10(t12));
  return n(() => {
    u17(i10(t12));
  }, [t12.type, t12.as]), n(() => {
    n13 || e7.current && e7.current instanceof HTMLButtonElement && !e7.current.hasAttribute("type") && u17("button");
  }, [n13, e7]), n13;
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d5() {
  let r17;
  return { before({ doc: e7 }) {
    var l16;
    let o19 = e7.documentElement, t12 = (l16 = e7.defaultView) != null ? l16 : window;
    r17 = Math.max(0, t12.innerWidth - o19.clientWidth);
  }, after({ doc: e7, d: o19 }) {
    let t12 = e7.documentElement, l16 = Math.max(0, t12.clientWidth - t12.offsetWidth), n13 = Math.max(0, r17 - l16);
    o19.style(t12, "paddingRight", `${n13}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d6() {
  return t4() ? { before({ doc: r17, d: n13, meta: c14 }) {
    function o19(a18) {
      return c14.containers.flatMap((l16) => l16()).some((l16) => l16.contains(a18));
    }
    n13.microTask(() => {
      var s14;
      if (window.getComputedStyle(r17.documentElement).scrollBehavior !== "auto") {
        let t12 = o2();
        t12.style(r17.documentElement, "scrollBehavior", "auto"), n13.add(() => n13.microTask(() => t12.dispose()));
      }
      let a18 = (s14 = window.scrollY) != null ? s14 : window.pageYOffset, l16 = null;
      n13.addEventListener(r17, "click", (t12) => {
        if (t12.target instanceof HTMLElement) try {
          let e7 = t12.target.closest("a");
          if (!e7) return;
          let { hash: f20 } = new URL(e7.href), i15 = r17.querySelector(f20);
          i15 && !o19(i15) && (l16 = i15);
        } catch {
        }
      }, true), n13.addEventListener(r17, "touchstart", (t12) => {
        if (t12.target instanceof HTMLElement) if (o19(t12.target)) {
          let e7 = t12.target;
          for (; e7.parentElement && o19(e7.parentElement); ) e7 = e7.parentElement;
          n13.style(e7, "overscrollBehavior", "contain");
        } else n13.style(t12.target, "touchAction", "none");
      }), n13.addEventListener(r17, "touchmove", (t12) => {
        if (t12.target instanceof HTMLElement) {
          if (t12.target.tagName === "INPUT") return;
          if (o19(t12.target)) {
            let e7 = t12.target;
            for (; e7.parentElement && e7.dataset.headlessuiPortal !== "" && !(e7.scrollHeight > e7.clientHeight || e7.scrollWidth > e7.clientWidth); ) e7 = e7.parentElement;
            e7.dataset.headlessuiPortal === "" && t12.preventDefault();
          } else t12.preventDefault();
        }
      }, { passive: false }), n13.add(() => {
        var e7;
        let t12 = (e7 = window.scrollY) != null ? e7 : window.pageYOffset;
        a18 !== t12 && window.scrollTo(0, a18), l16 && l16.isConnected && (l16.scrollIntoView({ block: "nearest" }), l16 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r8() {
  return { before({ doc: e7, d: o19 }) {
    o19.style(e7.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m8(e7) {
  let n13 = {};
  for (let t12 of e7) Object.assign(n13, t12(n13));
  return n13;
}
var a9 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e7, n13) {
  var o19;
  let t12 = (o19 = this.get(e7)) != null ? o19 : { doc: e7, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t12.count++, t12.meta.add(n13), this.set(e7, t12), this;
}, POP(e7, n13) {
  let t12 = this.get(e7);
  return t12 && (t12.count--, t12.meta.delete(n13)), this;
}, SCROLL_PREVENT({ doc: e7, d: n13, meta: t12 }) {
  let o19 = { doc: e7, d: n13, meta: m8(t12) }, c14 = [d6(), d5(), r8()];
  c14.forEach(({ before: r17 }) => r17 == null ? void 0 : r17(o19)), c14.forEach(({ after: r17 }) => r17 == null ? void 0 : r17(o19));
}, SCROLL_ALLOW({ d: e7 }) {
  e7.dispose();
}, TEARDOWN({ doc: e7 }) {
  this.delete(e7);
} });
a9.subscribe(() => {
  let e7 = a9.getSnapshot(), n13 = /* @__PURE__ */ new Map();
  for (let [t12] of e7) n13.set(t12, t12.documentElement.style.overflow);
  for (let t12 of e7.values()) {
    let o19 = n13.get(t12.doc) === "hidden", c14 = t12.count !== 0;
    (c14 && !o19 || !c14 && o19) && a9.dispatch(t12.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t12), t12.count === 0 && a9.dispatch("TEARDOWN", t12);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a10(r17, e7, n13 = () => ({ containers: [] })) {
  let f20 = o10(a9), o19 = e7 ? f20.get(e7) : void 0, i15 = o19 ? o19.count > 0 : false;
  return n(() => {
    if (!(!e7 || !r17)) return a9.dispatch("PUSH", e7, n13), () => a9.dispatch("POP", e7, n13);
  }, [r17, e7]), i15;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f11(e7, c14, n13 = () => [document.body]) {
  let r17 = x(e7, "scroll-lock");
  a10(r17, c14, (t12) => {
    var o19;
    return { containers: [...(o19 = t12.containers) != null ? o19 : [], n13] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react67 = __toESM(require_react(), 1);
function t6(e7) {
  return [e7.screenX, e7.screenY];
}
function u11() {
  let e7 = (0, import_react67.useRef)([-1, -1]);
  return { wasMoved(r17) {
    let n13 = t6(r17);
    return e7.current[0] === n13[0] && e7.current[1] === n13[1] ? false : (e7.current = n13, true);
  }, update(r17) {
    e7.current = t6(r17);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var import_react69 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l8(r17) {
  let e7 = { called: false };
  return (...t12) => {
    if (!e7.called) return e7.called = true, r17(...t12);
  };
}

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react68 = __toESM(require_react(), 1);
function c7(u17 = 0) {
  let [t12, l16] = (0, import_react68.useState)(u17), g6 = (0, import_react68.useCallback)((e7) => l16(e7), [t12]), s14 = (0, import_react68.useCallback)((e7) => l16((a18) => a18 | e7), [t12]), m12 = (0, import_react68.useCallback)((e7) => (t12 & e7) === e7, [t12]), n13 = (0, import_react68.useCallback)((e7) => l16((a18) => a18 & ~e7), [l16]), F7 = (0, import_react68.useCallback)((e7) => l16((a18) => a18 ^ e7), [l16]);
  return { flags: t12, setFlag: g6, addFlag: s14, hasFlag: m12, removeFlag: n13, toggleFlag: F7 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var D3 = ((i15) => (i15[i15.None = 0] = "None", i15[i15.Closed = 1] = "Closed", i15[i15.Enter = 2] = "Enter", i15[i15.Leave = 4] = "Leave", i15))(D3 || {});
function A3(e7) {
  let a18 = {};
  for (let t12 in e7) e7[t12] === true && (a18[`data-${t12}`] = "");
  return a18;
}
function V2(e7, a18, t12, r17) {
  let [i15, u17] = (0, import_react69.useState)(t12), { hasFlag: d12, addFlag: f20, removeFlag: s14 } = c7(e7 && i15 ? 3 : 0), l16 = (0, import_react69.useRef)(false), n13 = (0, import_react69.useRef)(false), o19 = p();
  return n(function p7() {
    var T10;
    if (!e7) return;
    t12 && u17(true);
    let c14 = a18.current;
    return c14 ? ((T10 = r17 == null ? void 0 : r17.start) == null || T10.call(r17, t12), M2(c14, { inFlight: l16, prepare() {
      n13.current ? n13.current = false : n13.current = l16.current, l16.current = true, !n13.current && (t12 ? (f20(3), s14(4)) : (f20(4), s14(2)));
    }, run() {
      n13.current ? t12 ? (s14(3), f20(4)) : (s14(4), f20(3)) : t12 ? s14(1) : f20(1);
    }, done() {
      var m12;
      n13.current && typeof c14.getAnimations == "function" && c14.getAnimations().length > 0 || (l16.current = false, s14(7), t12 || u17(false), (m12 = r17 == null ? void 0 : r17.end) == null || m12.call(r17, t12));
    } })) : t12 ? (f20(3), o19.nextFrame(() => p7())) : void 0;
  }, [e7, t12, a18, o19]), e7 ? [i15, { closed: d12(1), enter: d12(2), leave: d12(4), transition: d12(2) || d12(4) }] : [t12, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function M2(e7, { prepare: a18, run: t12, done: r17, inFlight: i15 }) {
  let u17 = o2();
  return R3(e7, { prepare: a18, inFlight: i15 }), u17.nextFrame(() => {
    u17.add(F3(e7, r17)), t12();
  }), u17.dispose;
}
function F3(e7, a18) {
  let t12 = l8(a18), r17 = o2();
  if (!e7) return r17.dispose;
  let { transitionDuration: i15, transitionDelay: u17 } = getComputedStyle(e7), [d12, f20] = [i15, u17].map((l16) => {
    let [n13 = 0] = l16.split(",").filter(Boolean).map((o19) => o19.includes("ms") ? parseFloat(o19) : parseFloat(o19) * 1e3).sort((o19, p7) => p7 - o19);
    return n13;
  }), s14 = d12 + f20;
  if (s14 !== 0) {
    let l16 = r17.group((n13) => {
      let o19 = n13.setTimeout(() => {
        t12(), n13.dispose();
      }, s14);
      n13.addEventListener(e7, "transitionrun", (p7) => {
        p7.target === p7.currentTarget && (o19(), n13.addEventListener(e7, "transitioncancel", (c14) => {
          c14.target === c14.currentTarget && (t12(), l16());
        }));
      });
    });
    r17.addEventListener(e7, "transitionend", (n13) => {
      n13.target === n13.currentTarget && (t12(), r17.dispose());
    });
  } else t12();
  return r17.dispose;
}
function R3(e7, { inFlight: a18, prepare: t12 }) {
  if (a18 != null && a18.current) {
    t12();
    return;
  }
  let r17 = e7.style.transition;
  e7.style.transition = "none", t12(), e7.offsetHeight, e7.style.transition = r17;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react70 = __toESM(require_react(), 1);
function F4(c14, { container: e7, accept: t12, walk: r17 }) {
  let o19 = (0, import_react70.useRef)(t12), l16 = (0, import_react70.useRef)(r17);
  (0, import_react70.useEffect)(() => {
    o19.current = t12, l16.current = r17;
  }, [t12, r17]), n(() => {
    if (!e7 || !c14) return;
    let n13 = u(e7);
    if (!n13) return;
    let f20 = o19.current, p7 = l16.current, i15 = Object.assign((m12) => f20(m12), { acceptNode: f20 }), u17 = n13.createTreeWalker(e7, NodeFilter.SHOW_ELEMENT, i15, false);
    for (; u17.nextNode(); ) p7(u17.currentNode);
  }, [e7, c14, o19, l16]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react71 = __toESM(require_react(), 1);
function m9(u17, t12) {
  let e7 = (0, import_react71.useRef)([]), r17 = o4(u17);
  (0, import_react71.useEffect)(() => {
    let o19 = [...e7.current];
    for (let [a18, l16] of t12.entries()) if (e7.current[a18] !== l16) {
      let n13 = r17(t12, o19);
      return e7.current = t12, n13;
    }
  }, [r17, ...t12]);
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React3 = __toESM(require_react(), 1);
var import_react73 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e7) {
      return false;
    }
  });
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isTopLayer(currentNode)) {
      return null;
    }
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v6) => ({
  x: v6,
  y: v6
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x7,
    y: y10,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y10,
    left: x7,
    right: x7 + width,
    bottom: y10 + height,
    x: x7,
    y: y10
  };
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x7,
    y: y10
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i15 = 0; i15 < validMiddleware.length; i15++) {
    const {
      name,
      fn
    } = validMiddleware[i15];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x7,
      y: y10,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x7 = nextX != null ? nextX : x7;
    y10 = nextY != null ? nextY : y10;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x7,
          y: y10
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i15 = -1;
    }
  }
  return {
    x: x7,
    y: y10,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x7,
    y: y10,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x7,
    y: y10,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d12) => d12.overflows[0] <= 0).sort((a18, b6) => a18.overflows[1] - b6.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d12) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d12.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d12) => [d12.placement, d12.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a18, b6) => a18[1] - b6[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x7,
        y: y10,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x7 + diffCoords.x,
        y: y10 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x7,
        y: y10,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x8,
              y: y11
            } = _ref;
            return {
              x: x8,
              y: y11
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x7,
        y: y10
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x7,
          y: limitedCoords.y - y10
        }
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $5
  } = getCssDimensions(domElement);
  let x7 = ($5 ? round(rect.width) : rect.width) / width;
  let y10 = ($5 ? round(rect.height) : rect.height) / height;
  if (!x7 || !Number.isFinite(x7)) {
    x7 = 1;
  }
  if (!y10 || !Number.isFinite(y10)) {
    y10 = 1;
  }
  return {
    x: x7,
    y: y10
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x7 = (clientRect.left + visualOffsets.x) / scale.x;
  let y10 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x7 *= iframeScale.x;
      y10 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x7 += left;
      y10 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x7,
    y: y10
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x7 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y10 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x7 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x7,
    y: y10
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x7 = 0;
  let y10 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x7 = visualViewport.offsetLeft;
      y10 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x7,
    y: y10
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x7 = left * scale.x;
  const y10 = top * scale.y;
  return {
    width,
    height,
    x: x7,
    y: y10
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x7 = rect.left + scroll.scrollLeft - offsets.x;
  const y10 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x7,
    y: y10,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId2);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e7) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var detectOverflow2 = detectOverflow;
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React2 = __toESM(require_react(), 1);
var import_react72 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react72.useLayoutEffect : import_react72.useEffect;
function deepEqual(a18, b6) {
  if (a18 === b6) {
    return true;
  }
  if (typeof a18 !== typeof b6) {
    return false;
  }
  if (typeof a18 === "function" && a18.toString() === b6.toString()) {
    return true;
  }
  let length;
  let i15;
  let keys;
  if (a18 && b6 && typeof a18 === "object") {
    if (Array.isArray(a18)) {
      length = a18.length;
      if (length !== b6.length) return false;
      for (i15 = length; i15-- !== 0; ) {
        if (!deepEqual(a18[i15], b6[i15])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a18);
    length = keys.length;
    if (length !== Object.keys(b6).length) {
      return false;
    }
    for (i15 = length; i15-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b6, keys[i15])) {
        return false;
      }
    }
    for (i15 = length; i15-- !== 0; ) {
      const key = keys[i15];
      if (key === "_owner" && a18.$$typeof) {
        continue;
      }
      if (!deepEqual(a18[key], b6[key])) {
        return false;
      }
    }
    return true;
  }
  return a18 !== a18 && b6 !== b6;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React2.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React2.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React2.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React2.useState(null);
  const [_floating, _setFloating] = React2.useState(null);
  const setReference = React2.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React2.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React2.useRef(null);
  const floatingRef = React2.useRef(null);
  const dataRef = React2.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React2.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React2.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React2.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React2.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React2.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x7 = roundByDPR(elements.floating, data.x);
    const y10 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x7 + "px, " + y10 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x7,
      top: y10
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React2.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
function useMergeRefs(refs) {
  return React3.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var SafeReact = {
  ...React3
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React3.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React3.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index3 = startingIndex;
  do {
    index3 += decrement ? -amount : amount;
  } while (index3 >= 0 && index3 <= list.length - 1 && isDisabled(list, index3, disabledIndices));
  return index3;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset4 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset4 : offset4 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index3) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index3 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i15 = 0; i15 < width; i15++) {
        for (let j10 = 0; j10 < height; j10++) {
          targetCells.push(startIndex + i15 + j10 * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index3;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index3, sizes, cellMap, cols, corner) {
  if (index3 === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index3);
  const sizeItem = sizes[index3];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index3);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index3, cellIndex) => indices.includes(index3) ? [cellIndex] : []);
}
function isDisabled(list, index3, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index3);
  }
  const element = list[index3];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
var index2 = typeof document !== "undefined" ? import_react73.useLayoutEffect : import_react73.useEffect;
function sortByDocumentPosition(a18, b6) {
  const position = a18.compareDocumentPosition(b6);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React3.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = React3.useState(() => /* @__PURE__ */ new Map());
  const register = React3.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React3.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index2(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index3) => {
      newMap.set(node, index3);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React3.createElement(FloatingListContext.Provider, {
    value: React3.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React3.useContext(FloatingListContext);
  const [index$1, setIndex] = React3.useState(null);
  const componentRef = React3.useRef(null);
  const ref = React3.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index2(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index2(() => {
    const index3 = componentRef.current ? map.get(componentRef.current) : null;
    if (index3 != null) {
      setIndex(index3);
    }
  }, [map]);
  return React3.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React3.cloneElement(render, computedProps);
  }
  return React3.createElement("div", computedProps);
}
var CompositeContext = React3.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React3.forwardRef(function Composite2(props, forwardedRef) {
  const {
    render,
    orientation = "both",
    loop = true,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = React3.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React3.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React3.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index3) => index3 != null && !isDisabled(elementsRef.current, index3, disabledIndices));
      const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !isDisabled(elementsRef.current, index3, disabledIndices) ? cellIndex : foundIndex, -1);
      nextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices || elementsRef.current.map((_5, index3) => isDisabled(elementsRef.current, index3) ? index3 : void 0), void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex > maxIndex ? minIndex : activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
        )
      })];
    }
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e7) {
      domProps.onKeyDown == null || domProps.onKeyDown(e7);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e7);
      handleKeyDown(e7);
    }
  };
  return React3.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React3.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React3.forwardRef(function CompositeItem2(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React3.useContext(CompositeContext);
  const {
    ref,
    index: index3
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index3;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e7) {
      domProps.onFocus == null || domProps.onFocus(e7);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e7);
      onNavigate(index3);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i15 = 1; i15 < arguments.length; i15++) {
      var source = arguments[i15];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React3.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React3.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId = SafeReact.useId;
var useId = useReactId || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
var FloatingArrow = React3.forwardRef(function FloatingArrow2(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow4
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d: d12,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn("The `ref` prop is required for `FloatingArrow`.");
    }
  }
  const clipPathId = useId();
  const [isRTL2, setIsRTL] = React3.useState(false);
  index2(() => {
    if (!floating) return;
    const isRTL3 = getComputedStyle2(floating).direction === "rtl";
    if (isRTL3) {
      setIsRTL(true);
    }
  }, [floating]);
  if (!floating) {
    return null;
  }
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split("-");
  const isCustomShape = !!d12;
  const isVerticalSide = side === "top" || side === "bottom";
  const yOffsetProp = staticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = staticOffset && alignment === "end" ? "right" : "left";
  if (staticOffset && isRTL2) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? staticOffset || arrow4.x : "";
  const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? staticOffset || arrow4.y : "";
  const dValue = d12 || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React3.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ""),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && React3.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: computedStrokeWidth + (d12 ? 0 : 1),
    d: dValue
  }), React3.createElement("path", {
    stroke: computedStrokeWidth && !d12 ? rest.fill : "none",
    d: dValue
  }), React3.createElement("clipPath", {
    id: clipPathId
  }, React3.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l16) => l16 !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React3.createContext(null);
var FloatingTreeContext = React3.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React3.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React3.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
var NOOP = () => {
};
var FloatingDelayGroupContext = React3.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React3.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React3.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React3.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React3.createContext(null);
var attr = createAttribute("portal");
var VisuallyHiddenDismiss = React3.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React3.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
var activeLocks = /* @__PURE__ */ new Set();
var FloatingOverlay = React3.forwardRef(function FloatingOverlay2(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  const lockId = useId();
  index2(() => {
    if (!lockScroll) return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
    const bodyStyle = document.body.style;
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.pageXOffset;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.pageYOffset;
    bodyStyle.overflow = "hidden";
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: "fixed",
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: "0"
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: "",
          [paddingProp]: ""
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: "",
            top: "",
            left: "",
            right: ""
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return React3.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React3.useRef({});
  const [events] = React3.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React3.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React3.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React3.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React3.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React3.useState(null);
  const [positionReference, _setPositionReference] = React3.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.reference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React3.useRef(null);
  const tree = useFloatingTree();
  index2(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React3.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React3.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React3.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React3.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React3.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index2(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React3.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _5,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
  const getReferenceProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return React3.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
var inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index3 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = evaluate(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index3];
    if (true) {
      if (!state.placement.startsWith("bottom")) {
        warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset3(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await detectOverflow2(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await detectOverflow2(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        ReactDOM2.flushSync(() => onFallbackChange(true));
      } else {
        ReactDOM2.flushSync(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow2(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React3.useRef(false);
  const prevScrollTopRef = React3.useRef(null);
  const initialOverflowRef = React3.useRef(null);
  React3.useEffect(() => {
    if (!enabled) return;
    function onWheel(e7) {
      if (e7.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e7.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e7.preventDefault();
        ReactDOM2.flushSync(() => {
          onChange((d12) => d12 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = React3.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          ReactDOM2.flushSync(() => onChange((d12) => d12 + scrollDiff));
        }
      }
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return React3.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}

// node_modules/@headlessui/react/dist/internal/floating.js
var j4 = __toESM(require_react(), 1);
var import_react75 = __toESM(require_react(), 1);
var y5 = (0, import_react75.createContext)({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y5.displayName = "FloatingContext";
var S5 = (0, import_react75.createContext)(null);
S5.displayName = "PlacementContext";
function xe(e7) {
  return (0, import_react75.useMemo)(() => e7 ? typeof e7 == "string" ? { to: e7 } : e7 : null, [e7]);
}
function ye() {
  return (0, import_react75.useContext)(y5).setReference;
}
function Fe() {
  return (0, import_react75.useContext)(y5).getReferenceProps;
}
function be() {
  let { getFloatingProps: e7, slot: t12 } = (0, import_react75.useContext)(y5);
  return (0, import_react75.useCallback)((...n13) => Object.assign({}, e7(...n13), { "data-anchor": t12.anchor }), [e7, t12]);
}
function Re2(e7 = null) {
  e7 === false && (e7 = null), typeof e7 == "string" && (e7 = { to: e7 });
  let t12 = (0, import_react75.useContext)(S5), n13 = (0, import_react75.useMemo)(() => e7, [JSON.stringify(e7, typeof HTMLElement != "undefined" ? (a18, r17) => r17 instanceof HTMLElement ? r17.outerHTML : r17 : void 0)]);
  n(() => {
    t12 == null || t12(n13 != null ? n13 : null);
  }, [t12, n13]);
  let l16 = (0, import_react75.useContext)(y5);
  return (0, import_react75.useMemo)(() => [l16.setFloating, e7 ? l16.styles : {}], [l16.setFloating, e7, l16.styles]);
}
var q = 4;
function ve({ children: e7, enabled: t12 = true }) {
  let [n13, l16] = (0, import_react75.useState)(null), [a18, r17] = (0, import_react75.useState)(0), c14 = (0, import_react75.useRef)(null), [u17, i15] = (0, import_react75.useState)(null);
  pe(u17);
  let o19 = t12 && n13 !== null && u17 !== null, { to: F7 = "bottom", gap: C7 = 0, offset: M8 = 0, padding: p7 = 0, inner: P8 } = ce(n13, u17), [s14, f20 = "center"] = F7.split(" ");
  n(() => {
    o19 && r17(0);
  }, [o19]);
  let { refs: b6, floatingStyles: $5, context: g6 } = useFloating2({ open: o19, placement: s14 === "selection" ? f20 === "center" ? "bottom" : `bottom-${f20}` : f20 === "center" ? `${s14}` : `${s14}-${f20}`, strategy: "absolute", transform: false, middleware: [offset3({ mainAxis: s14 === "selection" ? 0 : C7, crossAxis: M8 }), shift3({ padding: p7 }), s14 !== "selection" && flip3({ padding: p7 }), s14 === "selection" && P8 ? inner({ ...P8, padding: p7, overflowRef: c14, offset: a18, minItemsVisible: q, referenceOverflowThreshold: p7, onFallbackChange(h8) {
    var W7, k5;
    if (!h8) return;
    let d12 = g6.elements.floating;
    if (!d12) return;
    let T10 = parseFloat(getComputedStyle(d12).scrollPaddingBottom) || 0, w9 = Math.min(q, d12.childElementCount), B4 = 0, O5 = 0;
    for (let m12 of (k5 = (W7 = g6.elements.floating) == null ? void 0 : W7.childNodes) != null ? k5 : []) if (m12 instanceof HTMLElement) {
      let x7 = m12.offsetTop, N5 = x7 + m12.clientHeight + T10, H10 = d12.scrollTop, U4 = H10 + d12.clientHeight;
      if (x7 >= H10 && N5 <= U4) w9--;
      else {
        O5 = Math.max(0, Math.min(N5, U4) - Math.max(x7, H10)), B4 = m12.clientHeight;
        break;
      }
    }
    w9 >= 1 && r17((m12) => {
      let x7 = B4 * w9 - O5 + T10;
      return m12 >= x7 ? m12 : x7;
    });
  } }) : null, size3({ padding: p7, apply({ availableWidth: h8, availableHeight: d12, elements: T10 }) {
    Object.assign(T10.floating.style, { overflow: "auto", maxWidth: `${h8}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d12}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [I7 = s14, V6 = f20] = g6.placement.split("-");
  s14 === "selection" && (I7 = "selection");
  let G10 = (0, import_react75.useMemo)(() => ({ anchor: [I7, V6].filter(Boolean).join(" ") }), [I7, V6]), K4 = useInnerOffset(g6, { overflowRef: c14, onChange: r17 }), { getReferenceProps: Q4, getFloatingProps: X3 } = useInteractions([K4]), Y5 = o4((h8) => {
    i15(h8), b6.setFloating(h8);
  });
  return j4.createElement(S5.Provider, { value: l16 }, j4.createElement(y5.Provider, { value: { setFloating: Y5, setReference: b6.setReference, styles: $5, getReferenceProps: Q4, getFloatingProps: X3, slot: G10 } }, e7));
}
function pe(e7) {
  n(() => {
    if (!e7) return;
    let t12 = new MutationObserver(() => {
      let n13 = e7.style.maxHeight;
      parseFloat(n13) !== parseInt(n13) && (e7.style.maxHeight = `${Math.ceil(parseFloat(n13))}px`);
    });
    return t12.observe(e7, { attributes: true, attributeFilter: ["style"] }), () => {
      t12.disconnect();
    };
  }, [e7]);
}
function ce(e7, t12) {
  var r17, c14, u17;
  let n13 = L((r17 = e7 == null ? void 0 : e7.gap) != null ? r17 : "var(--anchor-gap, 0)", t12), l16 = L((c14 = e7 == null ? void 0 : e7.offset) != null ? c14 : "var(--anchor-offset, 0)", t12), a18 = L((u17 = e7 == null ? void 0 : e7.padding) != null ? u17 : "var(--anchor-padding, 0)", t12);
  return { ...e7, gap: n13, offset: l16, padding: a18 };
}
function L(e7, t12, n13 = void 0) {
  let l16 = p(), a18 = o4((i15, o19) => {
    if (i15 == null) return [n13, null];
    if (typeof i15 == "number") return [i15, null];
    if (typeof i15 == "string") {
      if (!o19) return [n13, null];
      let F7 = J(i15, o19);
      return [F7, (C7) => {
        let M8 = D4(i15);
        {
          let p7 = M8.map((P8) => window.getComputedStyle(o19).getPropertyValue(P8));
          l16.requestAnimationFrame(function P8() {
            l16.nextFrame(P8);
            let s14 = false;
            for (let [b6, $5] of M8.entries()) {
              let g6 = window.getComputedStyle(o19).getPropertyValue($5);
              if (p7[b6] !== g6) {
                p7[b6] = g6, s14 = true;
                break;
              }
            }
            if (!s14) return;
            let f20 = J(i15, o19);
            F7 !== f20 && (C7(f20), F7 = f20);
          });
        }
        return l16.dispose;
      }];
    }
    return [n13, null];
  }), r17 = (0, import_react75.useMemo)(() => a18(e7, t12)[0], [e7, t12]), [c14 = r17, u17] = (0, import_react75.useState)();
  return n(() => {
    let [i15, o19] = a18(e7, t12);
    if (u17(i15), !!o19) return o19(u17);
  }, [e7, t12]), c14;
}
function D4(e7) {
  let t12 = /var\((.*)\)/.exec(e7);
  if (t12) {
    let n13 = t12[1].indexOf(",");
    if (n13 === -1) return [t12[1]];
    let l16 = t12[1].slice(0, n13).trim(), a18 = t12[1].slice(n13 + 1).trim();
    return a18 ? [l16, ...D4(a18)] : [l16];
  }
  return [];
}
function J(e7, t12) {
  let n13 = document.createElement("div");
  t12.appendChild(n13), n13.style.setProperty("margin-top", "0px", "important"), n13.style.setProperty("margin-top", e7, "important");
  let l16 = parseFloat(window.getComputedStyle(n13).marginTop) || 0;
  return t12.removeChild(n13), l16;
}

// node_modules/@headlessui/react/dist/internal/frozen.js
var import_react76 = __toESM(require_react(), 1);
function f13({ children: o19, freeze: e7 }) {
  let n13 = l9(e7, o19);
  return import_react76.default.createElement(import_react76.default.Fragment, null, n13);
}
function l9(o19, e7) {
  let [n13, t12] = (0, import_react76.useState)(e7);
  return !o19 && n13 !== e7 && t12(e7), o19 ? n13 : e7;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react77 = __toESM(require_react(), 1);
var n10 = (0, import_react77.createContext)(null);
n10.displayName = "OpenClosedContext";
var i11 = ((e7) => (e7[e7.Open = 1] = "Open", e7[e7.Closed = 2] = "Closed", e7[e7.Closing = 4] = "Closing", e7[e7.Opening = 8] = "Opening", e7))(i11 || {});
function u13() {
  return (0, import_react77.useContext)(n10);
}
function c8({ value: o19, children: t12 }) {
  return import_react77.default.createElement(n10.Provider, { value: o19 }, t12);
}
function s8({ children: o19 }) {
  return import_react77.default.createElement(n10.Provider, { value: null }, o19);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t7(n13) {
  function e7() {
    document.readyState !== "loading" && (n13(), document.removeEventListener("DOMContentLoaded", e7));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e7), e7());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var t8 = [];
t7(() => {
  function e7(n13) {
    n13.target instanceof HTMLElement && n13.target !== document.body && t8[0] !== n13.target && (t8.unshift(n13.target), t8 = t8.filter((r17) => r17 != null && r17.isConnected), t8.splice(10));
  }
  window.addEventListener("click", e7, { capture: true }), window.addEventListener("mousedown", e7, { capture: true }), window.addEventListener("focus", e7, { capture: true }), document.body.addEventListener("click", e7, { capture: true }), document.body.addEventListener("mousedown", e7, { capture: true }), document.body.addEventListener("focus", e7, { capture: true });
});

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u14(l16) {
  throw new Error("Unexpected object: " + l16);
}
var c9 = ((i15) => (i15[i15.First = 0] = "First", i15[i15.Previous = 1] = "Previous", i15[i15.Next = 2] = "Next", i15[i15.Last = 3] = "Last", i15[i15.Specific = 4] = "Specific", i15[i15.Nothing = 5] = "Nothing", i15))(c9 || {});
function f14(l16, n13) {
  let t12 = n13.resolveItems();
  if (t12.length <= 0) return null;
  let r17 = n13.resolveActiveIndex(), s14 = r17 != null ? r17 : -1;
  switch (l16.focus) {
    case 0: {
      for (let e7 = 0; e7 < t12.length; ++e7) if (!n13.resolveDisabled(t12[e7], e7, t12)) return e7;
      return r17;
    }
    case 1: {
      s14 === -1 && (s14 = t12.length);
      for (let e7 = s14 - 1; e7 >= 0; --e7) if (!n13.resolveDisabled(t12[e7], e7, t12)) return e7;
      return r17;
    }
    case 2: {
      for (let e7 = s14 + 1; e7 < t12.length; ++e7) if (!n13.resolveDisabled(t12[e7], e7, t12)) return e7;
      return r17;
    }
    case 3: {
      for (let e7 = t12.length - 1; e7 >= 0; --e7) if (!n13.resolveDisabled(t12[e7], e7, t12)) return e7;
      return r17;
    }
    case 4: {
      for (let e7 = 0; e7 < t12.length; ++e7) if (n13.resolveId(t12[e7], e7, t12) === l16.id) return e7;
      return r17;
    }
    case 5:
      return null;
    default:
      u14(l16);
  }
}

// node_modules/@headlessui/react/dist/components/mouse.js
var g2 = ((f20) => (f20[f20.Left = 0] = "Left", f20[f20.Right = 2] = "Right", f20))(g2 || {});

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react80 = __toESM(require_react(), 1);
var import_react_dom5 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react78 = __toESM(require_react(), 1);
function c10(t12) {
  let r17 = o4(t12), e7 = (0, import_react78.useRef)(false);
  (0, import_react78.useEffect)(() => (e7.current = false, () => {
    e7.current = true, t(() => {
      e7.current && r17();
    });
  }), [r17]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t9 = __toESM(require_react(), 1);
function s9() {
  let r17 = typeof document == "undefined";
  return "useSyncExternalStore" in t9 ? ((o19) => o19.useSyncExternalStore)(t9)(() => () => {
  }, () => false, () => !r17) : false;
}
function l11() {
  let r17 = s9(), [e7, n13] = t9.useState(s.isHandoffComplete);
  return e7 && s.isHandoffComplete === false && n13(false), t9.useEffect(() => {
    e7 !== true && n13(true);
  }, [e7]), t9.useEffect(() => s.handoff(), []), r17 ? false : e7;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react79 = __toESM(require_react(), 1);
var e6 = (0, import_react79.createContext)(false);
function a11() {
  return (0, import_react79.useContext)(e6);
}
function l12(o19) {
  return import_react79.default.createElement(e6.Provider, { value: o19.force }, o19.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function D5(p7) {
  let r17 = a11(), l16 = (0, import_react80.useContext)(v4), e7 = n9(p7), [o19, n13] = (0, import_react80.useState)(() => {
    var t12;
    if (!r17 && l16 !== null) return (t12 = l16.current) != null ? t12 : null;
    if (s.isServer) return null;
    let u17 = e7 == null ? void 0 : e7.getElementById("headlessui-portal-root");
    if (u17) return u17;
    if (e7 === null) return null;
    let a18 = e7.createElement("div");
    return a18.setAttribute("id", "headlessui-portal-root"), e7.body.appendChild(a18);
  });
  return (0, import_react80.useEffect)(() => {
    o19 !== null && (e7 != null && e7.body.contains(o19) || e7 == null || e7.body.appendChild(o19));
  }, [o19, e7]), (0, import_react80.useEffect)(() => {
    r17 || l16 !== null && n13(l16.current);
  }, [l16, n13, r17]), o19;
}
var M3 = import_react80.Fragment;
var N4 = W(function(r17, l16) {
  let e7 = r17, o19 = (0, import_react80.useRef)(null), n13 = y(T3((i15) => {
    o19.current = i15;
  }), l16), u17 = n9(o19), a18 = D5(o19), [t12] = (0, import_react80.useState)(() => {
    var i15;
    return s.isServer ? null : (i15 = u17 == null ? void 0 : u17.createElement("div")) != null ? i15 : null;
  }), s14 = (0, import_react80.useContext)(y6), b6 = l11();
  return n(() => {
    !a18 || !t12 || a18.contains(t12) || (t12.setAttribute("data-headlessui-portal", ""), a18.appendChild(t12));
  }, [a18, t12]), n(() => {
    if (t12 && s14) return s14.register(t12);
  }, [s14, t12]), c10(() => {
    var i15;
    !a18 || !t12 || (t12 instanceof Node && a18.contains(t12) && a18.removeChild(t12), a18.childNodes.length <= 0 && ((i15 = a18.parentElement) == null || i15.removeChild(a18)));
  }), b6 ? !a18 || !t12 ? null : (0, import_react_dom5.createPortal)(H({ ourProps: { ref: n13 }, theirProps: e7, slot: {}, defaultTag: M3, name: "Portal" }), t12) : null;
});
function S6(p7, r17) {
  let l16 = y(r17), { enabled: e7 = true, ...o19 } = p7;
  return e7 ? import_react80.default.createElement(N4, { ...o19, ref: l16 }) : H({ ourProps: { ref: l16 }, theirProps: o19, slot: {}, defaultTag: M3, name: "Portal" });
}
var j5 = import_react80.Fragment;
var v4 = (0, import_react80.createContext)(null);
function W3(p7, r17) {
  let { target: l16, ...e7 } = p7, n13 = { ref: y(r17) };
  return import_react80.default.createElement(v4.Provider, { value: l16 }, H({ ourProps: n13, theirProps: e7, defaultTag: j5, name: "Popover.Group" }));
}
var y6 = (0, import_react80.createContext)(null);
function ee() {
  let p7 = (0, import_react80.useContext)(y6), r17 = (0, import_react80.useRef)([]), l16 = o4((n13) => (r17.current.push(n13), p7 && p7.register(n13), () => e7(n13))), e7 = o4((n13) => {
    let u17 = r17.current.indexOf(n13);
    u17 !== -1 && r17.current.splice(u17, 1), p7 && p7.unregister(n13);
  }), o19 = (0, import_react80.useMemo)(() => ({ register: l16, unregister: e7, portals: r17 }), [l16, e7, r17]);
  return [r17, (0, import_react80.useMemo)(() => function({ children: u17 }) {
    return import_react80.default.createElement(y6.Provider, { value: o19 }, u17);
  }, [o19])];
}
var I4 = W(S6);
var J2 = W(W3);
var te = Object.assign(I4, { Group: J2 });

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var Co = ((e7) => (e7[e7.Open = 0] = "Open", e7[e7.Closed = 1] = "Closed", e7))(Co || {});
var Ro = ((e7) => (e7[e7.Single = 0] = "Single", e7[e7.Multi = 1] = "Multi", e7))(Ro || {});
var So = ((t12) => (t12[t12.Pointer = 0] = "Pointer", t12[t12.Focus = 1] = "Focus", t12[t12.Other = 2] = "Other", t12))(So || {});
var Po = ((u17) => (u17[u17.OpenCombobox = 0] = "OpenCombobox", u17[u17.CloseCombobox = 1] = "CloseCombobox", u17[u17.GoToOption = 2] = "GoToOption", u17[u17.SetTyping = 3] = "SetTyping", u17[u17.RegisterOption = 4] = "RegisterOption", u17[u17.UnregisterOption = 5] = "UnregisterOption", u17[u17.SetActivationTrigger = 6] = "SetActivationTrigger", u17[u17.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", u17))(Po || {});
function Te(o19, r17 = (e7) => e7) {
  let e7 = o19.activeOptionIndex !== null ? o19.options[o19.activeOptionIndex] : null, t12 = r17(o19.options.slice()), c14 = t12.length > 0 && t12[0].dataRef.current.order !== null ? t12.sort((f20, s14) => f20.dataRef.current.order - s14.dataRef.current.order) : _2(t12, (f20) => f20.dataRef.current.domRef.current), d12 = e7 ? c14.indexOf(e7) : null;
  return d12 === -1 && (d12 = null), { options: c14, activeOptionIndex: d12 };
}
var Ao = { [1](o19) {
  var r17;
  return (r17 = o19.dataRef.current) != null && r17.disabled || o19.comboboxState === 1 ? o19 : { ...o19, activeOptionIndex: null, comboboxState: 1, isTyping: false, activationTrigger: 2, __demoMode: false };
}, [0](o19) {
  var r17, e7;
  if ((r17 = o19.dataRef.current) != null && r17.disabled || o19.comboboxState === 0) return o19;
  if ((e7 = o19.dataRef.current) != null && e7.value) {
    let t12 = o19.dataRef.current.calculateIndex(o19.dataRef.current.value);
    if (t12 !== -1) return { ...o19, activeOptionIndex: t12, comboboxState: 0, __demoMode: false };
  }
  return { ...o19, comboboxState: 0, __demoMode: false };
}, [3](o19, r17) {
  return o19.isTyping === r17.isTyping ? o19 : { ...o19, isTyping: r17.isTyping };
}, [2](o19, r17) {
  var d12, f20, s14, u17, a18;
  if ((d12 = o19.dataRef.current) != null && d12.disabled || (f20 = o19.dataRef.current) != null && f20.optionsRef.current && !((s14 = o19.dataRef.current) != null && s14.optionsPropsRef.current.static) && o19.comboboxState === 1) return o19;
  if (o19.virtual) {
    let { options: n13, disabled: T10 } = o19.virtual, C7 = r17.focus === c9.Specific ? r17.idx : f14(r17, { resolveItems: () => n13, resolveActiveIndex: () => {
      var p7, w9;
      return (w9 = (p7 = o19.activeOptionIndex) != null ? p7 : n13.findIndex((M8) => !T10(M8))) != null ? w9 : null;
    }, resolveDisabled: T10, resolveId() {
      throw new Error("Function not implemented.");
    } }), _5 = (u17 = r17.trigger) != null ? u17 : 2;
    return o19.activeOptionIndex === C7 && o19.activationTrigger === _5 ? o19 : { ...o19, activeOptionIndex: C7, activationTrigger: _5, isTyping: false, __demoMode: false };
  }
  let e7 = Te(o19);
  if (e7.activeOptionIndex === null) {
    let n13 = e7.options.findIndex((T10) => !T10.dataRef.current.disabled);
    n13 !== -1 && (e7.activeOptionIndex = n13);
  }
  let t12 = r17.focus === c9.Specific ? r17.idx : f14(r17, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (n13) => n13.id, resolveDisabled: (n13) => n13.dataRef.current.disabled }), c14 = (a18 = r17.trigger) != null ? a18 : 2;
  return o19.activeOptionIndex === t12 && o19.activationTrigger === c14 ? o19 : { ...o19, ...e7, isTyping: false, activeOptionIndex: t12, activationTrigger: c14, __demoMode: false };
}, [4]: (o19, r17) => {
  var d12, f20, s14;
  if ((d12 = o19.dataRef.current) != null && d12.virtual) return { ...o19, options: [...o19.options, r17.payload] };
  let e7 = r17.payload, t12 = Te(o19, (u17) => (u17.push(e7), u17));
  o19.activeOptionIndex === null && (f20 = o19.dataRef.current) != null && f20.isSelected(r17.payload.dataRef.current.value) && (t12.activeOptionIndex = t12.options.indexOf(e7));
  let c14 = { ...o19, ...t12, activationTrigger: 2 };
  return (s14 = o19.dataRef.current) != null && s14.__demoMode && o19.dataRef.current.value === void 0 && (c14.activeOptionIndex = 0), c14;
}, [5]: (o19, r17) => {
  var t12;
  if ((t12 = o19.dataRef.current) != null && t12.virtual) return { ...o19, options: o19.options.filter((c14) => c14.id !== r17.id) };
  let e7 = Te(o19, (c14) => {
    let d12 = c14.findIndex((f20) => f20.id === r17.id);
    return d12 !== -1 && c14.splice(d12, 1), c14;
  });
  return { ...o19, ...e7, activationTrigger: 2 };
}, [6]: (o19, r17) => o19.activationTrigger === r17.trigger ? o19 : { ...o19, activationTrigger: r17.trigger }, [7]: (o19, r17) => {
  var t12, c14;
  if (o19.virtual === null) return { ...o19, virtual: { options: r17.options, disabled: (t12 = r17.disabled) != null ? t12 : () => false } };
  if (o19.virtual.options === r17.options && o19.virtual.disabled === r17.disabled) return o19;
  let e7 = o19.activeOptionIndex;
  if (o19.activeOptionIndex !== null) {
    let d12 = r17.options.indexOf(o19.virtual.options[o19.activeOptionIndex]);
    d12 !== -1 ? e7 = d12 : e7 = null;
  }
  return { ...o19, activeOptionIndex: e7, virtual: { options: r17.options, disabled: (c14 = r17.disabled) != null ? c14 : () => false } };
} };
var xe2 = (0, import_react81.createContext)(null);
xe2.displayName = "ComboboxActionsContext";
function re(o19) {
  let r17 = (0, import_react81.useContext)(xe2);
  if (r17 === null) {
    let e7 = new Error(`<${o19} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, re), e7;
  }
  return r17;
}
var Le = (0, import_react81.createContext)(null);
function Io(o19) {
  let r17 = oe("VirtualProvider"), { options: e7 } = r17.virtual, [t12, c14] = (0, import_react81.useMemo)(() => {
    let a18 = r17.optionsRef.current;
    if (!a18) return [0, 0];
    let n13 = window.getComputedStyle(a18);
    return [parseFloat(n13.paddingBlockStart || n13.paddingTop), parseFloat(n13.paddingBlockEnd || n13.paddingBottom)];
  }, [r17.optionsRef.current]), d12 = useVirtualizer({ scrollPaddingStart: t12, scrollPaddingEnd: c14, count: e7.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    var a18;
    return (a18 = r17.optionsRef.current) != null ? a18 : null;
  }, overscan: 12 }), [f20, s14] = (0, import_react81.useState)(0);
  n(() => {
    s14((a18) => a18 + 1);
  }, [e7]);
  let u17 = d12.getVirtualItems();
  return u17.length === 0 ? null : import_react81.default.createElement(Le.Provider, { value: d12 }, import_react81.default.createElement("div", { style: { position: "relative", width: "100%", height: `${d12.getTotalSize()}px` }, ref: (a18) => {
    if (a18) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r17.activationTrigger === 0) return;
      r17.activeOptionIndex !== null && e7.length > r17.activeOptionIndex && d12.scrollToIndex(r17.activeOptionIndex);
    }
  } }, u17.map((a18) => {
    var n13;
    return import_react81.default.createElement(import_react81.Fragment, { key: a18.key }, import_react81.default.cloneElement((n13 = o19.children) == null ? void 0 : n13.call(o19, { ...o19.slot, option: e7[a18.index] }), { key: `${f20}-${a18.key}`, "data-index": a18.index, "aria-setsize": e7.length, "aria-posinset": a18.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${a18.start}px)`, overflowAnchor: "none" } }));
  })));
}
var ie2 = (0, import_react81.createContext)(null);
ie2.displayName = "ComboboxDataContext";
function oe(o19) {
  let r17 = (0, import_react81.useContext)(ie2);
  if (r17 === null) {
    let e7 = new Error(`<${o19} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, oe), e7;
  }
  return r17;
}
function Eo(o19, r17) {
  return u2(r17.type, Ao, o19, r17);
}
var _o = import_react81.Fragment;
function ho(o19, r17) {
  var ge4, ve4;
  let e7 = a3(), { value: t12, defaultValue: c14, onChange: d12, form: f20, name: s14, by: u17, disabled: a18 = e7 || false, onClose: n13, __demoMode: T10 = false, multiple: C7 = false, immediate: _5 = false, virtual: p7 = null, nullable: w9, ...M8 } = o19, F7 = l2(c14), [v6 = C7 ? [] : void 0, y10] = T(t12, d12, F7), [A9, R8] = (0, import_react81.useReducer)(Eo, { dataRef: (0, import_react81.createRef)(), comboboxState: T10 ? 0 : 1, isTyping: false, options: [], virtual: p7 ? { options: p7.options, disabled: (ge4 = p7.disabled) != null ? ge4 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, __demoMode: T10 }), h8 = (0, import_react81.useRef)(false), O5 = (0, import_react81.useRef)({ static: false, hold: false }), G10 = (0, import_react81.useRef)(null), J6 = (0, import_react81.useRef)(null), Q4 = (0, import_react81.useRef)(null), I7 = u9(u17), B4 = o4((b6) => p7 ? u17 === null ? p7.options.indexOf(b6) : p7.options.findIndex((g6) => I7(g6, b6)) : A9.options.findIndex((g6) => I7(g6.dataRef.current.value, b6))), k5 = (0, import_react81.useCallback)((b6) => u2(i15.mode, { [1]: () => v6.some((g6) => I7(g6, b6)), [0]: () => I7(v6, b6) }), [v6]), K4 = o4((b6) => A9.activeOptionIndex === B4(b6)), i15 = (0, import_react81.useMemo)(() => ({ ...A9, immediate: _5, optionsPropsRef: O5, inputRef: G10, buttonRef: J6, optionsRef: Q4, value: v6, defaultValue: F7, disabled: a18, mode: C7 ? 1 : 0, virtual: p7 ? A9.virtual : null, get activeOptionIndex() {
    if (h8.current && A9.activeOptionIndex === null && (p7 ? p7.options.length > 0 : A9.options.length > 0)) {
      if (p7) {
        let g6 = p7.options.findIndex((j10) => {
          var ue5, Oe4;
          return !((Oe4 = (ue5 = p7.disabled) == null ? void 0 : ue5.call(p7, j10)) != null && Oe4);
        });
        if (g6 !== -1) return g6;
      }
      let b6 = A9.options.findIndex((g6) => !g6.dataRef.current.disabled);
      if (b6 !== -1) return b6;
    }
    return A9.activeOptionIndex;
  }, calculateIndex: B4, compare: I7, isSelected: k5, isActive: K4 }), [v6, F7, a18, C7, T10, A9, p7]);
  n(() => {
    var b6;
    p7 && R8({ type: 7, options: p7.options, disabled: (b6 = p7.disabled) != null ? b6 : null });
  }, [p7, p7 == null ? void 0 : p7.options, p7 == null ? void 0 : p7.disabled]), n(() => {
    A9.dataRef.current = i15;
  }, [i15]);
  let N5 = i15.comboboxState === 0;
  F2(N5, [i15.buttonRef, i15.inputRef, i15.optionsRef], () => x7.closeCombobox());
  let q5 = (0, import_react81.useMemo)(() => {
    var b6, g6, j10;
    return { open: i15.comboboxState === 0, disabled: a18, activeIndex: i15.activeOptionIndex, activeOption: i15.activeOptionIndex === null ? null : i15.virtual ? i15.virtual.options[(b6 = i15.activeOptionIndex) != null ? b6 : 0] : (j10 = (g6 = i15.options[i15.activeOptionIndex]) == null ? void 0 : g6.dataRef.current.value) != null ? j10 : null, value: v6 };
  }, [i15, a18, v6]), Y5 = o4(() => {
    if (i15.activeOptionIndex !== null) {
      if (x7.setIsTyping(false), i15.virtual) S8(i15.virtual.options[i15.activeOptionIndex]);
      else {
        let { dataRef: b6 } = i15.options[i15.activeOptionIndex];
        S8(b6.current.value);
      }
      x7.goToOption(c9.Specific, i15.activeOptionIndex);
    }
  }), E11 = o4(() => {
    R8({ type: 0 }), h8.current = true;
  }), ae5 = o4(() => {
    R8({ type: 1 }), h8.current = false, n13 == null || n13();
  }), le4 = o4((b6) => {
    R8({ type: 3, isTyping: b6 });
  }), l16 = o4((b6, g6, j10) => (h8.current = false, b6 === c9.Specific ? R8({ type: 2, focus: c9.Specific, idx: g6, trigger: j10 }) : R8({ type: 2, focus: b6, trigger: j10 }))), U4 = o4((b6, g6) => (R8({ type: 4, payload: { id: b6, dataRef: g6 } }), () => {
    i15.isActive(g6.current.value) && (h8.current = true), R8({ type: 5, id: b6 });
  })), S8 = o4((b6) => u2(i15.mode, { [0]() {
    return y10 == null ? void 0 : y10(b6);
  }, [1]() {
    let g6 = i15.value.slice(), j10 = g6.findIndex((ue5) => I7(ue5, b6));
    return j10 === -1 ? g6.push(b6) : g6.splice(j10, 1), y10 == null ? void 0 : y10(g6);
  } })), H10 = o4((b6) => {
    R8({ type: 6, trigger: b6 });
  }), x7 = (0, import_react81.useMemo)(() => ({ onChange: S8, registerOption: U4, goToOption: l16, setIsTyping: le4, closeCombobox: ae5, openCombobox: E11, setActivationTrigger: H10, selectActiveOption: Y5 }), []), [L8, W7] = z(), we4 = r17 === null ? {} : { ref: r17 }, Be4 = (0, import_react81.useCallback)(() => {
    if (F7 !== void 0) return y10 == null ? void 0 : y10(F7);
  }, [y10, F7]);
  return import_react81.default.createElement(W7, { value: L8, props: { htmlFor: (ve4 = i15.inputRef.current) == null ? void 0 : ve4.id }, slot: { open: i15.comboboxState === 0, disabled: a18 } }, import_react81.default.createElement(ve, null, import_react81.default.createElement(xe2.Provider, { value: x7 }, import_react81.default.createElement(ie2.Provider, { value: i15 }, import_react81.default.createElement(c8, { value: u2(i15.comboboxState, { [0]: i11.Open, [1]: i11.Closed }) }, s14 != null && import_react81.default.createElement(j2, { disabled: a18, data: v6 != null ? { [s14]: v6 } : {}, form: f20, onReset: Be4 }), H({ ourProps: we4, theirProps: M8, slot: q5, defaultTag: _o, name: "Combobox" }))))));
}
var Do = "input";
function Mo(o19, r17) {
  var q5, Y5, E11, ae5, le4;
  let e7 = oe("Combobox.Input"), t12 = re("Combobox.Input"), c14 = (0, import_react46.useId)(), d12 = u5(), { id: f20 = d12 || `headlessui-combobox-input-${c14}`, onChange: s14, displayValue: u17, disabled: a18 = e7.disabled || false, autoFocus: n13 = false, type: T10 = "text", ...C7 } = o19, _5 = y(e7.inputRef, r17, ye()), p7 = n9(e7.inputRef), w9 = p(), M8 = o4(() => {
    t12.onChange(null), e7.optionsRef.current && (e7.optionsRef.current.scrollTop = 0), t12.goToOption(c9.Nothing);
  }), F7 = (0, import_react81.useMemo)(() => {
    var l16;
    return typeof u17 == "function" && e7.value !== void 0 ? (l16 = u17(e7.value)) != null ? l16 : "" : typeof e7.value == "string" ? e7.value : "";
  }, [e7.value, u17]);
  m9(([l16, U4], [S8, H10]) => {
    if (e7.isTyping) return;
    let x7 = e7.inputRef.current;
    x7 && ((H10 === 0 && U4 === 1 || l16 !== S8) && (x7.value = l16), requestAnimationFrame(() => {
      if (e7.isTyping || !x7 || (p7 == null ? void 0 : p7.activeElement) !== x7) return;
      let { selectionStart: L8, selectionEnd: W7 } = x7;
      Math.abs((W7 != null ? W7 : 0) - (L8 != null ? L8 : 0)) === 0 && L8 === 0 && x7.setSelectionRange(x7.value.length, x7.value.length);
    }));
  }, [F7, e7.comboboxState, p7, e7.isTyping]), m9(([l16], [U4]) => {
    if (l16 === 0 && U4 === 1) {
      if (e7.isTyping) return;
      let S8 = e7.inputRef.current;
      if (!S8) return;
      let H10 = S8.value, { selectionStart: x7, selectionEnd: L8, selectionDirection: W7 } = S8;
      S8.value = "", S8.value = H10, W7 !== null ? S8.setSelectionRange(x7, L8, W7) : S8.setSelectionRange(x7, L8);
    }
  }, [e7.comboboxState]);
  let v6 = (0, import_react81.useRef)(false), y10 = o4(() => {
    v6.current = true;
  }), A9 = o4(() => {
    w9.nextFrame(() => {
      v6.current = false;
    });
  }), R8 = o4((l16) => {
    switch (t12.setIsTyping(true), l16.key) {
      case o8.Enter:
        if (e7.comboboxState !== 0 || v6.current) return;
        if (l16.preventDefault(), l16.stopPropagation(), e7.activeOptionIndex === null) {
          t12.closeCombobox();
          return;
        }
        t12.selectActiveOption(), e7.mode === 0 && t12.closeCombobox();
        break;
      case o8.ArrowDown:
        return l16.preventDefault(), l16.stopPropagation(), u2(e7.comboboxState, { [0]: () => t12.goToOption(c9.Next), [1]: () => t12.openCombobox() });
      case o8.ArrowUp:
        return l16.preventDefault(), l16.stopPropagation(), u2(e7.comboboxState, { [0]: () => t12.goToOption(c9.Previous), [1]: () => {
          (0, import_react_dom6.flushSync)(() => t12.openCombobox()), e7.value || t12.goToOption(c9.Last);
        } });
      case o8.Home:
        if (l16.shiftKey) break;
        return l16.preventDefault(), l16.stopPropagation(), t12.goToOption(c9.First);
      case o8.PageUp:
        return l16.preventDefault(), l16.stopPropagation(), t12.goToOption(c9.First);
      case o8.End:
        if (l16.shiftKey) break;
        return l16.preventDefault(), l16.stopPropagation(), t12.goToOption(c9.Last);
      case o8.PageDown:
        return l16.preventDefault(), l16.stopPropagation(), t12.goToOption(c9.Last);
      case o8.Escape:
        return e7.comboboxState !== 0 ? void 0 : (l16.preventDefault(), e7.optionsRef.current && !e7.optionsPropsRef.current.static && l16.stopPropagation(), e7.mode === 0 && e7.value === null && M8(), t12.closeCombobox());
      case o8.Tab:
        if (e7.comboboxState !== 0) return;
        e7.mode === 0 && e7.activationTrigger !== 1 && t12.selectActiveOption(), t12.closeCombobox();
        break;
    }
  }), h8 = o4((l16) => {
    s14 == null || s14(l16), e7.mode === 0 && l16.target.value === "" && M8(), t12.openCombobox();
  }), O5 = o4((l16) => {
    var S8, H10, x7;
    let U4 = (S8 = l16.relatedTarget) != null ? S8 : t8.find((L8) => L8 !== l16.currentTarget);
    if (!((H10 = e7.optionsRef.current) != null && H10.contains(U4)) && !((x7 = e7.buttonRef.current) != null && x7.contains(U4)) && e7.comboboxState === 0) return l16.preventDefault(), e7.mode === 0 && e7.value === null && M8(), t12.closeCombobox();
  }), G10 = o4((l16) => {
    var S8, H10, x7;
    let U4 = (S8 = l16.relatedTarget) != null ? S8 : t8.find((L8) => L8 !== l16.currentTarget);
    (H10 = e7.buttonRef.current) != null && H10.contains(U4) || (x7 = e7.optionsRef.current) != null && x7.contains(U4) || e7.disabled || e7.immediate && e7.comboboxState !== 0 && ((0, import_react_dom6.flushSync)(() => t12.openCombobox()), t12.setActivationTrigger(1));
  }), J6 = I2(), Q4 = G(), { isFocused: I7, focusProps: B4 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n13 }), { isHovered: k5, hoverProps: K4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a18 }), i15 = (0, import_react81.useMemo)(() => ({ open: e7.comboboxState === 0, disabled: a18, hover: k5, focus: I7, autofocus: n13 }), [e7, k5, I7, n13, a18]), N5 = D({ ref: _5, id: f20, role: "combobox", type: T10, "aria-controls": (q5 = e7.optionsRef.current) == null ? void 0 : q5.id, "aria-expanded": e7.comboboxState === 0, "aria-activedescendant": e7.activeOptionIndex === null ? void 0 : e7.virtual ? (Y5 = e7.options.find((l16) => !l16.dataRef.current.disabled && e7.compare(l16.dataRef.current.value, e7.virtual.options[e7.activeOptionIndex]))) == null ? void 0 : Y5.id : (E11 = e7.options[e7.activeOptionIndex]) == null ? void 0 : E11.id, "aria-labelledby": J6, "aria-describedby": Q4, "aria-autocomplete": "list", defaultValue: (le4 = (ae5 = o19.defaultValue) != null ? ae5 : e7.defaultValue !== void 0 ? u17 == null ? void 0 : u17(e7.defaultValue) : null) != null ? le4 : e7.defaultValue, disabled: a18 || void 0, autoFocus: n13, onCompositionStart: y10, onCompositionEnd: A9, onKeyDown: R8, onChange: h8, onFocus: G10, onBlur: O5 }, B4, K4);
  return H({ ourProps: N5, theirProps: C7, slot: i15, defaultTag: Do, name: "Combobox.Input" });
}
var Fo = "button";
function Vo(o19, r17) {
  var h8;
  let e7 = oe("Combobox.Button"), t12 = re("Combobox.Button"), c14 = y(e7.buttonRef, r17), d12 = (0, import_react46.useId)(), { id: f20 = `headlessui-combobox-button-${d12}`, disabled: s14 = e7.disabled || false, autoFocus: u17 = false, ...a18 } = o19, n13 = f10(e7.inputRef), T10 = o4((O5) => {
    switch (O5.key) {
      case o8.Space:
      case o8.Enter:
        O5.preventDefault(), O5.stopPropagation(), e7.comboboxState === 1 && (0, import_react_dom6.flushSync)(() => t12.openCombobox()), n13();
        return;
      case o8.ArrowDown:
        O5.preventDefault(), O5.stopPropagation(), e7.comboboxState === 1 && ((0, import_react_dom6.flushSync)(() => t12.openCombobox()), e7.value || t12.goToOption(c9.First)), n13();
        return;
      case o8.ArrowUp:
        O5.preventDefault(), O5.stopPropagation(), e7.comboboxState === 1 && ((0, import_react_dom6.flushSync)(() => t12.openCombobox()), e7.value || t12.goToOption(c9.Last)), n13();
        return;
      case o8.Escape:
        if (e7.comboboxState !== 0) return;
        O5.preventDefault(), e7.optionsRef.current && !e7.optionsPropsRef.current.static && O5.stopPropagation(), (0, import_react_dom6.flushSync)(() => t12.closeCombobox()), n13();
        return;
      default:
        return;
    }
  }), C7 = o4((O5) => {
    O5.preventDefault(), !r5(O5.currentTarget) && (O5.button === g2.Left && (e7.comboboxState === 0 ? t12.closeCombobox() : t12.openCombobox()), n13());
  }), _5 = I2([f20]), { isFocusVisible: p7, focusProps: w9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: u17 }), { isHovered: M8, hoverProps: F7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: s14 }), { pressed: v6, pressProps: y10 } = w({ disabled: s14 }), A9 = (0, import_react81.useMemo)(() => ({ open: e7.comboboxState === 0, active: v6 || e7.comboboxState === 0, disabled: s14, value: e7.value, hover: M8, focus: p7 }), [e7, M8, p7, v6, s14]), R8 = D({ ref: c14, id: f20, type: T7(o19, e7.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (h8 = e7.optionsRef.current) == null ? void 0 : h8.id, "aria-expanded": e7.comboboxState === 0, "aria-labelledby": _5, disabled: s14 || void 0, autoFocus: u17, onMouseDown: C7, onKeyDown: T10 }, w9, F7, y10);
  return H({ ourProps: R8, theirProps: a18, slot: A9, defaultTag: Fo, name: "Combobox.Button" });
}
var Lo = "div";
var wo = M.RenderStrategy | M.Static;
function Bo(o19, r17) {
  var N5, q5, Y5;
  let e7 = (0, import_react46.useId)(), { id: t12 = `headlessui-combobox-options-${e7}`, hold: c14 = false, anchor: d12, portal: f20 = false, modal: s14 = true, transition: u17 = false, ...a18 } = o19, n13 = oe("Combobox.Options"), T10 = re("Combobox.Options"), C7 = xe(d12);
  C7 && (f20 = true);
  let [_5, p7] = Re2(C7), w9 = be(), M8 = y(n13.optionsRef, r17, C7 ? _5 : null), F7 = n9(n13.optionsRef), v6 = u13(), [y10, A9] = V2(u17, n13.optionsRef, v6 !== null ? (v6 & i11.Open) === i11.Open : n13.comboboxState === 0);
  m6(y10, n13.inputRef, T10.closeCombobox);
  let R8 = n13.__demoMode ? false : s14 && n13.comboboxState === 0;
  f11(R8, F7);
  let h8 = n13.__demoMode ? false : s14 && n13.comboboxState === 0;
  y3(h8, { allowed: o4(() => [n13.inputRef.current, n13.buttonRef.current, n13.optionsRef.current]) }), n(() => {
    var E11;
    n13.optionsPropsRef.current.static = (E11 = o19.static) != null ? E11 : false;
  }, [n13.optionsPropsRef, o19.static]), n(() => {
    n13.optionsPropsRef.current.hold = c14;
  }, [n13.optionsPropsRef, c14]), F4(n13.comboboxState === 0, { container: n13.optionsRef.current, accept(E11) {
    return E11.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : E11.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(E11) {
    E11.setAttribute("role", "none");
  } });
  let O5 = I2([(N5 = n13.buttonRef.current) == null ? void 0 : N5.id]), G10 = (0, import_react81.useMemo)(() => ({ open: n13.comboboxState === 0, option: void 0 }), [n13.comboboxState]), J6 = o4(() => {
    T10.setActivationTrigger(0);
  }), Q4 = o4((E11) => {
    E11.preventDefault(), T10.setActivationTrigger(0);
  }), I7 = D(C7 ? w9() : {}, { "aria-labelledby": O5, role: "listbox", "aria-multiselectable": n13.mode === 1 ? true : void 0, id: t12, ref: M8, style: { ...a18.style, ...p7, "--input-width": f7(n13.inputRef, true).width, "--button-width": f7(n13.buttonRef, true).width }, onWheel: n13.activationTrigger === 0 ? void 0 : J6, onMouseDown: Q4, ...A3(A9) }), B4 = y10 && n13.comboboxState === 1, k5 = l9(B4, (q5 = n13.virtual) == null ? void 0 : q5.options), K4 = l9(B4, n13.value), i15 = o4((E11) => n13.compare(K4, E11));
  if (n13.virtual) {
    if (k5 === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(a18, { children: import_react81.default.createElement(ie2.Provider, { value: k5 !== n13.virtual.options ? { ...n13, virtual: { ...n13.virtual, options: k5 } } : n13 }, import_react81.default.createElement(Io, { slot: G10 }, a18.children)) });
  }
  return import_react81.default.createElement(te, { enabled: f20 ? o19.static || y10 : false }, import_react81.default.createElement(ie2.Provider, { value: n13.mode === 1 ? n13 : { ...n13, isSelected: i15 } }, H({ ourProps: I7, theirProps: { ...a18, children: import_react81.default.createElement(f13, { freeze: B4 }, typeof a18.children == "function" ? (Y5 = a18.children) == null ? void 0 : Y5.call(a18, G10) : a18.children) }, slot: G10, defaultTag: Lo, features: wo, visible: y10, name: "Combobox.Options" })));
}
var ko = "div";
function No(o19, r17) {
  var I7, B4, k5, K4;
  let e7 = oe("Combobox.Option"), t12 = re("Combobox.Option"), c14 = (0, import_react46.useId)(), { id: d12 = `headlessui-combobox-option-${c14}`, value: f20, disabled: s14 = (k5 = (B4 = (I7 = e7.virtual) == null ? void 0 : I7.disabled) == null ? void 0 : B4.call(I7, f20)) != null ? k5 : false, order: u17 = null, ...a18 } = o19, n13 = f10(e7.inputRef), T10 = e7.virtual ? e7.activeOptionIndex === e7.calculateIndex(f20) : e7.activeOptionIndex === null ? false : ((K4 = e7.options[e7.activeOptionIndex]) == null ? void 0 : K4.id) === d12, C7 = e7.isSelected(f20), _5 = (0, import_react81.useRef)(null), p7 = s3({ disabled: s14, value: f20, domRef: _5, order: u17 }), w9 = (0, import_react81.useContext)(Le), M8 = y(r17, _5, w9 ? w9.measureElement : null), F7 = o4(() => {
    t12.setIsTyping(false), t12.onChange(f20);
  });
  n(() => t12.registerOption(d12, p7), [p7, d12]);
  let v6 = (0, import_react81.useRef)(!(e7.virtual || e7.__demoMode));
  n(() => {
    if (!e7.virtual && !e7.__demoMode) return o2().requestAnimationFrame(() => {
      v6.current = true;
    });
  }, [e7.virtual, e7.__demoMode]), n(() => {
    if (v6.current && e7.comboboxState === 0 && T10 && e7.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var i15, N5;
      (N5 = (i15 = _5.current) == null ? void 0 : i15.scrollIntoView) == null || N5.call(i15, { block: "nearest" });
    });
  }, [_5, T10, e7.comboboxState, e7.activationTrigger, e7.activeOptionIndex]);
  let y10 = o4((i15) => {
    i15.preventDefault(), i15.button === g2.Left && (s14 || (F7(), n8() || requestAnimationFrame(() => n13()), e7.mode === 0 && t12.closeCombobox()));
  }), A9 = o4(() => {
    if (s14) return t12.goToOption(c9.Nothing);
    let i15 = e7.calculateIndex(f20);
    t12.goToOption(c9.Specific, i15);
  }), R8 = u11(), h8 = o4((i15) => R8.update(i15)), O5 = o4((i15) => {
    if (!R8.wasMoved(i15) || s14 || T10) return;
    let N5 = e7.calculateIndex(f20);
    t12.goToOption(c9.Specific, N5, 0);
  }), G10 = o4((i15) => {
    R8.wasMoved(i15) && (s14 || T10 && (e7.optionsPropsRef.current.hold || t12.goToOption(c9.Nothing)));
  }), J6 = (0, import_react81.useMemo)(() => ({ active: T10, focus: T10, selected: C7, disabled: s14 }), [T10, C7, s14]);
  return H({ ourProps: { id: d12, ref: M8, role: "option", tabIndex: s14 === true ? void 0 : -1, "aria-disabled": s14 === true ? true : void 0, "aria-selected": C7, disabled: void 0, onMouseDown: y10, onFocus: A9, onPointerEnter: h8, onMouseEnter: h8, onPointerMove: O5, onMouseMove: O5, onPointerLeave: G10, onMouseLeave: G10 }, theirProps: a18, slot: J6, defaultTag: ko, name: "Combobox.Option" });
}
var Uo = W(ho);
var Ho = W(Vo);
var Go = W(Mo);
var jo = K;
var zo = W(Bo);
var Ko = W(No);
var Nt = Object.assign(Uo, { Input: Go, Button: Ho, Label: jo, Options: zo, Option: Ko });

// node_modules/@headlessui/react/dist/components/data-interactive/data-interactive.js
var import_react82 = __toESM(require_react(), 1);
var E9 = import_react82.Fragment;
function _4(o19, n13) {
  let { ...p7 } = o19, e7 = false, { isFocusVisible: t12, focusProps: s14 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), { isHovered: r17, hoverProps: i15 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: a18, pressProps: T10 } = w({ disabled: e7 }), l16 = D({ ref: n13 }, s14, i15, T10), m12 = (0, import_react82.useMemo)(() => ({ hover: r17, focus: t12, active: a18 }), [r17, t12, a18]);
  return H({ ourProps: l16, theirProps: p7, slot: m12, defaultTag: E9, name: "DataInteractive" });
}
var C3 = W(_4);

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react89 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-escape.js
function a12(o19, r17 = typeof document != "undefined" ? document.defaultView : null, t12) {
  let n13 = x(o19, "escape");
  E5(r17, "keydown", (e7) => {
    n13 && (e7.defaultPrevented || e7.key === o8.Escape && t12(e7));
  });
}

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
var import_react83 = __toESM(require_react(), 1);
function f17() {
  var t12;
  let [e7] = (0, import_react83.useState)(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o19, c14] = (0, import_react83.useState)((t12 = e7 == null ? void 0 : e7.matches) != null ? t12 : false);
  return n(() => {
    if (!e7) return;
    function n13(r17) {
      c14(r17.matches);
    }
    return e7.addEventListener("change", n13), () => e7.removeEventListener("change", n13);
  }, [e7]), o19;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react84 = __toESM(require_react(), 1);
function j6({ defaultContainers: o19 = [], portals: r17, mainTreeNodeRef: u17 } = {}) {
  var f20;
  let t12 = (0, import_react84.useRef)((f20 = u17 == null ? void 0 : u17.current) != null ? f20 : null), l16 = n9(t12), c14 = o4(() => {
    var i15, s14, a18;
    let n13 = [];
    for (let e7 of o19) e7 !== null && (e7 instanceof HTMLElement ? n13.push(e7) : "current" in e7 && e7.current instanceof HTMLElement && n13.push(e7.current));
    if (r17 != null && r17.current) for (let e7 of r17.current) n13.push(e7);
    for (let e7 of (i15 = l16 == null ? void 0 : l16.querySelectorAll("html > *, body > *")) != null ? i15 : []) e7 !== document.body && e7 !== document.head && e7 instanceof HTMLElement && e7.id !== "headlessui-portal-root" && (e7.contains(t12.current) || e7.contains((a18 = (s14 = t12.current) == null ? void 0 : s14.getRootNode()) == null ? void 0 : a18.host) || n13.some((L8) => e7.contains(L8)) || n13.push(e7));
    return n13;
  });
  return { resolveContainers: c14, contains: o4((n13) => c14().some((i15) => i15.contains(n13))), mainTreeNodeRef: t12, MainTreeNode: (0, import_react84.useMemo)(() => function() {
    return u17 != null ? null : import_react84.default.createElement(T2, { features: s4.Hidden, ref: t12 });
  }, [t12, u17]) };
}
function y7() {
  let o19 = (0, import_react84.useRef)(null);
  return { mainTreeNodeRef: o19, MainTreeNode: (0, import_react84.useMemo)(() => function() {
    return import_react84.default.createElement(T2, { features: s4.Hidden, ref: o19 });
  }, [o19]) };
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react87 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react85 = __toESM(require_react(), 1);
function f18() {
  let e7 = (0, import_react85.useRef)(false);
  return n(() => (e7.current = true, () => {
    e7.current = false;
  }), []), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react86 = __toESM(require_react(), 1);
var a13 = ((r17) => (r17[r17.Forwards = 0] = "Forwards", r17[r17.Backwards = 1] = "Backwards", r17))(a13 || {});
function u16() {
  let e7 = (0, import_react86.useRef)(0);
  return s6(true, "keydown", (r17) => {
    r17.key === "Tab" && (e7.current = r17.shiftKey ? 1 : 0);
  }, true), e7;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function U3(o19) {
  if (!o19) return /* @__PURE__ */ new Set();
  if (typeof o19 == "function") return new Set(o19());
  let e7 = /* @__PURE__ */ new Set();
  for (let t12 of o19.current) t12.current instanceof HTMLElement && e7.add(t12.current);
  return e7;
}
var Y = "div";
var x2 = ((n13) => (n13[n13.None = 0] = "None", n13[n13.InitialFocus = 1] = "InitialFocus", n13[n13.TabLock = 2] = "TabLock", n13[n13.FocusLock = 4] = "FocusLock", n13[n13.RestoreFocus = 8] = "RestoreFocus", n13[n13.AutoFocus = 16] = "AutoFocus", n13))(x2 || {});
function Z2(o19, e7) {
  let t12 = (0, import_react87.useRef)(null), r17 = y(t12, e7), { initialFocus: s14, initialFocusFallback: a18, containers: n13, features: u17 = 15, ...f20 } = o19;
  l11() || (u17 = 0);
  let l16 = n9(t12);
  w6(u17, { ownerDocument: l16 });
  let i15 = ee2(u17, { ownerDocument: l16, container: t12, initialFocus: s14, initialFocusFallback: a18 });
  te2(u17, { ownerDocument: l16, container: t12, containers: n13, previousActiveElement: i15 });
  let R8 = u16(), g6 = o4((c14) => {
    let m12 = t12.current;
    if (!m12) return;
    ((B4) => B4())(() => {
      u2(R8.current, { [a13.Forwards]: () => {
        P6(m12, F.First, { skipElements: [c14.relatedTarget, a18] });
      }, [a13.Backwards]: () => {
        P6(m12, F.Last, { skipElements: [c14.relatedTarget, a18] });
      } });
    });
  }), v6 = x(!!(u17 & 2), "focus-trap#tab-lock"), N5 = p(), F7 = (0, import_react87.useRef)(false), k5 = { ref: r17, onKeyDown(c14) {
    c14.key == "Tab" && (F7.current = true, N5.requestAnimationFrame(() => {
      F7.current = false;
    }));
  }, onBlur(c14) {
    if (!(u17 & 4)) return;
    let m12 = U3(n13);
    t12.current instanceof HTMLElement && m12.add(t12.current);
    let d12 = c14.relatedTarget;
    d12 instanceof HTMLElement && d12.dataset.headlessuiFocusGuard !== "true" && (I5(m12, d12) || (F7.current ? P6(t12.current, u2(R8.current, { [a13.Forwards]: () => F.Next, [a13.Backwards]: () => F.Previous }) | F.WrapAround, { relativeTo: c14.target }) : c14.target instanceof HTMLElement && I3(c14.target)));
  } };
  return import_react87.default.createElement(import_react87.default.Fragment, null, v6 && import_react87.default.createElement(T2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g6, features: s4.Focusable }), H({ ourProps: k5, theirProps: f20, defaultTag: Y, name: "FocusTrap" }), v6 && import_react87.default.createElement(T2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g6, features: s4.Focusable }));
}
var $2 = W(Z2);
var Fe2 = Object.assign($2, { features: x2 });
function D8(o19 = true) {
  let e7 = (0, import_react87.useRef)(t8.slice());
  return m9(([t12], [r17]) => {
    r17 === true && t12 === false && t(() => {
      e7.current.splice(0);
    }), r17 === false && t12 === true && (e7.current = t8.slice());
  }, [o19, t8, e7]), o4(() => {
    var t12;
    return (t12 = e7.current.find((r17) => r17 != null && r17.isConnected)) != null ? t12 : null;
  });
}
function w6(o19, { ownerDocument: e7 }) {
  let t12 = !!(o19 & 8), r17 = D8(t12);
  m9(() => {
    t12 || (e7 == null ? void 0 : e7.activeElement) === (e7 == null ? void 0 : e7.body) && I3(r17());
  }, [t12]), c10(() => {
    t12 && I3(r17());
  });
}
function ee2(o19, { ownerDocument: e7, container: t12, initialFocus: r17, initialFocusFallback: s14 }) {
  let a18 = (0, import_react87.useRef)(null), n13 = x(!!(o19 & 1), "focus-trap#initial-focus"), u17 = f18();
  return m9(() => {
    if (o19 === 0) return;
    if (!n13) {
      s14 != null && s14.current && I3(s14.current);
      return;
    }
    let f20 = t12.current;
    f20 && t(() => {
      if (!u17.current) return;
      let l16 = e7 == null ? void 0 : e7.activeElement;
      if (r17 != null && r17.current) {
        if ((r17 == null ? void 0 : r17.current) === l16) {
          a18.current = l16;
          return;
        }
      } else if (f20.contains(l16)) {
        a18.current = l16;
        return;
      }
      if (r17 != null && r17.current) I3(r17.current);
      else {
        if (o19 & 16) {
          if (P6(f20, F.First | F.AutoFocus) !== T6.Error) return;
        } else if (P6(f20, F.First) !== T6.Error) return;
        if (s14 != null && s14.current && (I3(s14.current), (e7 == null ? void 0 : e7.activeElement) === s14.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a18.current = e7 == null ? void 0 : e7.activeElement;
    });
  }, [s14, n13, o19]), a18;
}
function te2(o19, { ownerDocument: e7, container: t12, containers: r17, previousActiveElement: s14 }) {
  let a18 = f18(), n13 = !!(o19 & 4);
  E5(e7 == null ? void 0 : e7.defaultView, "focus", (u17) => {
    if (!n13 || !a18.current) return;
    let f20 = U3(r17);
    t12.current instanceof HTMLElement && f20.add(t12.current);
    let l16 = s14.current;
    if (!l16) return;
    let i15 = u17.target;
    i15 && i15 instanceof HTMLElement ? I5(f20, i15) ? (s14.current = i15, I3(i15)) : (u17.preventDefault(), u17.stopPropagation(), I3(l16)) : I3(s14.current);
  }, true);
}
function I5(o19, e7) {
  for (let t12 of o19) if (t12.contains(e7)) return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
var import_react88 = __toESM(require_react(), 1);
function le(e7) {
  var t12;
  return !!(e7.enter || e7.enterFrom || e7.enterTo || e7.leave || e7.leaveFrom || e7.leaveTo) || ((t12 = e7.as) != null ? t12 : ue2) !== import_react88.Fragment || import_react88.default.Children.count(e7.children) === 1;
}
var V3 = (0, import_react88.createContext)(null);
V3.displayName = "TransitionContext";
var xe3 = ((i15) => (i15.Visible = "visible", i15.Hidden = "hidden", i15))(xe3 || {});
function Ne2() {
  let e7 = (0, import_react88.useContext)(V3);
  if (e7 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e7;
}
function _e() {
  let e7 = (0, import_react88.useContext)(w7);
  if (e7 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e7;
}
var w7 = (0, import_react88.createContext)(null);
w7.displayName = "NestingContext";
function M6(e7) {
  return "children" in e7 ? M6(e7.children) : e7.current.filter(({ el: t12 }) => t12.current !== null).filter(({ state: t12 }) => t12 === "visible").length > 0;
}
function ae2(e7, t12) {
  let i15 = s3(e7), l16 = (0, import_react88.useRef)([]), S8 = f18(), E11 = p(), u17 = o4((s14, r17 = O.Hidden) => {
    let n13 = l16.current.findIndex(({ el: o19 }) => o19 === s14);
    n13 !== -1 && (u2(r17, { [O.Unmount]() {
      l16.current.splice(n13, 1);
    }, [O.Hidden]() {
      l16.current[n13].state = "hidden";
    } }), E11.microTask(() => {
      var o19;
      !M6(l16) && S8.current && ((o19 = i15.current) == null || o19.call(i15));
    }));
  }), y10 = o4((s14) => {
    let r17 = l16.current.find(({ el: n13 }) => n13 === s14);
    return r17 ? r17.state !== "visible" && (r17.state = "visible") : l16.current.push({ el: s14, state: "visible" }), () => u17(s14, O.Unmount);
  }), c14 = (0, import_react88.useRef)([]), f20 = (0, import_react88.useRef)(Promise.resolve()), p7 = (0, import_react88.useRef)({ enter: [], leave: [] }), m12 = o4((s14, r17, n13) => {
    c14.current.splice(0), t12 && (t12.chains.current[r17] = t12.chains.current[r17].filter(([o19]) => o19 !== s14)), t12 == null || t12.chains.current[r17].push([s14, new Promise((o19) => {
      c14.current.push(o19);
    })]), t12 == null || t12.chains.current[r17].push([s14, new Promise((o19) => {
      Promise.all(p7.current[r17].map(([R8, x7]) => x7)).then(() => o19());
    })]), r17 === "enter" ? f20.current = f20.current.then(() => t12 == null ? void 0 : t12.wait.current).then(() => n13(r17)) : n13(r17);
  }), C7 = o4((s14, r17, n13) => {
    Promise.all(p7.current[r17].splice(0).map(([o19, R8]) => R8)).then(() => {
      var o19;
      (o19 = c14.current.shift()) == null || o19();
    }).then(() => n13(r17));
  });
  return (0, import_react88.useMemo)(() => ({ children: l16, register: y10, unregister: u17, onStart: m12, onStop: C7, wait: f20, chains: p7 }), [y10, u17, l16, m12, C7, p7, f20]);
}
var ue2 = import_react88.Fragment;
var Te2 = M.RenderStrategy;
function De(e7, t12) {
  var Z6, $5;
  let { transition: i15 = true, beforeEnter: l16, afterEnter: S8, beforeLeave: E11, afterLeave: u17, enter: y10, enterFrom: c14, enterTo: f20, entered: p7, leave: m12, leaveFrom: C7, leaveTo: s14, ...r17 } = e7, n13 = (0, import_react88.useRef)(null), o19 = le(e7), R8 = y(...o19 ? [n13, t12] : t12 === null ? [] : [t12]), x7 = (Z6 = r17.unmount) == null || Z6 ? O.Unmount : O.Hidden, { show: T10, appear: h8, initial: X3 } = Ne2(), [g6, U4] = (0, import_react88.useState)(T10 ? "visible" : "hidden"), z7 = _e(), { register: A9, unregister: I7 } = z7;
  n(() => A9(n13), [A9, n13]), n(() => {
    if (x7 === O.Hidden && n13.current) {
      if (T10 && g6 !== "visible") {
        U4("visible");
        return;
      }
      return u2(g6, { ["hidden"]: () => I7(n13), ["visible"]: () => A9(n13) });
    }
  }, [g6, n13, A9, I7, T10, x7]);
  let j10 = l11();
  n(() => {
    if (o19 && j10 && g6 === "visible" && n13.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [n13, g6, j10, o19]);
  let fe4 = X3 && !h8, K4 = h8 && T10 && X3, G10 = (0, import_react88.useRef)(false), F7 = ae2(() => {
    G10.current || (U4("hidden"), I7(n13));
  }, z7), Q4 = o4((B4) => {
    G10.current = true;
    let L8 = B4 ? "enter" : "leave";
    F7.onStart(n13, L8, (D11) => {
      D11 === "enter" ? l16 == null || l16() : D11 === "leave" && (E11 == null || E11());
    });
  }), Y5 = o4((B4) => {
    let L8 = B4 ? "enter" : "leave";
    G10.current = false, F7.onStop(n13, L8, (D11) => {
      D11 === "enter" ? S8 == null || S8() : D11 === "leave" && (u17 == null || u17());
    }), L8 === "leave" && !M6(F7) && (U4("hidden"), I7(n13));
  });
  (0, import_react88.useEffect)(() => {
    o19 && i15 || (Q4(T10), Y5(T10));
  }, [T10, o19, i15]);
  let me4 = /* @__PURE__ */ (() => !(!i15 || !o19 || !j10 || fe4))(), [, a18] = V2(me4, n13, T10, { start: Q4, end: Y5 }), ce5 = m2({ ref: R8, className: (($5 = t3(r17.className, K4 && y10, K4 && c14, a18.enter && y10, a18.enter && a18.closed && c14, a18.enter && !a18.closed && f20, a18.leave && m12, a18.leave && !a18.closed && C7, a18.leave && a18.closed && s14, !a18.transition && T10 && p7)) == null ? void 0 : $5.trim()) || void 0, ...A3(a18) }), _5 = 0;
  return g6 === "visible" && (_5 |= i11.Open), g6 === "hidden" && (_5 |= i11.Closed), a18.enter && (_5 |= i11.Opening), a18.leave && (_5 |= i11.Closing), import_react88.default.createElement(w7.Provider, { value: F7 }, import_react88.default.createElement(c8, { value: _5 }, H({ ourProps: ce5, theirProps: r17, defaultTag: ue2, features: Te2, visible: g6 === "visible", name: "Transition.Child" })));
}
function He2(e7, t12) {
  let { show: i15, appear: l16 = false, unmount: S8 = true, ...E11 } = e7, u17 = (0, import_react88.useRef)(null), y10 = le(e7), c14 = y(...y10 ? [u17, t12] : t12 === null ? [] : [t12]);
  l11();
  let f20 = u13();
  if (i15 === void 0 && f20 !== null && (i15 = (f20 & i11.Open) === i11.Open), i15 === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [p7, m12] = (0, import_react88.useState)(i15 ? "visible" : "hidden"), C7 = ae2(() => {
    i15 || m12("hidden");
  }), [s14, r17] = (0, import_react88.useState)(true), n13 = (0, import_react88.useRef)([i15]);
  n(() => {
    s14 !== false && n13.current[n13.current.length - 1] !== i15 && (n13.current.push(i15), r17(false));
  }, [n13, i15]);
  let o19 = (0, import_react88.useMemo)(() => ({ show: i15, appear: l16, initial: s14 }), [i15, l16, s14]);
  m6(i15, u17, () => m12("hidden")), n(() => {
    i15 ? m12("visible") : !M6(C7) && u17.current !== null && m12("hidden");
  }, [i15, C7]);
  let R8 = { unmount: S8 }, x7 = o4(() => {
    var h8;
    s14 && r17(false), (h8 = e7.beforeEnter) == null || h8.call(e7);
  }), T10 = o4(() => {
    var h8;
    s14 && r17(false), (h8 = e7.beforeLeave) == null || h8.call(e7);
  });
  return import_react88.default.createElement(w7.Provider, { value: C7 }, import_react88.default.createElement(V3.Provider, { value: o19 }, H({ ourProps: { ...R8, as: import_react88.Fragment, children: import_react88.default.createElement(de, { ref: c14, ...R8, ...E11, beforeEnter: x7, beforeLeave: T10 }) }, theirProps: {}, defaultTag: import_react88.Fragment, features: Te2, visible: p7 === "visible", name: "Transition" })));
}
function Ae(e7, t12) {
  let i15 = (0, import_react88.useContext)(V3) !== null, l16 = u13() !== null;
  return import_react88.default.createElement(import_react88.default.Fragment, null, !i15 && l16 ? import_react88.default.createElement(J3, { ref: t12, ...e7 }) : import_react88.default.createElement(de, { ref: t12, ...e7 }));
}
var J3 = W(He2);
var de = W(De);
var Ie = W(Ae);
var Xe = Object.assign(J3, { Child: Ie, Root: J3 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var xe4 = ((o19) => (o19[o19.Open = 0] = "Open", o19[o19.Closed = 1] = "Closed", o19))(xe4 || {});
var Le2 = ((t12) => (t12[t12.SetTitleId = 0] = "SetTitleId", t12))(Le2 || {});
var Oe = { [0](e7, t12) {
  return e7.titleId === t12.id ? e7 : { ...e7, titleId: t12.id };
} };
var I6 = (0, import_react89.createContext)(null);
I6.displayName = "DialogContext";
function x3(e7) {
  let t12 = (0, import_react89.useContext)(I6);
  if (t12 === null) {
    let o19 = new Error(`<${e7} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o19, x3), o19;
  }
  return t12;
}
function he(e7, t12) {
  return u2(t12.type, Oe, e7, t12);
}
var Y2 = W(function(t12, o19) {
  let l16 = (0, import_react46.useId)(), { id: a18 = `headlessui-dialog-${l16}`, open: i15, onClose: p7, initialFocus: d12, role: s14 = "dialog", autoFocus: C7 = true, __demoMode: f20 = false, ...G10 } = t12, L8 = (0, import_react89.useRef)(false);
  s14 = function() {
    return s14 === "dialog" || s14 === "alertdialog" ? s14 : (L8.current || (L8.current = true, console.warn(`Invalid role [${s14}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let g6 = u13();
  i15 === void 0 && g6 !== null && (i15 = (g6 & i11.Open) === i11.Open);
  let u17 = (0, import_react89.useRef)(null), J6 = y(u17, o19), F7 = n9(u17), T10 = i15 ? 0 : 1, [b6, K4] = (0, import_react89.useReducer)(he, { titleId: null, descriptionId: null, panelRef: (0, import_react89.createRef)() }), m12 = o4(() => p7(false)), k5 = o4((r17) => K4({ type: 0, id: r17 })), c14 = l11() ? T10 === 0 : false, [X3, V6] = ee(), q5 = { get current() {
    var r17;
    return (r17 = b6.panelRef.current) != null ? r17 : u17.current;
  } }, { resolveContainers: O5, mainTreeNodeRef: z7, MainTreeNode: Q4 } = j6({ portals: X3, defaultContainers: [q5] }), M8 = g6 !== null ? (g6 & i11.Closing) === i11.Closing : false;
  y3(f20 || M8 ? false : c14, { allowed: o4(() => {
    var r17, P8;
    return [(P8 = (r17 = u17.current) == null ? void 0 : r17.closest("[data-headlessui-portal]")) != null ? P8 : null];
  }), disallowed: o4(() => {
    var r17, P8;
    return [(P8 = (r17 = z7.current) == null ? void 0 : r17.closest("body > *:not(#headlessui-portal-root)")) != null ? P8 : null];
  }) }), F2(c14, O5, (r17) => {
    r17.preventDefault(), m12();
  }), a12(c14, F7 == null ? void 0 : F7.defaultView, (r17) => {
    r17.preventDefault(), r17.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m12();
  }), f11(f20 || M8 ? false : c14, F7, O5), m6(c14, u17, m12);
  let [Z6, ee7] = U(), te5 = (0, import_react89.useMemo)(() => [{ dialogState: T10, close: m12, setTitleId: k5 }, b6], [T10, b6, m12, k5]), w9 = (0, import_react89.useMemo)(() => ({ open: T10 === 0 }), [T10]), oe3 = { ref: J6, id: a18, role: s14, tabIndex: -1, "aria-modal": f20 ? void 0 : T10 === 0 ? true : void 0, "aria-labelledby": b6.titleId, "aria-describedby": Z6 }, ne2 = !f17(), D11 = x2.None;
  return c14 && !f20 && (D11 |= x2.RestoreFocus, D11 |= x2.TabLock, C7 && (D11 |= x2.AutoFocus), ne2 && (D11 |= x2.InitialFocus)), import_react89.default.createElement(s8, null, import_react89.default.createElement(l12, { force: true }, import_react89.default.createElement(te, null, import_react89.default.createElement(I6.Provider, { value: te5 }, import_react89.default.createElement(J2, { target: u17 }, import_react89.default.createElement(l12, { force: false }, import_react89.default.createElement(ee7, { slot: w9 }, import_react89.default.createElement(V6, null, import_react89.default.createElement(Fe2, { initialFocus: d12, initialFocusFallback: u17, containers: O5, features: D11 }, import_react89.default.createElement(u8, { value: m12 }, H({ ourProps: oe3, theirProps: G10, slot: w9, defaultTag: Se2, features: Ie2, visible: T10 === 0, name: "Dialog" })))))))))), import_react89.default.createElement(c2, null, import_react89.default.createElement(Q4, null)));
});
var Se2 = "div";
var Ie2 = M.RenderStrategy | M.Static;
function Ge(e7, t12) {
  let { transition: o19 = false, open: l16, ...a18 } = e7, i15 = u13(), p7 = e7.hasOwnProperty("open") || i15 !== null, d12 = e7.hasOwnProperty("onClose");
  if (!p7 && !d12) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p7) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d12) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i15 && typeof e7.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e7.open}`);
  if (typeof e7.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e7.onClose}`);
  return (l16 !== void 0 || o19) && !a18.static ? import_react89.default.createElement(Xe, { show: l16, transition: o19, unmount: a18.unmount }, import_react89.default.createElement(Y2, { ref: t12, ...a18 })) : import_react89.default.createElement(Y2, { ref: t12, open: l16, ...a18 });
}
var ke = "div";
function Me(e7, t12) {
  let o19 = (0, import_react46.useId)(), { id: l16 = `headlessui-dialog-panel-${o19}`, transition: a18 = false, ...i15 } = e7, [{ dialogState: p7 }, d12] = x3("Dialog.Panel"), s14 = y(t12, d12.panelRef), C7 = (0, import_react89.useMemo)(() => ({ open: p7 === 0 }), [p7]), f20 = o4((g6) => {
    g6.stopPropagation();
  });
  return import_react89.default.createElement(a18 ? Ie : import_react89.Fragment, null, H({ ourProps: { ref: s14, id: l16, onClick: f20 }, theirProps: i15, slot: C7, defaultTag: ke, name: "Dialog.Panel" }));
}
var we = "div";
function He3(e7, t12) {
  let { transition: o19 = false, ...l16 } = e7, [{ dialogState: a18 }] = x3("Dialog.Backdrop"), i15 = (0, import_react89.useMemo)(() => ({ open: a18 === 0 }), [a18]);
  return import_react89.default.createElement(o19 ? Ie : import_react89.Fragment, null, H({ ourProps: { ref: t12, "aria-hidden": true }, theirProps: l16, slot: i15, defaultTag: we, name: "Dialog.Backdrop" }));
}
var Be = "h2";
function Ue2(e7, t12) {
  let o19 = (0, import_react46.useId)(), { id: l16 = `headlessui-dialog-title-${o19}`, ...a18 } = e7, [{ dialogState: i15, setTitleId: p7 }] = x3("Dialog.Title"), d12 = y(t12);
  (0, import_react89.useEffect)(() => (p7(l16), () => p7(null)), [l16, p7]);
  let s14 = (0, import_react89.useMemo)(() => ({ open: i15 === 0 }), [i15]);
  return H({ ourProps: { ref: d12, id: l16 }, theirProps: a18, slot: s14, defaultTag: Be, name: "Dialog.Title" });
}
var Ne3 = W(Ge);
var We = W(Me);
var ct = W(He3);
var $e = W(Ue2);
var Dt = w3;
var Pt = Object.assign(Ne3, { Panel: We, Title: $e, Description: w3 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react91 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react90 = __toESM(require_react(), 1);
var t11;
var a14 = (t11 = import_react90.default.startTransition) != null ? t11 : function(i15) {
  i15();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var de2 = ((r17) => (r17[r17.Open = 0] = "Open", r17[r17.Closed = 1] = "Closed", r17))(de2 || {});
var fe2 = ((t12) => (t12[t12.ToggleDisclosure = 0] = "ToggleDisclosure", t12[t12.CloseDisclosure = 1] = "CloseDisclosure", t12[t12.SetButtonId = 2] = "SetButtonId", t12[t12.SetPanelId = 3] = "SetPanelId", t12[t12.LinkPanel = 4] = "LinkPanel", t12[t12.UnlinkPanel = 5] = "UnlinkPanel", t12))(fe2 || {});
var Te3 = { [0]: (e7) => ({ ...e7, disclosureState: u2(e7.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e7) => e7.disclosureState === 1 ? e7 : { ...e7, disclosureState: 1 }, [4](e7) {
  return e7.linkedPanel === true ? e7 : { ...e7, linkedPanel: true };
}, [5](e7) {
  return e7.linkedPanel === false ? e7 : { ...e7, linkedPanel: false };
}, [2](e7, n13) {
  return e7.buttonId === n13.buttonId ? e7 : { ...e7, buttonId: n13.buttonId };
}, [3](e7, n13) {
  return e7.panelId === n13.panelId ? e7 : { ...e7, panelId: n13.panelId };
} };
var M7 = (0, import_react91.createContext)(null);
M7.displayName = "DisclosureContext";
function F5(e7) {
  let n13 = (0, import_react91.useContext)(M7);
  if (n13 === null) {
    let r17 = new Error(`<${e7} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r17, F5), r17;
  }
  return n13;
}
var k3 = (0, import_react91.createContext)(null);
k3.displayName = "DisclosureAPIContext";
function V4(e7) {
  let n13 = (0, import_react91.useContext)(k3);
  if (n13 === null) {
    let r17 = new Error(`<${e7} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r17, V4), r17;
  }
  return n13;
}
var H6 = (0, import_react91.createContext)(null);
H6.displayName = "DisclosurePanelContext";
function De2() {
  return (0, import_react91.useContext)(H6);
}
function Pe(e7, n13) {
  return u2(n13.type, Te3, e7, n13);
}
var ye2 = import_react91.Fragment;
function me(e7, n13) {
  let { defaultOpen: r17 = false, ...c14 } = e7, s14 = (0, import_react91.useRef)(null), d12 = y(n13, T3((u17) => {
    s14.current = u17;
  }, e7.as === void 0 || e7.as === import_react91.Fragment)), t12 = (0, import_react91.useRef)(null), o19 = (0, import_react91.useRef)(null), l16 = (0, import_react91.useReducer)(Pe, { disclosureState: r17 ? 0 : 1, linkedPanel: false, buttonRef: o19, panelRef: t12, buttonId: null, panelId: null }), [{ disclosureState: f20, buttonId: i15 }, T10] = l16, p7 = o4((u17) => {
    T10({ type: 1 });
    let P8 = u(s14);
    if (!P8 || !i15) return;
    let y10 = (() => u17 ? u17 instanceof HTMLElement ? u17 : u17.current instanceof HTMLElement ? u17.current : P8.getElementById(i15) : P8.getElementById(i15))();
    y10 == null || y10.focus();
  }), E11 = (0, import_react91.useMemo)(() => ({ close: p7 }), [p7]), D11 = (0, import_react91.useMemo)(() => ({ open: f20 === 0, close: p7 }), [f20, p7]), g6 = { ref: d12 };
  return import_react91.default.createElement(M7.Provider, { value: l16 }, import_react91.default.createElement(k3.Provider, { value: E11 }, import_react91.default.createElement(u8, { value: p7 }, import_react91.default.createElement(c8, { value: u2(f20, { [0]: i11.Open, [1]: i11.Closed }) }, H({ ourProps: g6, theirProps: c14, slot: D11, defaultTag: ye2, name: "Disclosure" })))));
}
var Ee = "button";
function ge(e7, n13) {
  let r17 = (0, import_react46.useId)(), { id: c14 = `headlessui-disclosure-button-${r17}`, disabled: s14 = false, autoFocus: d12 = false, ...t12 } = e7, [o19, l16] = F5("Disclosure.Button"), f20 = De2(), i15 = f20 === null ? false : f20 === o19.panelId, T10 = (0, import_react91.useRef)(null), p7 = y(T10, n13, i15 ? null : o19.buttonRef), E11 = I();
  (0, import_react91.useEffect)(() => {
    if (!i15) return l16({ type: 2, buttonId: c14 }), () => {
      l16({ type: 2, buttonId: null });
    };
  }, [c14, l16, i15]);
  let D11 = o4((a18) => {
    var S8;
    if (i15) {
      if (o19.disclosureState === 1) return;
      switch (a18.key) {
        case o8.Space:
        case o8.Enter:
          a18.preventDefault(), a18.stopPropagation(), l16({ type: 0 }), (S8 = o19.buttonRef.current) == null || S8.focus();
          break;
      }
    } else switch (a18.key) {
      case o8.Space:
      case o8.Enter:
        a18.preventDefault(), a18.stopPropagation(), l16({ type: 0 });
        break;
    }
  }), g6 = o4((a18) => {
    switch (a18.key) {
      case o8.Space:
        a18.preventDefault();
        break;
    }
  }), u17 = o4((a18) => {
    var S8;
    r5(a18.currentTarget) || s14 || (i15 ? (l16({ type: 0 }), (S8 = o19.buttonRef.current) == null || S8.focus()) : l16({ type: 0 }));
  }), { isFocusVisible: P8, focusProps: y10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: d12 }), { isHovered: U4, hoverProps: h8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: s14 }), { pressed: N5, pressProps: w9 } = w({ disabled: s14 }), q5 = (0, import_react91.useMemo)(() => ({ open: o19.disclosureState === 0, hover: U4, active: N5, disabled: s14, focus: P8, autofocus: d12 }), [o19, U4, N5, P8, s14, d12]), G10 = T7(e7, T10), z7 = i15 ? D({ ref: p7, type: G10, disabled: s14 || void 0, autoFocus: d12, onKeyDown: D11, onClick: u17 }, y10, h8, w9) : D({ ref: p7, id: c14, type: G10, "aria-expanded": o19.disclosureState === 0, "aria-controls": o19.linkedPanel ? o19.panelId : void 0, disabled: s14 || void 0, autoFocus: d12, onKeyDown: D11, onKeyUp: g6, onClick: u17 }, y10, h8, w9);
  return H({ mergeRefs: E11, ourProps: z7, theirProps: t12, slot: q5, defaultTag: Ee, name: "Disclosure.Button" });
}
var Se3 = "div";
var be3 = M.RenderStrategy | M.Static;
function Re4(e7, n13) {
  let r17 = (0, import_react46.useId)(), { id: c14 = `headlessui-disclosure-panel-${r17}`, transition: s14 = false, ...d12 } = e7, [t12, o19] = F5("Disclosure.Panel"), { close: l16 } = V4("Disclosure.Panel"), f20 = I(), i15 = y(n13, t12.panelRef, (u17) => {
    a14(() => o19({ type: u17 ? 4 : 5 }));
  });
  (0, import_react91.useEffect)(() => (o19({ type: 3, panelId: c14 }), () => {
    o19({ type: 3, panelId: null });
  }), [c14, o19]);
  let T10 = u13(), [p7, E11] = V2(s14, t12.panelRef, T10 !== null ? (T10 & i11.Open) === i11.Open : t12.disclosureState === 0), D11 = (0, import_react91.useMemo)(() => ({ open: t12.disclosureState === 0, close: l16 }), [t12.disclosureState, l16]), g6 = { ref: i15, id: c14, ...A3(E11) };
  return import_react91.default.createElement(s8, null, import_react91.default.createElement(H6.Provider, { value: t12.panelId }, H({ mergeRefs: f20, ourProps: g6, theirProps: d12, slot: D11, defaultTag: Se3, features: be3, visible: p7, name: "Disclosure.Panel" })));
}
var Ae2 = W(me);
var Ce = W(ge);
var Ie3 = W(Re4);
var We2 = Object.assign(Ae2, { Button: Ce, Panel: Ie3 });

// node_modules/@headlessui/react/dist/components/field/field.js
var import_react92 = __toESM(require_react(), 1);
var A6 = "div";
function L4(d12, l16) {
  let t12 = `headlessui-control-${(0, import_react46.useId)()}`, [s14, p7] = z(), [n13, a18] = U(), m12 = a3(), { disabled: e7 = m12 || false, ...o19 } = d12, i15 = (0, import_react92.useMemo)(() => ({ disabled: e7 }), [e7]);
  return import_react92.default.createElement(l, { value: e7 }, import_react92.default.createElement(p7, { value: s14 }, import_react92.default.createElement(a18, { value: n13 }, import_react92.default.createElement(f5, { id: t12 }, H({ ourProps: { ref: l16, disabled: e7 || void 0, "aria-disabled": e7 || void 0 }, theirProps: { ...o19, children: import_react92.default.createElement(W2, null, typeof o19.children == "function" ? o19.children(i15) : o19.children) }, slot: i15, defaultTag: A6, name: "Field" })))));
}
var H7 = W(L4);

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var import_react94 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-resolved-tag.js
var import_react93 = __toESM(require_react(), 1);
function l13(t12) {
  let e7 = typeof t12 == "string" ? t12 : void 0, [s14, o19] = (0, import_react93.useState)(e7);
  return [e7 != null ? e7 : s14, (0, import_react93.useCallback)((n13) => {
    e7 || n13 instanceof HTMLElement && o19(n13.tagName.toLowerCase());
  }, [e7])];
}

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var d10 = "fieldset";
function A7(t12, i15) {
  var s14;
  let a18 = a3(), { disabled: e7 = a18 || false, ...p7 } = t12, [n13, T10] = l13((s14 = t12.as) != null ? s14 : d10), l16 = y(i15, T10), [r17, f20] = z(), m12 = (0, import_react94.useMemo)(() => ({ disabled: e7 }), [e7]);
  return import_react94.default.createElement(l, { value: e7 }, import_react94.default.createElement(f20, null, H({ ourProps: n13 === "fieldset" ? { ref: l16, "aria-labelledby": r17, disabled: e7 || void 0 } : { ref: l16, role: "group", "aria-labelledby": r17, "aria-disabled": e7 || void 0 }, theirProps: p7, slot: m12, defaultTag: d10, name: "Fieldset" })));
}
var C4 = W(A7);

// node_modules/@headlessui/react/dist/components/input/input.js
var import_react95 = __toESM(require_react(), 1);
var x5 = "input";
function h7(n13, s14) {
  let a18 = (0, import_react46.useId)(), l16 = u5(), i15 = a3(), { id: d12 = l16 || `headlessui-input-${a18}`, disabled: e7 = i15 || false, autoFocus: o19 = false, invalid: t12 = false, ...u17 } = n13, f20 = I2(), m12 = G(), { isFocused: r17, focusProps: T10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o19 }), { isHovered: p7, hoverProps: b6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), y10 = D({ ref: s14, id: d12, "aria-labelledby": f20, "aria-describedby": m12, "aria-invalid": t12 ? "" : void 0, disabled: e7 || void 0, autoFocus: o19 }, T10, b6), I7 = (0, import_react95.useMemo)(() => ({ disabled: e7, invalid: t12, hover: p7, focus: r17, autofocus: o19 }), [e7, t12, p7, r17, o19]);
  return H({ ourProps: y10, theirProps: u17, slot: I7, defaultTag: x5, name: "Input" });
}
var J4 = W(h7);

// node_modules/@headlessui/react/dist/components/legend/legend.js
var import_react96 = __toESM(require_react(), 1);
function o16(t12, n13) {
  return import_react96.default.createElement(K, { as: "div", ref: n13, ...t12 });
}
var d11 = W(o16);

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react100 = __toESM(require_react(), 1);
var import_react_dom7 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react97 = __toESM(require_react(), 1);
function i13(e7, o19) {
  let [u17, t12] = (0, import_react97.useState)(e7), r17 = s3(e7);
  return n(() => t12(r17.current), [r17, t12, ...o19]), u17;
}

// node_modules/@headlessui/react/dist/hooks/use-did-element-move.js
var import_react98 = __toESM(require_react(), 1);
function p6(r17, e7) {
  let t12 = (0, import_react98.useRef)({ left: 0, top: 0 });
  if (n(() => {
    let u17 = e7.current;
    if (!u17) return;
    let l16 = u17.getBoundingClientRect();
    l16 && (t12.current = l16);
  }, [r17]), e7.current == null || !r17 || e7.current === document.activeElement) return false;
  let n13 = e7.current.getBoundingClientRect();
  return n13.top !== t12.current.top || n13.left !== t12.current.left;
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react99 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a16 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o18(e7) {
  var r17, i15;
  let n13 = (r17 = e7.innerText) != null ? r17 : "", t12 = e7.cloneNode(true);
  if (!(t12 instanceof HTMLElement)) return n13;
  let u17 = false;
  for (let f20 of t12.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f20.remove(), u17 = true;
  let l16 = u17 ? (i15 = t12.innerText) != null ? i15 : "" : n13;
  return a16.test(l16) && (l16 = l16.replace(a16, "")), l16;
}
function g5(e7) {
  let n13 = e7.getAttribute("aria-label");
  if (typeof n13 == "string") return n13.trim();
  let t12 = e7.getAttribute("aria-labelledby");
  if (t12) {
    let u17 = t12.split(" ").map((l16) => {
      let r17 = document.getElementById(l16);
      if (r17) {
        let i15 = r17.getAttribute("aria-label");
        return typeof i15 == "string" ? i15.trim() : o18(r17).trim();
      }
      return null;
    }).filter(Boolean);
    if (u17.length > 0) return u17.join(", ");
  }
  return o18(e7).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s11(c14) {
  let t12 = (0, import_react99.useRef)(""), r17 = (0, import_react99.useRef)("");
  return o4(() => {
    let e7 = c14.current;
    if (!e7) return "";
    let u17 = e7.innerText;
    if (t12.current === u17) return r17.current;
    let n13 = g5(e7).trim().toLowerCase();
    return t12.current = u17, r17.current = n13, n13;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var vt = ((o19) => (o19[o19.Open = 0] = "Open", o19[o19.Closed = 1] = "Closed", o19))(vt || {});
var gt = ((o19) => (o19[o19.Single = 0] = "Single", o19[o19.Multi = 1] = "Multi", o19))(gt || {});
var Lt = ((o19) => (o19[o19.Pointer = 0] = "Pointer", o19[o19.Other = 1] = "Other", o19))(Lt || {});
var St = ((i15) => (i15[i15.OpenListbox = 0] = "OpenListbox", i15[i15.CloseListbox = 1] = "CloseListbox", i15[i15.GoToOption = 2] = "GoToOption", i15[i15.Search = 3] = "Search", i15[i15.ClearSearch = 4] = "ClearSearch", i15[i15.RegisterOption = 5] = "RegisterOption", i15[i15.UnregisterOption = 6] = "UnregisterOption", i15))(St || {});
function pe4(e7, r17 = (o19) => o19) {
  let o19 = e7.activeOptionIndex !== null ? e7.options[e7.activeOptionIndex] : null, n13 = _2(r17(e7.options.slice()), (m12) => m12.dataRef.current.domRef.current), a18 = o19 ? n13.indexOf(o19) : null;
  return a18 === -1 && (a18 = null), { options: n13, activeOptionIndex: a18 };
}
var Rt = { [1](e7) {
  return e7.dataRef.current.disabled || e7.listboxState === 1 ? e7 : { ...e7, activeOptionIndex: null, listboxState: 1, __demoMode: false };
}, [0](e7) {
  if (e7.dataRef.current.disabled || e7.listboxState === 0) return e7;
  let r17 = e7.activeOptionIndex, { isSelected: o19 } = e7.dataRef.current, n13 = e7.options.findIndex((a18) => o19(a18.dataRef.current.value));
  return n13 !== -1 && (r17 = n13), { ...e7, listboxState: 0, activeOptionIndex: r17, __demoMode: false };
}, [2](e7, r17) {
  var m12, O5, i15, p7, s14;
  if (e7.dataRef.current.disabled || e7.listboxState === 1) return e7;
  let o19 = { ...e7, searchQuery: "", activationTrigger: (m12 = r17.trigger) != null ? m12 : 1, __demoMode: false };
  if (r17.focus === c9.Nothing) return { ...o19, activeOptionIndex: null };
  if (r17.focus === c9.Specific) return { ...o19, activeOptionIndex: e7.options.findIndex((t12) => t12.id === r17.id) };
  if (r17.focus === c9.Previous) {
    let t12 = e7.activeOptionIndex;
    if (t12 !== null) {
      let u17 = e7.options[t12].dataRef.current.domRef, b6 = f14(r17, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (c14) => c14.id, resolveDisabled: (c14) => c14.dataRef.current.disabled });
      if (b6 !== null) {
        let c14 = e7.options[b6].dataRef.current.domRef;
        if (((O5 = u17.current) == null ? void 0 : O5.previousElementSibling) === c14.current || ((i15 = c14.current) == null ? void 0 : i15.previousElementSibling) === null) return { ...o19, activeOptionIndex: b6 };
      }
    }
  } else if (r17.focus === c9.Next) {
    let t12 = e7.activeOptionIndex;
    if (t12 !== null) {
      let u17 = e7.options[t12].dataRef.current.domRef, b6 = f14(r17, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (c14) => c14.id, resolveDisabled: (c14) => c14.dataRef.current.disabled });
      if (b6 !== null) {
        let c14 = e7.options[b6].dataRef.current.domRef;
        if (((p7 = u17.current) == null ? void 0 : p7.nextElementSibling) === c14.current || ((s14 = c14.current) == null ? void 0 : s14.nextElementSibling) === null) return { ...o19, activeOptionIndex: b6 };
      }
    }
  }
  let n13 = pe4(e7), a18 = f14(r17, { resolveItems: () => n13.options, resolveActiveIndex: () => n13.activeOptionIndex, resolveId: (t12) => t12.id, resolveDisabled: (t12) => t12.dataRef.current.disabled });
  return { ...o19, ...n13, activeOptionIndex: a18 };
}, [3]: (e7, r17) => {
  if (e7.dataRef.current.disabled || e7.listboxState === 1) return e7;
  let n13 = e7.searchQuery !== "" ? 0 : 1, a18 = e7.searchQuery + r17.value.toLowerCase(), O5 = (e7.activeOptionIndex !== null ? e7.options.slice(e7.activeOptionIndex + n13).concat(e7.options.slice(0, e7.activeOptionIndex + n13)) : e7.options).find((p7) => {
    var s14;
    return !p7.dataRef.current.disabled && ((s14 = p7.dataRef.current.textValue) == null ? void 0 : s14.startsWith(a18));
  }), i15 = O5 ? e7.options.indexOf(O5) : -1;
  return i15 === -1 || i15 === e7.activeOptionIndex ? { ...e7, searchQuery: a18 } : { ...e7, searchQuery: a18, activeOptionIndex: i15, activationTrigger: 1 };
}, [4](e7) {
  return e7.dataRef.current.disabled || e7.listboxState === 1 || e7.searchQuery === "" ? e7 : { ...e7, searchQuery: "" };
}, [5]: (e7, r17) => {
  let o19 = { id: r17.id, dataRef: r17.dataRef }, n13 = pe4(e7, (a18) => [...a18, o19]);
  return e7.activeOptionIndex === null && e7.dataRef.current.isSelected(r17.dataRef.current.value) && (n13.activeOptionIndex = n13.options.indexOf(o19)), { ...e7, ...n13 };
}, [6]: (e7, r17) => {
  let o19 = pe4(e7, (n13) => {
    let a18 = n13.findIndex((m12) => m12.id === r17.id);
    return a18 !== -1 && n13.splice(a18, 1), n13;
  });
  return { ...e7, ...o19, activationTrigger: 1 };
} };
var ue3 = (0, import_react100.createContext)(null);
ue3.displayName = "ListboxActionsContext";
function $3(e7) {
  let r17 = (0, import_react100.useContext)(ue3);
  if (r17 === null) {
    let o19 = new Error(`<${e7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o19, $3), o19;
  }
  return r17;
}
var q2 = (0, import_react100.createContext)(null);
q2.displayName = "ListboxDataContext";
function Q(e7) {
  let r17 = (0, import_react100.useContext)(q2);
  if (r17 === null) {
    let o19 = new Error(`<${e7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o19, Q), o19;
  }
  return r17;
}
function Pt2(e7, r17) {
  return u2(r17.type, Rt, e7, r17);
}
var At = import_react100.Fragment;
function Et(e7, r17) {
  var de4;
  let o19 = a3(), { value: n13, defaultValue: a18, form: m12, name: O5, onChange: i15, by: p7, invalid: s14 = false, disabled: t12 = o19 || false, horizontal: u17 = false, multiple: b6 = false, __demoMode: c14 = false, ...E11 } = e7;
  const U4 = u17 ? "horizontal" : "vertical";
  let N5 = y(r17), _5 = l2(a18), [y10 = b6 ? [] : void 0, P8] = T(n13, i15, _5), [h8, g6] = (0, import_react100.useReducer)(Pt2, { dataRef: (0, import_react100.createRef)(), listboxState: c14 ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: false, __demoMode: c14 }), M8 = (0, import_react100.useRef)({ static: false, hold: false }), w9 = (0, import_react100.useRef)(null), f20 = (0, import_react100.useRef)(null), A9 = (0, import_react100.useRef)(/* @__PURE__ */ new Map()), F7 = u9(p7), L8 = (0, import_react100.useCallback)((x7) => u2(d12.mode, { [1]: () => y10.some((S8) => F7(S8, x7)), [0]: () => F7(y10, x7) }), [y10]), d12 = (0, import_react100.useMemo)(() => ({ ...h8, value: y10, disabled: t12, invalid: s14, mode: b6 ? 1 : 0, orientation: U4, compare: F7, isSelected: L8, optionsPropsRef: M8, buttonRef: w9, optionsRef: f20, listRef: A9 }), [y10, t12, s14, b6, h8, A9]);
  n(() => {
    h8.dataRef.current = d12;
  }, [d12]);
  let Y5 = d12.listboxState === 0;
  F2(Y5, [d12.buttonRef, d12.optionsRef], (x7, S8) => {
    var C7;
    g6({ type: 1 }), A2(S8, h5.Loose) || (x7.preventDefault(), (C7 = d12.buttonRef.current) == null || C7.focus());
  });
  let X3 = (0, import_react100.useMemo)(() => ({ open: d12.listboxState === 0, disabled: t12, invalid: s14, value: y10 }), [d12, t12, y10, s14]), Z6 = o4((x7) => {
    let S8 = d12.options.find((C7) => C7.id === x7);
    S8 && B4(S8.dataRef.current.value);
  }), ee7 = o4(() => {
    if (d12.activeOptionIndex !== null) {
      let { dataRef: x7, id: S8 } = d12.options[d12.activeOptionIndex];
      B4(x7.current.value), g6({ type: 2, focus: c9.Specific, id: S8 });
    }
  }), te5 = o4(() => g6({ type: 0 })), oe3 = o4(() => g6({ type: 1 })), H10 = p(), l16 = o4((x7, S8, C7) => {
    H10.dispose(), H10.microTask(() => x7 === c9.Specific ? g6({ type: 2, focus: c9.Specific, id: S8, trigger: C7 }) : g6({ type: 2, focus: x7, trigger: C7 }));
  }), I7 = o4((x7, S8) => (g6({ type: 5, id: x7, dataRef: S8 }), () => g6({ type: 6, id: x7 }))), B4 = o4((x7) => u2(d12.mode, { [0]() {
    return P8 == null ? void 0 : P8(x7);
  }, [1]() {
    let S8 = d12.value.slice(), C7 = S8.findIndex((Pe3) => F7(Pe3, x7));
    return C7 === -1 ? S8.push(x7) : S8.splice(C7, 1), P8 == null ? void 0 : P8(S8);
  } })), ne2 = o4((x7) => g6({ type: 3, value: x7 })), ye5 = o4(() => g6({ type: 4 })), ve4 = (0, import_react100.useMemo)(() => ({ onChange: B4, registerOption: I7, goToOption: l16, closeListbox: oe3, openListbox: te5, selectActiveOption: ee7, selectOption: Z6, search: ne2, clearSearch: ye5 }), []), [ge4, Le6] = z({ inherit: true }), Se6 = { ref: N5 }, Re7 = (0, import_react100.useCallback)(() => {
    if (_5 !== void 0) return P8 == null ? void 0 : P8(_5);
  }, [P8, _5]);
  return import_react100.default.createElement(Le6, { value: ge4, props: { htmlFor: (de4 = d12.buttonRef.current) == null ? void 0 : de4.id }, slot: { open: d12.listboxState === 0, disabled: t12 } }, import_react100.default.createElement(ve, null, import_react100.default.createElement(ue3.Provider, { value: ve4 }, import_react100.default.createElement(q2.Provider, { value: d12 }, import_react100.default.createElement(c8, { value: u2(d12.listboxState, { [0]: i11.Open, [1]: i11.Closed }) }, O5 != null && y10 != null && import_react100.default.createElement(j2, { disabled: t12, data: { [O5]: y10 }, form: m12, onReset: Re7 }), H({ ourProps: Se6, theirProps: E11, slot: X3, defaultTag: At, name: "Listbox" }))))));
}
var ht = "button";
function Dt2(e7, r17) {
  var F7;
  let o19 = Q("Listbox.Button"), n13 = $3("Listbox.Button"), a18 = (0, import_react46.useId)(), m12 = u5(), { id: O5 = m12 || `headlessui-listbox-button-${a18}`, disabled: i15 = o19.disabled || false, autoFocus: p7 = false, ...s14 } = e7, t12 = y(o19.buttonRef, r17, ye()), u17 = Fe(), b6 = o4((L8) => {
    switch (L8.key) {
      case o8.Enter:
        p2(L8.currentTarget);
        break;
      case o8.Space:
      case o8.ArrowDown:
        L8.preventDefault(), (0, import_react_dom7.flushSync)(() => n13.openListbox()), o19.value || n13.goToOption(c9.First);
        break;
      case o8.ArrowUp:
        L8.preventDefault(), (0, import_react_dom7.flushSync)(() => n13.openListbox()), o19.value || n13.goToOption(c9.Last);
        break;
    }
  }), c14 = o4((L8) => {
    switch (L8.key) {
      case o8.Space:
        L8.preventDefault();
        break;
    }
  }), E11 = o4((L8) => {
    var d12;
    if (r5(L8.currentTarget)) return L8.preventDefault();
    o19.listboxState === 0 ? ((0, import_react_dom7.flushSync)(() => n13.closeListbox()), (d12 = o19.buttonRef.current) == null || d12.focus({ preventScroll: true })) : (L8.preventDefault(), n13.openListbox());
  }), U4 = o4((L8) => L8.preventDefault()), N5 = I2([O5]), _5 = G(), { isFocusVisible: y10, focusProps: P8 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p7 }), { isHovered: h8, hoverProps: g6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i15 }), { pressed: M8, pressProps: w9 } = w({ disabled: i15 }), f20 = (0, import_react100.useMemo)(() => ({ open: o19.listboxState === 0, active: M8 || o19.listboxState === 0, disabled: i15, invalid: o19.invalid, value: o19.value, hover: h8, focus: y10, autofocus: p7 }), [o19.listboxState, o19.value, i15, h8, y10, M8, o19.invalid, p7]), A9 = D(u17(), { ref: t12, id: O5, type: T7(e7, o19.buttonRef), "aria-haspopup": "listbox", "aria-controls": (F7 = o19.optionsRef.current) == null ? void 0 : F7.id, "aria-expanded": o19.listboxState === 0, "aria-labelledby": N5, "aria-describedby": _5, disabled: i15 || void 0, autoFocus: p7, onKeyDown: b6, onKeyUp: c14, onKeyPress: U4, onClick: E11 }, P8, g6, w9);
  return H({ ourProps: A9, theirProps: s14, slot: f20, defaultTag: ht, name: "Listbox.Button" });
}
var Oe2 = (0, import_react100.createContext)(false);
var _t = "div";
var It = M.RenderStrategy | M.Static;
function Ct(e7, r17) {
  var H10;
  let o19 = (0, import_react46.useId)(), { id: n13 = `headlessui-listbox-options-${o19}`, anchor: a18, portal: m12 = false, modal: O5 = true, transition: i15 = false, ...p7 } = e7, s14 = xe(a18);
  s14 && (m12 = true);
  let t12 = Q("Listbox.Options"), u17 = $3("Listbox.Options"), b6 = n9(t12.optionsRef), c14 = u13(), [E11, U4] = V2(i15, t12.optionsRef, c14 !== null ? (c14 & i11.Open) === i11.Open : t12.listboxState === 0);
  m6(E11, t12.buttonRef, u17.closeListbox);
  let N5 = t12.__demoMode ? false : O5 && t12.listboxState === 0;
  f11(N5, b6);
  let _5 = t12.__demoMode ? false : O5 && t12.listboxState === 0;
  y3(_5, { allowed: o4(() => [t12.buttonRef.current, t12.optionsRef.current]) });
  let y10 = t12.listboxState !== 0, h8 = p6(y10, t12.buttonRef) ? false : E11, g6 = E11 && t12.listboxState === 1, M8 = l9(g6, t12.value), w9 = o4((l16) => t12.compare(M8, l16)), f20 = (0, import_react100.useMemo)(() => {
    var I7;
    if (s14 == null || !((I7 = s14 == null ? void 0 : s14.to) != null && I7.includes("selection"))) return null;
    let l16 = t12.options.findIndex((B4) => w9(B4.dataRef.current.value));
    return l16 === -1 && (l16 = 0), l16;
  }, [s14, t12.options]), A9 = (() => {
    if (f20 === null) return { ...s14, inner: void 0 };
    let l16 = Array.from(t12.listRef.current.values());
    return { ...s14, inner: { listRef: { current: l16 }, index: f20 } };
  })(), [F7, L8] = Re2(A9), d12 = be(), Y5 = y(t12.optionsRef, r17, s14 ? F7 : null), X3 = p();
  (0, import_react100.useEffect)(() => {
    var I7;
    let l16 = t12.optionsRef.current;
    l16 && t12.listboxState === 0 && l16 !== ((I7 = u(l16)) == null ? void 0 : I7.activeElement) && (l16 == null || l16.focus({ preventScroll: true }));
  }, [t12.listboxState, t12.optionsRef, t12.optionsRef.current]);
  let Z6 = o4((l16) => {
    var I7, B4;
    switch (X3.dispose(), l16.key) {
      case o8.Space:
        if (t12.searchQuery !== "") return l16.preventDefault(), l16.stopPropagation(), u17.search(l16.key);
      case o8.Enter:
        if (l16.preventDefault(), l16.stopPropagation(), t12.activeOptionIndex !== null) {
          let { dataRef: ne2 } = t12.options[t12.activeOptionIndex];
          u17.onChange(ne2.current.value);
        }
        t12.mode === 0 && ((0, import_react_dom7.flushSync)(() => u17.closeListbox()), (I7 = t12.buttonRef.current) == null || I7.focus({ preventScroll: true }));
        break;
      case u2(t12.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return l16.preventDefault(), l16.stopPropagation(), u17.goToOption(c9.Next);
      case u2(t12.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return l16.preventDefault(), l16.stopPropagation(), u17.goToOption(c9.Previous);
      case o8.Home:
      case o8.PageUp:
        return l16.preventDefault(), l16.stopPropagation(), u17.goToOption(c9.First);
      case o8.End:
      case o8.PageDown:
        return l16.preventDefault(), l16.stopPropagation(), u17.goToOption(c9.Last);
      case o8.Escape:
        l16.preventDefault(), l16.stopPropagation(), (0, import_react_dom7.flushSync)(() => u17.closeListbox()), (B4 = t12.buttonRef.current) == null || B4.focus({ preventScroll: true });
        return;
      case o8.Tab:
        l16.preventDefault(), l16.stopPropagation(), (0, import_react_dom7.flushSync)(() => u17.closeListbox()), j3(t12.buttonRef.current, l16.shiftKey ? F.Previous : F.Next);
        break;
      default:
        l16.key.length === 1 && (u17.search(l16.key), X3.setTimeout(() => u17.clearSearch(), 350));
        break;
    }
  }), ee7 = i13(() => {
    var l16;
    return (l16 = t12.buttonRef.current) == null ? void 0 : l16.id;
  }, [t12.buttonRef.current]), te5 = (0, import_react100.useMemo)(() => ({ open: t12.listboxState === 0 }), [t12.listboxState]), oe3 = D(s14 ? d12() : {}, { id: n13, ref: Y5, "aria-activedescendant": t12.activeOptionIndex === null || (H10 = t12.options[t12.activeOptionIndex]) == null ? void 0 : H10.id, "aria-multiselectable": t12.mode === 1 ? true : void 0, "aria-labelledby": ee7, "aria-orientation": t12.orientation, onKeyDown: Z6, role: "listbox", tabIndex: t12.listboxState === 0 ? 0 : void 0, style: { ...p7.style, ...L8, "--button-width": f7(t12.buttonRef, true).width }, ...A3(U4) });
  return import_react100.default.createElement(te, { enabled: m12 ? e7.static || E11 : false }, import_react100.default.createElement(q2.Provider, { value: t12.mode === 1 ? t12 : { ...t12, isSelected: w9 } }, H({ ourProps: oe3, theirProps: p7, slot: te5, defaultTag: _t, features: It, visible: h8, name: "Listbox.Options" })));
}
var Ft = "div";
function Mt(e7, r17) {
  let o19 = (0, import_react46.useId)(), { id: n13 = `headlessui-listbox-option-${o19}`, disabled: a18 = false, value: m12, ...O5 } = e7, i15 = (0, import_react100.useContext)(Oe2) === true, p7 = Q("Listbox.Option"), s14 = $3("Listbox.Option"), t12 = p7.activeOptionIndex !== null ? p7.options[p7.activeOptionIndex].id === n13 : false, u17 = p7.isSelected(m12), b6 = (0, import_react100.useRef)(null), c14 = s11(b6), E11 = s3({ disabled: a18, value: m12, domRef: b6, get textValue() {
    return c14();
  } }), U4 = y(r17, b6, (f20) => {
    f20 ? p7.listRef.current.set(n13, f20) : p7.listRef.current.delete(n13);
  });
  n(() => {
    if (!p7.__demoMode && p7.listboxState === 0 && t12 && p7.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var f20, A9;
      (A9 = (f20 = b6.current) == null ? void 0 : f20.scrollIntoView) == null || A9.call(f20, { block: "nearest" });
    });
  }, [b6, t12, p7.__demoMode, p7.listboxState, p7.activationTrigger, p7.activeOptionIndex]), n(() => {
    if (!i15) return s14.registerOption(n13, E11);
  }, [E11, n13, i15]);
  let N5 = o4((f20) => {
    var A9;
    if (a18) return f20.preventDefault();
    s14.onChange(m12), p7.mode === 0 && ((0, import_react_dom7.flushSync)(() => s14.closeListbox()), (A9 = p7.buttonRef.current) == null || A9.focus({ preventScroll: true }));
  }), _5 = o4(() => {
    if (a18) return s14.goToOption(c9.Nothing);
    s14.goToOption(c9.Specific, n13);
  }), y10 = u11(), P8 = o4((f20) => {
    y10.update(f20), !a18 && (t12 || s14.goToOption(c9.Specific, n13, 0));
  }), h8 = o4((f20) => {
    y10.wasMoved(f20) && (a18 || t12 || s14.goToOption(c9.Specific, n13, 0));
  }), g6 = o4((f20) => {
    y10.wasMoved(f20) && (a18 || t12 && s14.goToOption(c9.Nothing));
  }), M8 = (0, import_react100.useMemo)(() => ({ active: t12, focus: t12, selected: u17, disabled: a18, selectedOption: u17 && i15 }), [t12, u17, a18, i15]), w9 = i15 ? {} : { id: n13, ref: U4, role: "option", tabIndex: a18 === true ? void 0 : -1, "aria-disabled": a18 === true ? true : void 0, "aria-selected": u17, disabled: void 0, onClick: N5, onFocus: _5, onPointerEnter: P8, onMouseEnter: P8, onPointerMove: h8, onMouseMove: h8, onPointerLeave: g6, onMouseLeave: g6 };
  return !u17 && i15 ? null : H({ ourProps: w9, theirProps: O5, slot: M8, defaultTag: Ft, name: "Listbox.Option" });
}
var wt = import_react100.Fragment;
function Bt(e7, r17) {
  let { options: o19, placeholder: n13, ...a18 } = e7, O5 = { ref: y(r17) }, i15 = Q("ListboxSelectedOption"), p7 = (0, import_react100.useMemo)(() => ({}), []), s14 = i15.value === void 0 || i15.value === null || i15.mode === 1 && Array.isArray(i15.value) && i15.value.length === 0;
  return import_react100.default.createElement(Oe2.Provider, { value: true }, H({ ourProps: O5, theirProps: { ...a18, children: import_react100.default.createElement(import_react100.default.Fragment, null, n13 && s14 ? n13 : o19) }, slot: p7, defaultTag: wt, name: "ListboxSelectedOption" }));
}
var kt = W(Et);
var Ut = W(Dt2);
var Nt2 = K;
var Gt = W(Ct);
var Vt = W(Mt);
var Ht = W(Bt);
var Mo2 = Object.assign(kt, { Button: Ut, Label: Nt2, Options: Gt, Option: Vt, SelectedOption: Ht });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react101 = __toESM(require_react(), 1);
var import_react_dom8 = __toESM(require_react_dom(), 1);
var Je = ((r17) => (r17[r17.Open = 0] = "Open", r17[r17.Closed = 1] = "Closed", r17))(Je || {});
var Ve = ((r17) => (r17[r17.Pointer = 0] = "Pointer", r17[r17.Other = 1] = "Other", r17))(Ve || {});
var Xe2 = ((n13) => (n13[n13.OpenMenu = 0] = "OpenMenu", n13[n13.CloseMenu = 1] = "CloseMenu", n13[n13.GoToItem = 2] = "GoToItem", n13[n13.Search = 3] = "Search", n13[n13.ClearSearch = 4] = "ClearSearch", n13[n13.RegisterItem = 5] = "RegisterItem", n13[n13.UnregisterItem = 6] = "UnregisterItem", n13))(Xe2 || {});
function W5(e7, a18 = (r17) => r17) {
  let r17 = e7.activeItemIndex !== null ? e7.items[e7.activeItemIndex] : null, i15 = _2(a18(e7.items.slice()), (l16) => l16.dataRef.current.domRef.current), o19 = r17 ? i15.indexOf(r17) : null;
  return o19 === -1 && (o19 = null), { items: i15, activeItemIndex: o19 };
}
var $e2 = { [1](e7) {
  return e7.menuState === 1 ? e7 : { ...e7, activeItemIndex: null, menuState: 1 };
}, [0](e7) {
  return e7.menuState === 0 ? e7 : { ...e7, __demoMode: false, menuState: 0 };
}, [2]: (e7, a18) => {
  var l16, p7, n13, u17, c14;
  if (e7.menuState === 1) return e7;
  let r17 = { ...e7, searchQuery: "", activationTrigger: (l16 = a18.trigger) != null ? l16 : 1, __demoMode: false };
  if (a18.focus === c9.Nothing) return { ...r17, activeItemIndex: null };
  if (a18.focus === c9.Specific) return { ...r17, activeItemIndex: e7.items.findIndex((t12) => t12.id === a18.id) };
  if (a18.focus === c9.Previous) {
    let t12 = e7.activeItemIndex;
    if (t12 !== null) {
      let d12 = e7.items[t12].dataRef.current.domRef, f20 = f14(a18, { resolveItems: () => e7.items, resolveActiveIndex: () => e7.activeItemIndex, resolveId: (m12) => m12.id, resolveDisabled: (m12) => m12.dataRef.current.disabled });
      if (f20 !== null) {
        let m12 = e7.items[f20].dataRef.current.domRef;
        if (((p7 = d12.current) == null ? void 0 : p7.previousElementSibling) === m12.current || ((n13 = m12.current) == null ? void 0 : n13.previousElementSibling) === null) return { ...r17, activeItemIndex: f20 };
      }
    }
  } else if (a18.focus === c9.Next) {
    let t12 = e7.activeItemIndex;
    if (t12 !== null) {
      let d12 = e7.items[t12].dataRef.current.domRef, f20 = f14(a18, { resolveItems: () => e7.items, resolveActiveIndex: () => e7.activeItemIndex, resolveId: (m12) => m12.id, resolveDisabled: (m12) => m12.dataRef.current.disabled });
      if (f20 !== null) {
        let m12 = e7.items[f20].dataRef.current.domRef;
        if (((u17 = d12.current) == null ? void 0 : u17.nextElementSibling) === m12.current || ((c14 = m12.current) == null ? void 0 : c14.nextElementSibling) === null) return { ...r17, activeItemIndex: f20 };
      }
    }
  }
  let i15 = W5(e7), o19 = f14(a18, { resolveItems: () => i15.items, resolveActiveIndex: () => i15.activeItemIndex, resolveId: (t12) => t12.id, resolveDisabled: (t12) => t12.dataRef.current.disabled });
  return { ...r17, ...i15, activeItemIndex: o19 };
}, [3]: (e7, a18) => {
  let i15 = e7.searchQuery !== "" ? 0 : 1, o19 = e7.searchQuery + a18.value.toLowerCase(), p7 = (e7.activeItemIndex !== null ? e7.items.slice(e7.activeItemIndex + i15).concat(e7.items.slice(0, e7.activeItemIndex + i15)) : e7.items).find((u17) => {
    var c14;
    return ((c14 = u17.dataRef.current.textValue) == null ? void 0 : c14.startsWith(o19)) && !u17.dataRef.current.disabled;
  }), n13 = p7 ? e7.items.indexOf(p7) : -1;
  return n13 === -1 || n13 === e7.activeItemIndex ? { ...e7, searchQuery: o19 } : { ...e7, searchQuery: o19, activeItemIndex: n13, activationTrigger: 1 };
}, [4](e7) {
  return e7.searchQuery === "" ? e7 : { ...e7, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e7, a18) => {
  let r17 = W5(e7, (i15) => [...i15, { id: a18.id, dataRef: a18.dataRef }]);
  return { ...e7, ...r17 };
}, [6]: (e7, a18) => {
  let r17 = W5(e7, (i15) => {
    let o19 = i15.findIndex((l16) => l16.id === a18.id);
    return o19 !== -1 && i15.splice(o19, 1), i15;
  });
  return { ...e7, ...r17, activationTrigger: 1 };
} };
var j8 = (0, import_react101.createContext)(null);
j8.displayName = "MenuContext";
function B2(e7) {
  let a18 = (0, import_react101.useContext)(j8);
  if (a18 === null) {
    let r17 = new Error(`<${e7} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r17, B2), r17;
  }
  return a18;
}
function qe(e7, a18) {
  return u2(a18.type, $e2, e7, a18);
}
var ze = import_react101.Fragment;
function Ye(e7, a18) {
  let { __demoMode: r17 = false, ...i15 } = e7, o19 = (0, import_react101.useReducer)(qe, { __demoMode: r17, menuState: r17 ? 0 : 1, buttonRef: (0, import_react101.createRef)(), itemsRef: (0, import_react101.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: l16, itemsRef: p7, buttonRef: n13 }, u17] = o19, c14 = y(a18);
  F2(l16 === 0, [n13, p7], (S8, b6) => {
    var y10;
    u17({ type: 1 }), A2(b6, h5.Loose) || (S8.preventDefault(), (y10 = n13.current) == null || y10.focus());
  });
  let d12 = o4(() => {
    u17({ type: 1 });
  }), f20 = (0, import_react101.useMemo)(() => ({ open: l16 === 0, close: d12 }), [l16, d12]), m12 = { ref: c14 };
  return import_react101.default.createElement(ve, null, import_react101.default.createElement(j8.Provider, { value: o19 }, import_react101.default.createElement(c8, { value: u2(l16, { [0]: i11.Open, [1]: i11.Closed }) }, H({ ourProps: m12, theirProps: i15, slot: f20, defaultTag: ze, name: "Menu" }))));
}
var Ze = "button";
function et(e7, a18) {
  var D11;
  let r17 = (0, import_react46.useId)(), { id: i15 = `headlessui-menu-button-${r17}`, disabled: o19 = false, autoFocus: l16 = false, ...p7 } = e7, [n13, u17] = B2("Menu.Button"), c14 = Fe(), t12 = y(n13.buttonRef, a18, ye()), d12 = o4((g6) => {
    switch (g6.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        g6.preventDefault(), g6.stopPropagation(), (0, import_react_dom8.flushSync)(() => u17({ type: 0 })), u17({ type: 2, focus: c9.First });
        break;
      case o8.ArrowUp:
        g6.preventDefault(), g6.stopPropagation(), (0, import_react_dom8.flushSync)(() => u17({ type: 0 })), u17({ type: 2, focus: c9.Last });
        break;
    }
  }), f20 = o4((g6) => {
    switch (g6.key) {
      case o8.Space:
        g6.preventDefault();
        break;
    }
  }), m12 = o4((g6) => {
    var h8;
    if (r5(g6.currentTarget)) return g6.preventDefault();
    o19 || (n13.menuState === 0 ? ((0, import_react_dom8.flushSync)(() => u17({ type: 1 })), (h8 = n13.buttonRef.current) == null || h8.focus({ preventScroll: true })) : (g6.preventDefault(), u17({ type: 0 })));
  }), { isFocusVisible: S8, focusProps: b6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: l16 }), { isHovered: y10, hoverProps: E11 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: o19 }), { pressed: P8, pressProps: _5 } = w({ disabled: o19 }), C7 = (0, import_react101.useMemo)(() => ({ open: n13.menuState === 0, active: P8 || n13.menuState === 0, disabled: o19, hover: y10, focus: S8, autofocus: l16 }), [n13, y10, S8, P8, o19, l16]), F7 = D(c14(), { ref: t12, id: i15, type: T7(e7, n13.buttonRef), "aria-haspopup": "menu", "aria-controls": (D11 = n13.itemsRef.current) == null ? void 0 : D11.id, "aria-expanded": n13.menuState === 0, disabled: o19 || void 0, autoFocus: l16, onKeyDown: d12, onKeyUp: f20, onClick: m12 }, b6, E11, _5);
  return H({ ourProps: F7, theirProps: p7, slot: C7, defaultTag: Ze, name: "Menu.Button" });
}
var tt = "div";
var nt = M.RenderStrategy | M.Static;
function rt(e7, a18) {
  var Q4, J6;
  let r17 = (0, import_react46.useId)(), { id: i15 = `headlessui-menu-items-${r17}`, anchor: o19, portal: l16 = false, modal: p7 = true, transition: n13 = false, ...u17 } = e7, c14 = xe(o19), [t12, d12] = B2("Menu.Items"), [f20, m12] = Re2(c14), S8 = be(), b6 = y(t12.itemsRef, a18, c14 ? f20 : null), y10 = n9(t12.itemsRef);
  c14 && (l16 = true);
  let E11 = u13(), [P8, _5] = V2(n13, t12.itemsRef, E11 !== null ? (E11 & i11.Open) === i11.Open : t12.menuState === 0);
  m6(P8, t12.buttonRef, () => {
    d12({ type: 1 });
  });
  let C7 = t12.__demoMode ? false : p7 && t12.menuState === 0;
  f11(C7, y10);
  let F7 = t12.__demoMode ? false : p7 && t12.menuState === 0;
  y3(F7, { allowed: o4(() => [t12.buttonRef.current, t12.itemsRef.current]) });
  let D11 = t12.menuState !== 0, h8 = p6(D11, t12.buttonRef) ? false : P8;
  (0, import_react101.useEffect)(() => {
    let s14 = t12.itemsRef.current;
    s14 && t12.menuState === 0 && s14 !== (y10 == null ? void 0 : y10.activeElement) && s14.focus({ preventScroll: true });
  }, [t12.menuState, t12.itemsRef, y10, t12.itemsRef.current]), F4(t12.menuState === 0, { container: t12.itemsRef.current, accept(s14) {
    return s14.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : s14.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s14) {
    s14.setAttribute("role", "none");
  } });
  let w9 = p(), M8 = o4((s14) => {
    var V6, X3, $5;
    switch (w9.dispose(), s14.key) {
      case o8.Space:
        if (t12.searchQuery !== "") return s14.preventDefault(), s14.stopPropagation(), d12({ type: 3, value: s14.key });
      case o8.Enter:
        if (s14.preventDefault(), s14.stopPropagation(), d12({ type: 1 }), t12.activeItemIndex !== null) {
          let { dataRef: se2 } = t12.items[t12.activeItemIndex];
          (X3 = (V6 = se2.current) == null ? void 0 : V6.domRef.current) == null || X3.click();
        }
        G3(t12.buttonRef.current);
        break;
      case o8.ArrowDown:
        return s14.preventDefault(), s14.stopPropagation(), d12({ type: 2, focus: c9.Next });
      case o8.ArrowUp:
        return s14.preventDefault(), s14.stopPropagation(), d12({ type: 2, focus: c9.Previous });
      case o8.Home:
      case o8.PageUp:
        return s14.preventDefault(), s14.stopPropagation(), d12({ type: 2, focus: c9.First });
      case o8.End:
      case o8.PageDown:
        return s14.preventDefault(), s14.stopPropagation(), d12({ type: 2, focus: c9.Last });
      case o8.Escape:
        s14.preventDefault(), s14.stopPropagation(), (0, import_react_dom8.flushSync)(() => d12({ type: 1 })), ($5 = t12.buttonRef.current) == null || $5.focus({ preventScroll: true });
        break;
      case o8.Tab:
        s14.preventDefault(), s14.stopPropagation(), (0, import_react_dom8.flushSync)(() => d12({ type: 1 })), j3(t12.buttonRef.current, s14.shiftKey ? F.Previous : F.Next);
        break;
      default:
        s14.key.length === 1 && (d12({ type: 3, value: s14.key }), w9.setTimeout(() => d12({ type: 4 }), 350));
        break;
    }
  }), L8 = o4((s14) => {
    switch (s14.key) {
      case o8.Space:
        s14.preventDefault();
        break;
    }
  }), ae5 = (0, import_react101.useMemo)(() => ({ open: t12.menuState === 0 }), [t12.menuState]), ie5 = D(c14 ? S8() : {}, { "aria-activedescendant": t12.activeItemIndex === null || (Q4 = t12.items[t12.activeItemIndex]) == null ? void 0 : Q4.id, "aria-labelledby": (J6 = t12.buttonRef.current) == null ? void 0 : J6.id, id: i15, onKeyDown: M8, onKeyUp: L8, role: "menu", tabIndex: t12.menuState === 0 ? 0 : void 0, ref: b6, style: { ...u17.style, ...m12, "--button-width": f7(t12.buttonRef, true).width }, ...A3(_5) });
  return import_react101.default.createElement(te, { enabled: l16 ? e7.static || P8 : false }, H({ ourProps: ie5, theirProps: u17, slot: ae5, defaultTag: tt, features: nt, visible: h8, name: "Menu.Items" }));
}
var ot = import_react101.Fragment;
function at(e7, a18) {
  let r17 = (0, import_react46.useId)(), { id: i15 = `headlessui-menu-item-${r17}`, disabled: o19 = false, ...l16 } = e7, [p7, n13] = B2("Menu.Item"), u17 = p7.activeItemIndex !== null ? p7.items[p7.activeItemIndex].id === i15 : false, c14 = (0, import_react101.useRef)(null), t12 = y(a18, c14);
  n(() => {
    if (!p7.__demoMode && p7.menuState === 0 && u17 && p7.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var M8, L8;
      (L8 = (M8 = c14.current) == null ? void 0 : M8.scrollIntoView) == null || L8.call(M8, { block: "nearest" });
    });
  }, [p7.__demoMode, c14, u17, p7.menuState, p7.activationTrigger, p7.activeItemIndex]);
  let d12 = s11(c14), f20 = (0, import_react101.useRef)({ disabled: o19, domRef: c14, get textValue() {
    return d12();
  } });
  n(() => {
    f20.current.disabled = o19;
  }, [f20, o19]), n(() => (n13({ type: 5, id: i15, dataRef: f20 }), () => n13({ type: 6, id: i15 })), [f20, i15]);
  let m12 = o4(() => {
    n13({ type: 1 });
  }), S8 = o4((M8) => {
    if (o19) return M8.preventDefault();
    n13({ type: 1 }), G3(p7.buttonRef.current);
  }), b6 = o4(() => {
    if (o19) return n13({ type: 2, focus: c9.Nothing });
    n13({ type: 2, focus: c9.Specific, id: i15 });
  }), y10 = u11(), E11 = o4((M8) => {
    y10.update(M8), !o19 && (u17 || n13({ type: 2, focus: c9.Specific, id: i15, trigger: 0 }));
  }), P8 = o4((M8) => {
    y10.wasMoved(M8) && (o19 || u17 || n13({ type: 2, focus: c9.Specific, id: i15, trigger: 0 }));
  }), _5 = o4((M8) => {
    y10.wasMoved(M8) && (o19 || u17 && n13({ type: 2, focus: c9.Nothing }));
  }), [C7, F7] = z(), [D11, g6] = U(), h8 = (0, import_react101.useMemo)(() => ({ active: u17, focus: u17, disabled: o19, close: m12 }), [u17, o19, m12]);
  return import_react101.default.createElement(F7, null, import_react101.default.createElement(g6, null, H({ ourProps: { id: i15, ref: t12, role: "menuitem", tabIndex: o19 === true ? void 0 : -1, "aria-disabled": o19 === true ? true : void 0, "aria-labelledby": C7, "aria-describedby": D11, disabled: void 0, onClick: S8, onFocus: b6, onPointerEnter: E11, onMouseEnter: E11, onPointerMove: P8, onMouseMove: P8, onPointerLeave: _5, onMouseLeave: _5 }, theirProps: l16, slot: h8, defaultTag: ot, name: "Menu.Item" })));
}
var it = "div";
function st(e7, a18) {
  let [r17, i15] = z();
  return import_react101.default.createElement(i15, null, H({ ourProps: { ref: a18, "aria-labelledby": r17, role: "group" }, theirProps: e7, slot: {}, defaultTag: it, name: "Menu.Section" }));
}
var lt = "header";
function ut(e7, a18) {
  let r17 = (0, import_react46.useId)(), { id: i15 = `headlessui-menu-heading-${r17}`, ...o19 } = e7, l16 = P5();
  n(() => l16.register(i15), [i15, l16.register]);
  let p7 = { id: i15, ref: a18, role: "presentation", ...l16.props };
  return H({ ourProps: p7, theirProps: o19, slot: {}, defaultTag: lt, name: "Menu.Heading" });
}
var pt = "div";
function dt(e7, a18) {
  return H({ ourProps: { ref: a18, role: "separator" }, theirProps: e7, slot: {}, defaultTag: pt, name: "Menu.Separator" });
}
var mt = W(Ye);
var ct2 = W(et);
var ft = W(rt);
var Tt = W(at);
var yt = W(st);
var gt2 = W(ut);
var It2 = W(dt);
var Zt = Object.assign(mt, { Button: ct2, Items: ft, Item: Tt, Section: yt, Heading: gt2, Separator: It2 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react102 = __toESM(require_react(), 1);
var nt2 = ((f20) => (f20[f20.Open = 0] = "Open", f20[f20.Closed = 1] = "Closed", f20))(nt2 || {});
var lt2 = ((u17) => (u17[u17.TogglePopover = 0] = "TogglePopover", u17[u17.ClosePopover = 1] = "ClosePopover", u17[u17.SetButton = 2] = "SetButton", u17[u17.SetButtonId = 3] = "SetButtonId", u17[u17.SetPanel = 4] = "SetPanel", u17[u17.SetPanelId = 5] = "SetPanelId", u17))(lt2 || {});
var at2 = { [0]: (t12) => ({ ...t12, popoverState: u2(t12.popoverState, { [0]: 1, [1]: 0 }), __demoMode: false }), [1](t12) {
  return t12.popoverState === 1 ? t12 : { ...t12, popoverState: 1, __demoMode: false };
}, [2](t12, a18) {
  return t12.button === a18.button ? t12 : { ...t12, button: a18.button };
}, [3](t12, a18) {
  return t12.buttonId === a18.buttonId ? t12 : { ...t12, buttonId: a18.buttonId };
}, [4](t12, a18) {
  return t12.panel === a18.panel ? t12 : { ...t12, panel: a18.panel };
}, [5](t12, a18) {
  return t12.panelId === a18.panelId ? t12 : { ...t12, panelId: a18.panelId };
} };
var Te4 = (0, import_react102.createContext)(null);
Te4.displayName = "PopoverContext";
function le3(t12) {
  let a18 = (0, import_react102.useContext)(Te4);
  if (a18 === null) {
    let f20 = new Error(`<${t12} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f20, le3), f20;
  }
  return a18;
}
var ae4 = (0, import_react102.createContext)(null);
ae4.displayName = "PopoverAPIContext";
function me3(t12) {
  let a18 = (0, import_react102.useContext)(ae4);
  if (a18 === null) {
    let f20 = new Error(`<${t12} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f20, me3), f20;
  }
  return a18;
}
var ye3 = (0, import_react102.createContext)(null);
ye3.displayName = "PopoverGroupContext";
function Fe3() {
  return (0, import_react102.useContext)(ye3);
}
var pe6 = (0, import_react102.createContext)(null);
pe6.displayName = "PopoverPanelContext";
function pt2() {
  return (0, import_react102.useContext)(pe6);
}
function st2(t12, a18) {
  return u2(a18.type, at2, t12, a18);
}
var ut2 = "div";
function it2(t12, a18) {
  var J6;
  let { __demoMode: f20 = false, ...C7 } = t12, m12 = (0, import_react102.useRef)(null), R8 = y(a18, T3((e7) => {
    m12.current = e7;
  })), u17 = (0, import_react102.useRef)([]), l16 = (0, import_react102.useReducer)(st2, { __demoMode: f20, popoverState: f20 ? 0 : 1, buttons: u17, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react102.createRef)(), afterPanelSentinel: (0, import_react102.createRef)(), afterButtonSentinel: (0, import_react102.createRef)() }), [{ popoverState: c14, button: P8, buttonId: r17, panel: i15, panelId: B4, beforePanelSentinel: y10, afterPanelSentinel: I7, afterButtonSentinel: d12 }, n13] = l16, v6 = n9((J6 = m12.current) != null ? J6 : P8), _5 = (0, import_react102.useMemo)(() => {
    if (!P8 || !i15) return false;
    for (let g6 of document.querySelectorAll("body > *")) if (Number(g6 == null ? void 0 : g6.contains(P8)) ^ Number(g6 == null ? void 0 : g6.contains(i15))) return true;
    let e7 = b2(), s14 = e7.indexOf(P8), o19 = (s14 + e7.length - 1) % e7.length, p7 = (s14 + 1) % e7.length, S8 = e7[o19], b6 = e7[p7];
    return !i15.contains(S8) && !i15.contains(b6);
  }, [P8, i15]), F7 = s3(r17), x7 = s3(B4), W7 = (0, import_react102.useMemo)(() => ({ buttonId: F7, panelId: x7, close: () => n13({ type: 1 }) }), [F7, x7, n13]), T10 = Fe3(), D11 = T10 == null ? void 0 : T10.registerPopover, N5 = o4(() => {
    var e7;
    return (e7 = T10 == null ? void 0 : T10.isFocusWithinPopoverGroup()) != null ? e7 : (v6 == null ? void 0 : v6.activeElement) && ((P8 == null ? void 0 : P8.contains(v6.activeElement)) || (i15 == null ? void 0 : i15.contains(v6.activeElement)));
  });
  (0, import_react102.useEffect)(() => D11 == null ? void 0 : D11(W7), [D11, W7]);
  let [M8, j10] = ee(), h8 = j6({ mainTreeNodeRef: T10 == null ? void 0 : T10.mainTreeNodeRef, portals: M8, defaultContainers: [P8, i15] });
  E5(v6 == null ? void 0 : v6.defaultView, "focus", (e7) => {
    var s14, o19, p7, S8, b6, g6;
    e7.target !== window && e7.target instanceof HTMLElement && c14 === 0 && (N5() || P8 && i15 && (h8.contains(e7.target) || (o19 = (s14 = y10.current) == null ? void 0 : s14.contains) != null && o19.call(s14, e7.target) || (S8 = (p7 = I7.current) == null ? void 0 : p7.contains) != null && S8.call(p7, e7.target) || (g6 = (b6 = d12.current) == null ? void 0 : b6.contains) != null && g6.call(b6, e7.target) || n13({ type: 1 })));
  }, true), F2(c14 === 0, h8.resolveContainers, (e7, s14) => {
    n13({ type: 1 }), A2(s14, h5.Loose) || (e7.preventDefault(), P8 == null || P8.focus());
  });
  let O5 = o4((e7) => {
    n13({ type: 1 });
    let s14 = (() => e7 ? e7 instanceof HTMLElement ? e7 : "current" in e7 && e7.current instanceof HTMLElement ? e7.current : P8 : P8)();
    s14 == null || s14.focus();
  }), k5 = (0, import_react102.useMemo)(() => ({ close: O5, isPortalled: _5 }), [O5, _5]), V6 = (0, import_react102.useMemo)(() => ({ open: c14 === 0, close: O5 }), [c14, O5]), $5 = { ref: R8 };
  return import_react102.default.createElement(ve, null, import_react102.default.createElement(pe6.Provider, { value: null }, import_react102.default.createElement(Te4.Provider, { value: l16 }, import_react102.default.createElement(ae4.Provider, { value: k5 }, import_react102.default.createElement(u8, { value: O5 }, import_react102.default.createElement(c8, { value: u2(c14, { [0]: i11.Open, [1]: i11.Closed }) }, import_react102.default.createElement(j10, null, H({ ourProps: $5, theirProps: C7, slot: V6, defaultTag: ut2, name: "Popover" }), import_react102.default.createElement(h8.MainTreeNode, null))))))));
}
var dt2 = "button";
function ft2(t12, a18) {
  let f20 = (0, import_react46.useId)(), { id: C7 = `headlessui-popover-button-${f20}`, disabled: m12 = false, autoFocus: R8 = false, ...u17 } = t12, [l16, c14] = le3("Popover.Button"), { isPortalled: P8 } = me3("Popover.Button"), r17 = (0, import_react102.useRef)(null), i15 = `headlessui-focus-sentinel-${(0, import_react46.useId)()}`, B4 = Fe3(), y10 = B4 == null ? void 0 : B4.closeOthers, d12 = pt2() !== null;
  (0, import_react102.useEffect)(() => {
    if (!d12) return c14({ type: 3, buttonId: C7 }), () => {
      c14({ type: 3, buttonId: null });
    };
  }, [d12, C7, c14]);
  let [n13] = (0, import_react102.useState)(() => Symbol()), v6 = y(r17, a18, ye(), d12 ? null : (o19) => {
    if (o19) l16.buttons.current.push(n13);
    else {
      let p7 = l16.buttons.current.indexOf(n13);
      p7 !== -1 && l16.buttons.current.splice(p7, 1);
    }
    l16.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), o19 && c14({ type: 2, button: o19 });
  }), _5 = y(r17, a18), F7 = n9(r17), x7 = o4((o19) => {
    var p7, S8, b6;
    if (d12) {
      if (l16.popoverState === 1) return;
      switch (o19.key) {
        case o8.Space:
        case o8.Enter:
          o19.preventDefault(), (S8 = (p7 = o19.target).click) == null || S8.call(p7), c14({ type: 1 }), (b6 = l16.button) == null || b6.focus();
          break;
      }
    } else switch (o19.key) {
      case o8.Space:
      case o8.Enter:
        o19.preventDefault(), o19.stopPropagation(), l16.popoverState === 1 && (y10 == null || y10(l16.buttonId)), c14({ type: 0 });
        break;
      case o8.Escape:
        if (l16.popoverState !== 0) return y10 == null ? void 0 : y10(l16.buttonId);
        if (!r17.current || F7 != null && F7.activeElement && !r17.current.contains(F7.activeElement)) return;
        o19.preventDefault(), o19.stopPropagation(), c14({ type: 1 });
        break;
    }
  }), W7 = o4((o19) => {
    d12 || o19.key === o8.Space && o19.preventDefault();
  }), T10 = o4((o19) => {
    var p7, S8;
    r5(o19.currentTarget) || m12 || (d12 ? (c14({ type: 1 }), (p7 = l16.button) == null || p7.focus()) : (o19.preventDefault(), o19.stopPropagation(), l16.popoverState === 1 && (y10 == null || y10(l16.buttonId)), c14({ type: 0 }), (S8 = l16.button) == null || S8.focus()));
  }), D11 = o4((o19) => {
    o19.preventDefault(), o19.stopPropagation();
  }), { isFocusVisible: N5, focusProps: M8 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: R8 }), { isHovered: j10, hoverProps: h8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: m12 }), { pressed: Q4, pressProps: O5 } = w({ disabled: m12 }), k5 = l16.popoverState === 0, V6 = (0, import_react102.useMemo)(() => ({ open: k5, active: Q4 || k5, disabled: m12, hover: j10, focus: N5, autofocus: R8 }), [k5, j10, N5, Q4, m12, R8]), $5 = T7(t12, r17), J6 = d12 ? D({ ref: _5, type: $5, onKeyDown: x7, onClick: T10, disabled: m12 || void 0, autoFocus: R8 }, M8, h8, O5) : D({ ref: v6, id: l16.buttonId, type: $5, "aria-expanded": l16.popoverState === 0, "aria-controls": l16.panel ? l16.panelId : void 0, disabled: m12 || void 0, autoFocus: R8, onKeyDown: x7, onKeyUp: W7, onClick: T10, onMouseDown: D11 }, M8, h8, O5), e7 = u16(), s14 = o4(() => {
    let o19 = l16.panel;
    if (!o19) return;
    function p7() {
      u2(e7.current, { [a13.Forwards]: () => P6(o19, F.First), [a13.Backwards]: () => P6(o19, F.Last) }) === T6.Error && P6(b2().filter((b6) => b6.dataset.headlessuiFocusGuard !== "true"), u2(e7.current, { [a13.Forwards]: F.Next, [a13.Backwards]: F.Previous }), { relativeTo: l16.button });
    }
    p7();
  });
  return import_react102.default.createElement(import_react102.default.Fragment, null, H({ ourProps: J6, theirProps: u17, slot: V6, defaultTag: dt2, name: "Popover.Button" }), k5 && !d12 && P8 && import_react102.default.createElement(T2, { id: i15, ref: l16.afterButtonSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: s14 }));
}
var Pt3 = "div";
var ct3 = M.RenderStrategy | M.Static;
function Me2(t12, a18) {
  let f20 = (0, import_react46.useId)(), { id: C7 = `headlessui-popover-backdrop-${f20}`, transition: m12 = false, ...R8 } = t12, [{ popoverState: u17 }, l16] = le3("Popover.Backdrop"), c14 = (0, import_react102.useRef)(null), P8 = y(a18, c14), r17 = u13(), [i15, B4] = V2(m12, c14, r17 !== null ? (r17 & i11.Open) === i11.Open : u17 === 0), y10 = o4((n13) => {
    if (r5(n13.currentTarget)) return n13.preventDefault();
    l16({ type: 1 });
  }), I7 = (0, import_react102.useMemo)(() => ({ open: u17 === 0 }), [u17]), d12 = { ref: P8, id: C7, "aria-hidden": true, onClick: y10, ...A3(B4) };
  return H({ ourProps: d12, theirProps: R8, slot: I7, defaultTag: Pt3, features: ct3, visible: i15, name: "Popover.Backdrop" });
}
var vt2 = "div";
var Tt2 = M.RenderStrategy | M.Static;
function mt2(t12, a18) {
  let f20 = (0, import_react46.useId)(), { id: C7 = `headlessui-popover-panel-${f20}`, focus: m12 = false, anchor: R8, portal: u17 = false, modal: l16 = false, transition: c14 = false, ...P8 } = t12, [r17, i15] = le3("Popover.Panel"), { close: B4, isPortalled: y10 } = me3("Popover.Panel"), I7 = `headlessui-focus-sentinel-before-${f20}`, d12 = `headlessui-focus-sentinel-after-${f20}`, n13 = (0, import_react102.useRef)(null), v6 = xe(R8), [_5, F7] = Re2(v6), x7 = be();
  v6 && (u17 = true);
  let W7 = y(n13, a18, v6 ? _5 : null, (e7) => {
    i15({ type: 4, panel: e7 });
  }), T10 = n9(n13), D11 = I();
  n(() => (i15({ type: 5, panelId: C7 }), () => {
    i15({ type: 5, panelId: null });
  }), [C7, i15]);
  let N5 = u13(), [M8, j10] = V2(c14, n13, N5 !== null ? (N5 & i11.Open) === i11.Open : r17.popoverState === 0);
  m6(M8, r17.button, () => {
    i15({ type: 1 });
  });
  let h8 = r17.__demoMode ? false : l16 && M8;
  f11(h8, T10);
  let Q4 = o4((e7) => {
    var s14;
    switch (e7.key) {
      case o8.Escape:
        if (r17.popoverState !== 0 || !n13.current || T10 != null && T10.activeElement && !n13.current.contains(T10.activeElement)) return;
        e7.preventDefault(), e7.stopPropagation(), i15({ type: 1 }), (s14 = r17.button) == null || s14.focus();
        break;
    }
  });
  (0, import_react102.useEffect)(() => {
    var e7;
    t12.static || r17.popoverState === 1 && ((e7 = t12.unmount) == null || e7) && i15({ type: 4, panel: null });
  }, [r17.popoverState, t12.unmount, t12.static, i15]), (0, import_react102.useEffect)(() => {
    if (r17.__demoMode || !m12 || r17.popoverState !== 0 || !n13.current) return;
    let e7 = T10 == null ? void 0 : T10.activeElement;
    n13.current.contains(e7) || P6(n13.current, F.First);
  }, [r17.__demoMode, m12, n13, r17.popoverState]);
  let O5 = (0, import_react102.useMemo)(() => ({ open: r17.popoverState === 0, close: B4 }), [r17.popoverState, B4]), k5 = D(v6 ? x7() : {}, { ref: W7, id: C7, onKeyDown: Q4, onBlur: m12 && r17.popoverState === 0 ? (e7) => {
    var o19, p7, S8, b6, g6;
    let s14 = e7.relatedTarget;
    s14 && n13.current && ((o19 = n13.current) != null && o19.contains(s14) || (i15({ type: 1 }), ((S8 = (p7 = r17.beforePanelSentinel.current) == null ? void 0 : p7.contains) != null && S8.call(p7, s14) || (g6 = (b6 = r17.afterPanelSentinel.current) == null ? void 0 : b6.contains) != null && g6.call(b6, s14)) && s14.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1, style: { ...P8.style, ...F7, "--button-width": f7(r17.button, true).width }, ...A3(j10) }), V6 = u16(), $5 = o4(() => {
    let e7 = n13.current;
    if (!e7) return;
    function s14() {
      u2(V6.current, { [a13.Forwards]: () => {
        var p7;
        P6(e7, F.First) === T6.Error && ((p7 = r17.afterPanelSentinel.current) == null || p7.focus());
      }, [a13.Backwards]: () => {
        var o19;
        (o19 = r17.button) == null || o19.focus({ preventScroll: true });
      } });
    }
    s14();
  }), J6 = o4(() => {
    let e7 = n13.current;
    if (!e7) return;
    function s14() {
      u2(V6.current, { [a13.Forwards]: () => {
        var Ee4;
        if (!r17.button) return;
        let o19 = b2(), p7 = o19.indexOf(r17.button), S8 = o19.slice(0, p7 + 1), g6 = [...o19.slice(p7 + 1), ...S8];
        for (let se2 of g6.slice()) if (se2.dataset.headlessuiFocusGuard === "true" || (Ee4 = r17.panel) != null && Ee4.contains(se2)) {
          let be4 = g6.indexOf(se2);
          be4 !== -1 && g6.splice(be4, 1);
        }
        P6(g6, F.First, { sorted: false });
      }, [a13.Backwards]: () => {
        var p7;
        P6(e7, F.Previous) === T6.Error && ((p7 = r17.button) == null || p7.focus());
      } });
    }
    s14();
  });
  return import_react102.default.createElement(s8, null, import_react102.default.createElement(pe6.Provider, { value: C7 }, import_react102.default.createElement(ae4.Provider, { value: { close: B4, isPortalled: y10 } }, import_react102.default.createElement(te, { enabled: u17 ? t12.static || M8 : false }, M8 && y10 && import_react102.default.createElement(T2, { id: I7, ref: r17.beforePanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: $5 }), H({ mergeRefs: D11, ourProps: k5, theirProps: P8, slot: O5, defaultTag: vt2, features: Tt2, visible: M8, name: "Popover.Panel" }), M8 && y10 && import_react102.default.createElement(T2, { id: d12, ref: r17.afterPanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: J6 })))));
}
var yt2 = "div";
function Et2(t12, a18) {
  let f20 = (0, import_react102.useRef)(null), C7 = y(f20, a18), [m12, R8] = (0, import_react102.useState)([]), u17 = y7(), l16 = o4((d12) => {
    R8((n13) => {
      let v6 = n13.indexOf(d12);
      if (v6 !== -1) {
        let _5 = n13.slice();
        return _5.splice(v6, 1), _5;
      }
      return n13;
    });
  }), c14 = o4((d12) => (R8((n13) => [...n13, d12]), () => l16(d12))), P8 = o4(() => {
    var v6;
    let d12 = u(f20);
    if (!d12) return false;
    let n13 = d12.activeElement;
    return (v6 = f20.current) != null && v6.contains(n13) ? true : m12.some((_5) => {
      var F7, x7;
      return ((F7 = d12.getElementById(_5.buttonId.current)) == null ? void 0 : F7.contains(n13)) || ((x7 = d12.getElementById(_5.panelId.current)) == null ? void 0 : x7.contains(n13));
    });
  }), r17 = o4((d12) => {
    for (let n13 of m12) n13.buttonId.current !== d12 && n13.close();
  }), i15 = (0, import_react102.useMemo)(() => ({ registerPopover: c14, unregisterPopover: l16, isFocusWithinPopoverGroup: P8, closeOthers: r17, mainTreeNodeRef: u17.mainTreeNodeRef }), [c14, l16, P8, r17, u17.mainTreeNodeRef]), B4 = (0, import_react102.useMemo)(() => ({}), []), y10 = t12, I7 = { ref: C7 };
  return import_react102.default.createElement(ye3.Provider, { value: i15 }, H({ ourProps: I7, theirProps: y10, slot: B4, defaultTag: yt2, name: "Popover.Group" }), import_react102.default.createElement(u17.MainTreeNode, null));
}
var bt = W(it2);
var gt3 = W(ft2);
var St2 = W(Me2);
var At2 = W(Me2);
var Rt2 = W(mt2);
var Ct2 = W(Et2);
var no = Object.assign(bt, { Button: gt3, Backdrop: At2, Overlay: St2, Panel: Rt2, Group: Ct2 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react103 = __toESM(require_react(), 1);
var Le4 = ((e7) => (e7[e7.RegisterOption = 0] = "RegisterOption", e7[e7.UnregisterOption = 1] = "UnregisterOption", e7))(Le4 || {});
var ke2 = { [0](o19, t12) {
  let e7 = [...o19.options, { id: t12.id, element: t12.element, propsRef: t12.propsRef }];
  return { ...o19, options: _2(e7, (a18) => a18.element.current) };
}, [1](o19, t12) {
  let e7 = o19.options.slice(), a18 = o19.options.findIndex((O5) => O5.id === t12.id);
  return a18 === -1 ? o19 : (e7.splice(a18, 1), { ...o19, options: e7 });
} };
var j9 = (0, import_react103.createContext)(null);
j9.displayName = "RadioGroupDataContext";
function J5(o19) {
  let t12 = (0, import_react103.useContext)(j9);
  if (t12 === null) {
    let e7 = new Error(`<${o19} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, J5), e7;
  }
  return t12;
}
var X2 = (0, import_react103.createContext)(null);
X2.displayName = "RadioGroupActionsContext";
function z4(o19) {
  let t12 = (0, import_react103.useContext)(X2);
  if (t12 === null) {
    let e7 = new Error(`<${o19} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, z4), e7;
  }
  return t12;
}
function Fe4(o19, t12) {
  return u2(t12.type, ke2, o19, t12);
}
var Ie4 = "div";
function Ue3(o19, t12) {
  let e7 = (0, import_react46.useId)(), a18 = a3(), { id: O5 = `headlessui-radiogroup-${e7}`, value: m12, form: P8, name: i15, onChange: f20, by: c14, disabled: p7 = a18 || false, defaultValue: I7, ...y10 } = o19, T10 = u9(c14), [v6, C7] = (0, import_react103.useReducer)(Fe4, { options: [] }), n13 = v6.options, [U4, h8] = z(), [D11, L8] = U(), A9 = (0, import_react103.useRef)(null), M8 = y(A9, t12), l16 = l2(I7), [s14, _5] = T(m12, f20, l16), R8 = (0, import_react103.useMemo)(() => n13.find((r17) => !r17.propsRef.current.disabled), [n13]), b6 = (0, import_react103.useMemo)(() => n13.some((r17) => T10(r17.propsRef.current.value, s14)), [n13, s14]), d12 = o4((r17) => {
    var u17;
    if (p7 || T10(r17, s14)) return false;
    let k5 = (u17 = n13.find((H10) => T10(H10.propsRef.current.value, r17))) == null ? void 0 : u17.propsRef.current;
    return k5 != null && k5.disabled ? false : (_5 == null || _5(r17), true);
  }), de4 = o4((r17) => {
    let k5 = A9.current;
    if (!k5) return;
    let u17 = u(k5), H10 = n13.filter((g6) => g6.propsRef.current.disabled === false).map((g6) => g6.element.current);
    switch (r17.key) {
      case o8.Enter:
        p2(r17.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (r17.preventDefault(), r17.stopPropagation(), P6(H10, F.Previous | F.WrapAround) === T6.Success) {
          let E11 = n13.find((N5) => N5.element.current === (u17 == null ? void 0 : u17.activeElement));
          E11 && d12(E11.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (r17.preventDefault(), r17.stopPropagation(), P6(H10, F.Next | F.WrapAround) === T6.Success) {
          let E11 = n13.find((N5) => N5.element.current === (u17 == null ? void 0 : u17.activeElement));
          E11 && d12(E11.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          r17.preventDefault(), r17.stopPropagation();
          let g6 = n13.find((E11) => E11.element.current === (u17 == null ? void 0 : u17.activeElement));
          g6 && d12(g6.propsRef.current.value);
        }
        break;
    }
  }), q5 = o4((r17) => (C7({ type: 0, ...r17 }), () => C7({ type: 1, id: r17.id }))), ue5 = (0, import_react103.useMemo)(() => ({ value: s14, firstOption: R8, containsCheckedOption: b6, disabled: p7, compare: T10, ...v6 }), [s14, R8, b6, p7, T10, v6]), ce5 = (0, import_react103.useMemo)(() => ({ registerOption: q5, change: d12 }), [q5, d12]), fe4 = { ref: M8, id: O5, role: "radiogroup", "aria-labelledby": U4, "aria-describedby": D11, onKeyDown: de4 }, Te5 = (0, import_react103.useMemo)(() => ({ value: s14 }), [s14]), me4 = (0, import_react103.useCallback)(() => {
    if (l16 !== void 0) return d12(l16);
  }, [d12, l16]);
  return import_react103.default.createElement(L8, { name: "RadioGroup.Description" }, import_react103.default.createElement(h8, { name: "RadioGroup.Label" }, import_react103.default.createElement(X2.Provider, { value: ce5 }, import_react103.default.createElement(j9.Provider, { value: ue5 }, i15 != null && import_react103.default.createElement(j2, { disabled: p7, data: { [i15]: s14 || "on" }, overrides: { type: "radio", checked: s14 != null }, form: P8, onReset: me4 }), H({ ourProps: fe4, theirProps: y10, slot: Te5, defaultTag: Ie4, name: "RadioGroup" })))));
}
var Me3 = "div";
function Se4(o19, t12) {
  var R8;
  let e7 = J5("RadioGroup.Option"), a18 = z4("RadioGroup.Option"), O5 = (0, import_react46.useId)(), { id: m12 = `headlessui-radiogroup-option-${O5}`, value: P8, disabled: i15 = e7.disabled || false, autoFocus: f20 = false, ...c14 } = o19, p7 = (0, import_react103.useRef)(null), I7 = y(p7, t12), [y10, T10] = z(), [v6, C7] = U(), n13 = s3({ value: P8, disabled: i15 });
  n(() => a18.registerOption({ id: m12, element: p7, propsRef: n13 }), [m12, a18, p7, n13]);
  let U4 = o4((b6) => {
    var d12;
    if (r5(b6.currentTarget)) return b6.preventDefault();
    a18.change(P8) && ((d12 = p7.current) == null || d12.focus());
  }), h8 = ((R8 = e7.firstOption) == null ? void 0 : R8.id) === m12, { isFocusVisible: D11, focusProps: L8 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f20 }), { isHovered: A9, hoverProps: M8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i15 }), l16 = e7.compare(e7.value, P8), s14 = D({ ref: I7, id: m12, role: "radio", "aria-checked": l16 ? "true" : "false", "aria-labelledby": y10, "aria-describedby": v6, "aria-disabled": i15 ? true : void 0, tabIndex: (() => i15 ? -1 : l16 || !e7.containsCheckedOption && h8 ? 0 : -1)(), onClick: i15 ? void 0 : U4, autoFocus: f20 }, L8, M8), _5 = (0, import_react103.useMemo)(() => ({ checked: l16, disabled: i15, active: D11, hover: A9, focus: D11, autofocus: f20 }), [l16, i15, A9, D11, f20]);
  return import_react103.default.createElement(C7, { name: "RadioGroup.Description" }, import_react103.default.createElement(T10, { name: "RadioGroup.Label" }, H({ ourProps: s14, theirProps: c14, slot: _5, defaultTag: Me3, name: "RadioGroup.Option" })));
}
var He4 = "span";
function we2(o19, t12) {
  var R8;
  let e7 = J5("Radio"), a18 = z4("Radio"), O5 = (0, import_react46.useId)(), m12 = u5(), P8 = a3(), { id: i15 = m12 || `headlessui-radio-${O5}`, value: f20, disabled: c14 = e7.disabled || P8 || false, autoFocus: p7 = false, ...I7 } = o19, y10 = (0, import_react103.useRef)(null), T10 = y(y10, t12), v6 = I2(), C7 = G(), n13 = s3({ value: f20, disabled: c14 });
  n(() => a18.registerOption({ id: i15, element: y10, propsRef: n13 }), [i15, a18, y10, n13]);
  let U4 = o4((b6) => {
    var d12;
    if (r5(b6.currentTarget)) return b6.preventDefault();
    a18.change(f20) && ((d12 = y10.current) == null || d12.focus());
  }), { isFocusVisible: h8, focusProps: D11 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p7 }), { isHovered: L8, hoverProps: A9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: c14 }), M8 = ((R8 = e7.firstOption) == null ? void 0 : R8.id) === i15, l16 = e7.compare(e7.value, f20), s14 = D({ ref: T10, id: i15, role: "radio", "aria-checked": l16 ? "true" : "false", "aria-labelledby": v6, "aria-describedby": C7, "aria-disabled": c14 ? true : void 0, tabIndex: (() => c14 ? -1 : l16 || !e7.containsCheckedOption && M8 ? 0 : -1)(), autoFocus: p7, onClick: c14 ? void 0 : U4 }, D11, A9), _5 = (0, import_react103.useMemo)(() => ({ checked: l16, disabled: c14, hover: L8, focus: h8, autofocus: p7 }), [l16, c14, L8, h8, p7]);
  return H({ ourProps: s14, theirProps: I7, slot: _5, defaultTag: He4, name: "Radio" });
}
var Ne4 = W(Ue3);
var We3 = W(Se4);
var Be2 = W(we2);
var Ve2 = K;
var Ke = w3;
var Tt3 = Object.assign(Ne4, { Option: We3, Radio: Be2, Label: Ve2, Description: Ke });

// node_modules/@headlessui/react/dist/components/select/select.js
var import_react104 = __toESM(require_react(), 1);
var H8 = "select";
function B3(a18, i15) {
  let p7 = (0, import_react46.useId)(), d12 = u5(), n13 = a3(), { id: c14 = d12 || `headlessui-select-${p7}`, disabled: e7 = n13 || false, invalid: t12 = false, autoFocus: o19 = false, ...f20 } = a18, m12 = I2(), u17 = G(), { isFocusVisible: r17, focusProps: T10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o19 }), { isHovered: l16, hoverProps: b6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: s14, pressProps: y10 } = w({ disabled: e7 }), P8 = D({ ref: i15, id: c14, "aria-labelledby": m12, "aria-describedby": u17, "aria-invalid": t12 ? "" : void 0, disabled: e7 || void 0, autoFocus: o19 }, T10, b6, y10), S8 = (0, import_react104.useMemo)(() => ({ disabled: e7, invalid: t12, hover: l16, focus: r17, active: s14, autofocus: o19 }), [e7, t12, l16, r17, s14, o19]);
  return H({ ourProps: P8, theirProps: f20, slot: S8, defaultTag: H8, name: "Select" });
}
var $4 = W(B3);

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react105 = __toESM(require_react(), 1);
var S7 = (0, import_react105.createContext)(null);
S7.displayName = "GroupContext";
var _e3 = import_react105.Fragment;
function Pe2(n13) {
  var a18;
  let [o19, p7] = (0, import_react105.useState)(null), [f20, b6] = z(), [h8, t12] = U(), c14 = (0, import_react105.useMemo)(() => ({ switch: o19, setSwitch: p7 }), [o19, p7]), T10 = {}, y10 = n13;
  return import_react105.default.createElement(t12, { name: "Switch.Description", value: h8 }, import_react105.default.createElement(b6, { name: "Switch.Label", value: f20, props: { htmlFor: (a18 = c14.switch) == null ? void 0 : a18.id, onClick(u17) {
    o19 && (u17.currentTarget instanceof HTMLLabelElement && u17.preventDefault(), o19.click(), o19.focus({ preventScroll: true }));
  } } }, import_react105.default.createElement(S7.Provider, { value: c14 }, H({ ourProps: T10, theirProps: y10, slot: {}, defaultTag: _e3, name: "Switch.Group" }))));
}
var Ee2 = "button";
function De4(n13, o19) {
  var C7;
  let p7 = (0, import_react46.useId)(), f20 = u5(), b6 = a3(), { id: h8 = f20 || `headlessui-switch-${p7}`, disabled: t12 = b6 || false, checked: c14, defaultChecked: T10, onChange: y10, name: a18, value: u17, form: F7, autoFocus: d12 = false, ...k5 } = n13, w9 = (0, import_react105.useContext)(S7), _5 = (0, import_react105.useRef)(null), H10 = y(_5, o19, w9 === null ? null : w9.setSwitch), l16 = l2(T10), [s14, r17] = T(c14, y10, l16 != null ? l16 : false), M8 = p(), [P8, E11] = (0, import_react105.useState)(false), D11 = o4(() => {
    E11(true), r17 == null || r17(!s14), M8.nextFrame(() => {
      E11(false);
    });
  }), U4 = o4((e7) => {
    if (r5(e7.currentTarget)) return e7.preventDefault();
    e7.preventDefault(), D11();
  }), I7 = o4((e7) => {
    e7.key === o8.Space ? (e7.preventDefault(), D11()) : e7.key === o8.Enter && p2(e7.currentTarget);
  }), B4 = o4((e7) => e7.preventDefault()), K4 = I2(), W7 = G(), { isFocusVisible: g6, focusProps: O5 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: d12 }), { isHovered: v6, hoverProps: N5 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: t12 }), { pressed: x7, pressProps: J6 } = w({ disabled: t12 }), V6 = (0, import_react105.useMemo)(() => ({ checked: s14, disabled: t12, hover: v6, focus: g6, active: x7, autofocus: d12, changing: P8 }), [s14, v6, g6, x7, t12, P8, d12]), X3 = D({ id: h8, ref: H10, role: "switch", type: T7(n13, _5), tabIndex: n13.tabIndex === -1 ? 0 : (C7 = n13.tabIndex) != null ? C7 : 0, "aria-checked": s14, "aria-labelledby": K4, "aria-describedby": W7, disabled: t12 || void 0, autoFocus: d12, onClick: U4, onKeyUp: I7, onKeyPress: B4 }, O5, N5, J6), j10 = (0, import_react105.useCallback)(() => {
    if (l16 !== void 0) return r17 == null ? void 0 : r17(l16);
  }, [r17, l16]);
  return import_react105.default.createElement(import_react105.default.Fragment, null, a18 != null && import_react105.default.createElement(j2, { disabled: t12, data: { [a18]: u17 || "on" }, overrides: { type: "checkbox", checked: s14 }, form: F7, onReset: j10 }), H({ ourProps: X3, theirProps: k5, slot: V6, defaultTag: Ee2, name: "Switch" }));
}
var ge3 = W(De4);
var ve2 = Pe2;
var xe5 = K;
var Ce2 = w3;
var qe2 = Object.assign(ge3, { Group: ve2, Label: xe5, Description: Ce2 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react107 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react106 = __toESM(require_react(), 1);
function b5({ onFocus: n13 }) {
  let [r17, o19] = (0, import_react106.useState)(true), u17 = f18();
  return r17 ? import_react106.default.createElement(T2, { as: "button", type: "button", features: s4.Focusable, onFocus: (a18) => {
    a18.preventDefault();
    let e7, i15 = 50;
    function t12() {
      if (i15-- <= 0) {
        e7 && cancelAnimationFrame(e7);
        return;
      }
      if (n13()) {
        if (cancelAnimationFrame(e7), !u17.current) return;
        o19(false);
        return;
      }
      e7 = requestAnimationFrame(t12);
    }
    e7 = requestAnimationFrame(t12);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var l15 = __toESM(require_react(), 1);
var s13 = l15.createContext(null);
function a17() {
  return { groups: /* @__PURE__ */ new Map(), get(o19, e7) {
    var i15;
    let t12 = this.groups.get(o19);
    t12 || (t12 = /* @__PURE__ */ new Map(), this.groups.set(o19, t12));
    let n13 = (i15 = t12.get(e7)) != null ? i15 : 0;
    t12.set(e7, n13 + 1);
    let r17 = Array.from(t12.keys()).indexOf(e7);
    function u17() {
      let c14 = t12.get(e7);
      c14 > 1 ? t12.set(e7, c14 - 1) : t12.delete(e7);
    }
    return [r17, u17];
  } };
}
function f19({ children: o19 }) {
  let e7 = l15.useRef(a17());
  return l15.createElement(s13.Provider, { value: e7 }, o19);
}
function C5(o19) {
  let e7 = l15.useContext(s13);
  if (!e7) throw new Error("You must wrap your component in a <StableCollection>");
  let t12 = l15.useId(), [n13, r17] = e7.current.get(o19, t12);
  return l15.useEffect(() => r17, []), n13;
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var Ae3 = ((t12) => (t12[t12.Forwards = 0] = "Forwards", t12[t12.Backwards = 1] = "Backwards", t12))(Ae3 || {});
var Ee3 = ((o19) => (o19[o19.Less = -1] = "Less", o19[o19.Equal = 0] = "Equal", o19[o19.Greater = 1] = "Greater", o19))(Ee3 || {});
var Re6 = ((n13) => (n13[n13.SetSelectedIndex = 0] = "SetSelectedIndex", n13[n13.RegisterTab = 1] = "RegisterTab", n13[n13.UnregisterTab = 2] = "UnregisterTab", n13[n13.RegisterPanel = 3] = "RegisterPanel", n13[n13.UnregisterPanel = 4] = "UnregisterPanel", n13))(Re6 || {});
var Le5 = { [0](e7, r17) {
  var c14;
  let t12 = _2(e7.tabs, (T10) => T10.current), o19 = _2(e7.panels, (T10) => T10.current), a18 = t12.filter((T10) => {
    var d12;
    return !((d12 = T10.current) != null && d12.hasAttribute("disabled"));
  }), n13 = { ...e7, tabs: t12, panels: o19 };
  if (r17.index < 0 || r17.index > t12.length - 1) {
    let T10 = u2(Math.sign(r17.index - e7.selectedIndex), { [-1]: () => 1, [0]: () => u2(Math.sign(r17.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (a18.length === 0) return n13;
    let d12 = u2(T10, { [0]: () => t12.indexOf(a18[0]), [1]: () => t12.indexOf(a18[a18.length - 1]) });
    return { ...n13, selectedIndex: d12 === -1 ? e7.selectedIndex : d12 };
  }
  let u17 = t12.slice(0, r17.index), x7 = [...t12.slice(r17.index), ...u17].find((T10) => a18.includes(T10));
  if (!x7) return n13;
  let f20 = (c14 = t12.indexOf(x7)) != null ? c14 : e7.selectedIndex;
  return f20 === -1 && (f20 = e7.selectedIndex), { ...n13, selectedIndex: f20 };
}, [1](e7, r17) {
  if (e7.tabs.includes(r17.tab)) return e7;
  let t12 = e7.tabs[e7.selectedIndex], o19 = _2([...e7.tabs, r17.tab], (n13) => n13.current), a18 = e7.selectedIndex;
  return e7.info.current.isControlled || (a18 = o19.indexOf(t12), a18 === -1 && (a18 = e7.selectedIndex)), { ...e7, tabs: o19, selectedIndex: a18 };
}, [2](e7, r17) {
  return { ...e7, tabs: e7.tabs.filter((t12) => t12 !== r17.tab) };
}, [3](e7, r17) {
  return e7.panels.includes(r17.panel) ? e7 : { ...e7, panels: _2([...e7.panels, r17.panel], (t12) => t12.current) };
}, [4](e7, r17) {
  return { ...e7, panels: e7.panels.filter((t12) => t12 !== r17.panel) };
} };
var z6 = (0, import_react107.createContext)(null);
z6.displayName = "TabsDataContext";
function C6(e7) {
  let r17 = (0, import_react107.useContext)(z6);
  if (r17 === null) {
    let t12 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t12, C6), t12;
  }
  return r17;
}
var V5 = (0, import_react107.createContext)(null);
V5.displayName = "TabsActionsContext";
function Q3(e7) {
  let r17 = (0, import_react107.useContext)(V5);
  if (r17 === null) {
    let t12 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t12, Q3), t12;
  }
  return r17;
}
function _e4(e7, r17) {
  return u2(r17.type, Le5, e7, r17);
}
var De5 = "div";
function Se5(e7, r17) {
  let { defaultIndex: t12 = 0, vertical: o19 = false, manual: a18 = false, onChange: n13, selectedIndex: u17 = null, ..._5 } = e7;
  const x7 = o19 ? "vertical" : "horizontal", f20 = a18 ? "manual" : "auto";
  let c14 = u17 !== null, T10 = s3({ isControlled: c14 }), d12 = y(r17), [i15, s14] = (0, import_react107.useReducer)(_e4, { info: T10, selectedIndex: u17 != null ? u17 : t12, tabs: [], panels: [] }), F7 = (0, import_react107.useMemo)(() => ({ selectedIndex: i15.selectedIndex }), [i15.selectedIndex]), M8 = s3(n13 || (() => {
  })), b6 = s3(i15.tabs), m12 = (0, import_react107.useMemo)(() => ({ orientation: x7, activation: f20, ...i15 }), [x7, f20, i15]), E11 = o4((p7) => (s14({ type: 1, tab: p7 }), () => s14({ type: 2, tab: p7 }))), I7 = o4((p7) => (s14({ type: 3, panel: p7 }), () => s14({ type: 4, panel: p7 }))), g6 = o4((p7) => {
    R8.current !== p7 && M8.current(p7), c14 || s14({ type: 0, index: p7 });
  }), R8 = s3(c14 ? e7.selectedIndex : i15.selectedIndex), J6 = (0, import_react107.useMemo)(() => ({ registerTab: E11, registerPanel: I7, change: g6 }), []);
  n(() => {
    s14({ type: 0, index: u17 != null ? u17 : t12 });
  }, [u17]), n(() => {
    if (R8.current === void 0 || i15.tabs.length <= 0) return;
    let p7 = _2(i15.tabs, (L8) => L8.current);
    p7.some((L8, B4) => i15.tabs[B4] !== L8) && g6(p7.indexOf(i15.tabs[R8.current]));
  });
  let k5 = { ref: d12 };
  return import_react107.default.createElement(f19, null, import_react107.default.createElement(V5.Provider, { value: J6 }, import_react107.default.createElement(z6.Provider, { value: m12 }, m12.tabs.length <= 0 && import_react107.default.createElement(b5, { onFocus: () => {
    var p7, h8;
    for (let L8 of b6.current) if (((p7 = L8.current) == null ? void 0 : p7.tabIndex) === 0) return (h8 = L8.current) == null || h8.focus(), true;
    return false;
  } }), H({ ourProps: k5, theirProps: _5, slot: F7, defaultTag: De5, name: "Tabs" }))));
}
var Fe5 = "div";
function Ie5(e7, r17) {
  let { orientation: t12, selectedIndex: o19 } = C6("Tab.List"), a18 = y(r17), n13 = (0, import_react107.useMemo)(() => ({ selectedIndex: o19 }), [o19]);
  return H({ ourProps: { ref: a18, role: "tablist", "aria-orientation": t12 }, theirProps: e7, slot: n13, defaultTag: Fe5, name: "Tabs.List" });
}
var he3 = "button";
function ve3(e7, r17) {
  var Y5, Z6;
  let t12 = (0, import_react46.useId)(), { id: o19 = `headlessui-tabs-tab-${t12}`, disabled: a18 = false, autoFocus: n13 = false, ...u17 } = e7, { orientation: _5, activation: x7, selectedIndex: f20, tabs: c14, panels: T10 } = C6("Tab"), d12 = Q3("Tab"), i15 = C6("Tab"), s14 = (0, import_react107.useRef)(null), F7 = y(s14, r17);
  n(() => d12.registerTab(s14), [d12, s14]);
  let M8 = C5("tabs"), b6 = c14.indexOf(s14);
  b6 === -1 && (b6 = M8);
  let m12 = b6 === f20, E11 = o4((l16) => {
    var X3;
    let A9 = l16();
    if (A9 === T6.Success && x7 === "auto") {
      let $5 = (X3 = u(s14)) == null ? void 0 : X3.activeElement, ee7 = i15.tabs.findIndex((Te5) => Te5.current === $5);
      ee7 !== -1 && d12.change(ee7);
    }
    return A9;
  }), I7 = o4((l16) => {
    let A9 = c14.map(($5) => $5.current).filter(Boolean);
    if (l16.key === o8.Space || l16.key === o8.Enter) {
      l16.preventDefault(), l16.stopPropagation(), d12.change(b6);
      return;
    }
    switch (l16.key) {
      case o8.Home:
      case o8.PageUp:
        return l16.preventDefault(), l16.stopPropagation(), E11(() => P6(A9, F.First));
      case o8.End:
      case o8.PageDown:
        return l16.preventDefault(), l16.stopPropagation(), E11(() => P6(A9, F.Last));
    }
    if (E11(() => u2(_5, { vertical() {
      return l16.key === o8.ArrowUp ? P6(A9, F.Previous | F.WrapAround) : l16.key === o8.ArrowDown ? P6(A9, F.Next | F.WrapAround) : T6.Error;
    }, horizontal() {
      return l16.key === o8.ArrowLeft ? P6(A9, F.Previous | F.WrapAround) : l16.key === o8.ArrowRight ? P6(A9, F.Next | F.WrapAround) : T6.Error;
    } })) === T6.Success) return l16.preventDefault();
  }), g6 = (0, import_react107.useRef)(false), R8 = o4(() => {
    var l16;
    g6.current || (g6.current = true, (l16 = s14.current) == null || l16.focus({ preventScroll: true }), d12.change(b6), t(() => {
      g6.current = false;
    }));
  }), J6 = o4((l16) => {
    l16.preventDefault();
  }), { isFocusVisible: k5, focusProps: p7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n13 }), { isHovered: h8, hoverProps: L8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a18 }), { pressed: B4, pressProps: ie5 } = w({ disabled: a18 }), pe7 = (0, import_react107.useMemo)(() => ({ selected: m12, hover: h8, active: B4, focus: k5, autofocus: n13, disabled: a18 }), [m12, h8, k5, B4, n13, a18]), ue5 = D({ ref: F7, onKeyDown: I7, onMouseDown: J6, onClick: R8, id: o19, role: "tab", type: T7(e7, s14), "aria-controls": (Z6 = (Y5 = T10[b6]) == null ? void 0 : Y5.current) == null ? void 0 : Z6.id, "aria-selected": m12, tabIndex: m12 ? 0 : -1, disabled: a18 || void 0, autoFocus: n13 }, p7, L8, ie5);
  return H({ ourProps: ue5, theirProps: u17, slot: pe7, defaultTag: he3, name: "Tabs.Tab" });
}
var Ce3 = "div";
function Me4(e7, r17) {
  let { selectedIndex: t12 } = C6("Tab.Panels"), o19 = y(r17), a18 = (0, import_react107.useMemo)(() => ({ selectedIndex: t12 }), [t12]);
  return H({ ourProps: { ref: o19 }, theirProps: e7, slot: a18, defaultTag: Ce3, name: "Tabs.Panels" });
}
var Ge2 = "div";
var Ue4 = M.RenderStrategy | M.Static;
function He5(e7, r17) {
  var E11, I7, g6, R8;
  let t12 = (0, import_react46.useId)(), { id: o19 = `headlessui-tabs-panel-${t12}`, tabIndex: a18 = 0, ...n13 } = e7, { selectedIndex: u17, tabs: _5, panels: x7 } = C6("Tab.Panel"), f20 = Q3("Tab.Panel"), c14 = (0, import_react107.useRef)(null), T10 = y(c14, r17);
  n(() => f20.registerPanel(c14), [f20, c14]);
  let d12 = C5("panels"), i15 = x7.indexOf(c14);
  i15 === -1 && (i15 = d12);
  let s14 = i15 === u17, { isFocusVisible: F7, focusProps: M8 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), b6 = (0, import_react107.useMemo)(() => ({ selected: s14, focus: F7 }), [s14, F7]), m12 = D({ ref: T10, id: o19, role: "tabpanel", "aria-labelledby": (I7 = (E11 = _5[i15]) == null ? void 0 : E11.current) == null ? void 0 : I7.id, tabIndex: s14 ? a18 : -1 }, M8);
  return !s14 && ((g6 = n13.unmount) == null || g6) && !((R8 = n13.static) != null && R8) ? import_react107.default.createElement(T2, { as: "span", "aria-hidden": "true", ...m12 }) : H({ ourProps: m12, theirProps: n13, slot: b6, defaultTag: Ge2, features: Ue4, visible: s14, name: "Tabs.Panel" });
}
var we3 = W(ve3);
var Oe3 = W(Se5);
var Ne5 = W(Ie5);
var ke3 = W(Me4);
var Be3 = W(He5);
var st3 = Object.assign(we3, { Group: Oe3, List: Ne5, Panels: ke3, Panel: Be3 });

// node_modules/@headlessui/react/dist/components/textarea/textarea.js
var import_react108 = __toESM(require_react(), 1);
var L7 = "textarea";
function H9(s14, l16) {
  let i15 = (0, import_react46.useId)(), p7 = u5(), d12 = a3(), { id: n13 = p7 || `headlessui-textarea-${i15}`, disabled: e7 = d12 || false, autoFocus: r17 = false, invalid: a18 = false, ...T10 } = s14, f20 = I2(), m12 = G(), { isFocused: o19, focusProps: u17 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r17 }), { isHovered: t12, hoverProps: b6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), y10 = D({ ref: l16, id: n13, "aria-labelledby": f20, "aria-describedby": m12, "aria-invalid": a18 ? "" : void 0, disabled: e7 || void 0, autoFocus: r17 }, u17, b6), x7 = (0, import_react108.useMemo)(() => ({ disabled: e7, invalid: a18, hover: t12, focus: o19, autofocus: r17 }), [e7, a18, t12, o19, r17]);
  return H({ ourProps: y10, theirProps: T10, slot: x7, defaultTag: L7, name: "Textarea" });
}
var w8 = W(H9);
export {
  h2 as Button,
  Re as Checkbox,
  y2 as CloseButton,
  Nt as Combobox,
  Ho as ComboboxButton,
  Go as ComboboxInput,
  jo as ComboboxLabel,
  Ko as ComboboxOption,
  zo as ComboboxOptions,
  C3 as DataInteractive,
  w3 as Description,
  Pt as Dialog,
  ct as DialogBackdrop,
  Dt as DialogDescription,
  We as DialogPanel,
  $e as DialogTitle,
  We2 as Disclosure,
  Ce as DisclosureButton,
  Ie3 as DisclosurePanel,
  H7 as Field,
  C4 as Fieldset,
  Fe2 as FocusTrap,
  x2 as FocusTrapFeatures,
  J4 as Input,
  K as Label,
  d11 as Legend,
  Mo2 as Listbox,
  Ut as ListboxButton,
  Nt2 as ListboxLabel,
  Vt as ListboxOption,
  Gt as ListboxOptions,
  Ht as ListboxSelectedOption,
  Zt as Menu,
  ct2 as MenuButton,
  gt2 as MenuHeading,
  Tt as MenuItem,
  ft as MenuItems,
  yt as MenuSection,
  It2 as MenuSeparator,
  no as Popover,
  At2 as PopoverBackdrop,
  gt3 as PopoverButton,
  Ct2 as PopoverGroup,
  St2 as PopoverOverlay,
  Rt2 as PopoverPanel,
  te as Portal,
  Be2 as Radio,
  Tt3 as RadioGroup,
  Ke as RadioGroupDescription,
  Ve2 as RadioGroupLabel,
  We3 as RadioGroupOption,
  $4 as Select,
  qe2 as Switch,
  Ce2 as SwitchDescription,
  ve2 as SwitchGroup,
  xe5 as SwitchLabel,
  st3 as Tab,
  Oe3 as TabGroup,
  Ne5 as TabList,
  Be3 as TabPanel,
  ke3 as TabPanels,
  w8 as Textarea,
  Xe as Transition,
  Ie as TransitionChild,
  l5 as useClose
};
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=@headlessui_react.js.map
