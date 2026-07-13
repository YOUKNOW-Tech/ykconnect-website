// YOUKNOW Connect — Toast context.
// Lives outside chrome.jsx/brand.jsx so both can use it without a circular import
// (brand.jsx's Sticker needs useToast for the rage-click easter egg; chrome.jsx already imports from brand.jsx).
import { createContext, useContext } from 'react';

export const ToastContext = createContext(() => {});

export function useToast() {
  return useContext(ToastContext);
}
